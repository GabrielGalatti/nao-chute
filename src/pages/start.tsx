import { useCallback, useContext, useEffect, useMemo, useState } from "react";

import Game from "../components/templates/Game";

import { QUESTION_AREA } from "../config/constants";
import { QuestionsContext } from "../context/questions";
import { QuestionState, QUESTION_STATUS } from "../context/questions/types";
import {
  answerQuestionRequest,
  getQuestionResultrequest,
} from "../services/question";

import { ApiResponse } from "../types/ApiResponse";
import { Question } from "../types/Question";
import { Result } from "../types/Result";

type StartProps = {
  apiQuestions: Question[];
};

type CurrentState = {
  selectedAnswer?: number;
  result?: Result;
  status: QUESTION_STATUS;
};

const Start = ({ apiQuestions }: StartProps) => {
  const initialDate = useMemo(() => new Date(), []);
  const [area, setArea] = useState<QUESTION_AREA>(QUESTION_AREA.EXATAS);

  const {
    state: { questions },
    actions: { answerQuestion, setQuestionStatus, setQuestionTimes },
  } = useContext(QuestionsContext);

  const { statement, answers, id } = useMemo(() => {
    return apiQuestions.find((question) => question.area === area) as Question;
  }, [area, apiQuestions]);

  const { result, selectedAnswer, status }: CurrentState = useMemo(() => {
    const q = questions.find((question) => question.id === id) as QuestionState;
    if (!q || questions.length === 0)
      return {
        selectedAnswer: undefined,
        result: undefined,
        status: QUESTION_STATUS.STARTED,
      };
    return {
      selectedAnswer: q.answerId,
      result: q.result,
      status: q.status || QUESTION_STATUS.STARTED,
    };
  }, [questions, id]);

  useEffect(() => {
    console.log(result);
  }, [result]);

  const onTimeIsOver = useCallback(async () => {
    const response = await getQuestionResultrequest(id);
    if (!response.ok) return;
    const { data } = (await response.json()) as ApiResponse<Result>;

    setQuestionStatus({
      questionId: id,
      status: QUESTION_STATUS.FINISHED,
      result: data,
    });
  }, [id, setQuestionStatus]);

  const chooseAnswer = useCallback(
    async (answerId: number) => {
      const response = await answerQuestionRequest({
        answerId,
        questionId: id,
      });

      if (!response.ok) return;
      const { data } = (await response.json()) as ApiResponse<Result>;

      answerQuestion({ questionId: id, answerId, result: data });
    },
    [id, answerQuestion]
  );

  const changeArea = useCallback(
    (selectedArea: QUESTION_AREA) => {
      setQuestionTimes({
        questionId: id,
        secondsLeft: 180,
      });
      setArea(selectedArea);
    },
    [setQuestionTimes, setArea, id]
  );

  return (
    <Game
      area={area}
      onChooseArea={(selectedArea) => setArea(selectedArea)}
      onExpire={onTimeIsOver}
      onChooseAnswer={chooseAnswer}
      selectedAnswerIndex={selectedAnswer}
      answers={answers}
      questionStatement={statement}
      result={result}
      questionStatus={status}
    />
  );
};

export default Start;

export async function getStaticProps(context: any) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/questions/current`,
    {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      }),
    }
  );

  if (response.status !== 200)
    return {
      props: {
        apiQuestions: [],
      },
    };

  const { data } = (await response.json()) as ApiResponse<Question[]>;
  return {
    props: {
      apiQuestions: data || [],
    },
  };
}
