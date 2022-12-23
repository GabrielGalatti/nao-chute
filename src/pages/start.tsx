import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

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
  secondsLeft: number;
};

const Start = ({ apiQuestions }: StartProps) => {
  const [area, setArea] = useState<QUESTION_AREA>(QUESTION_AREA.EXATAS);
  const currentTimer = useRef<NodeJS.Timer | null>(null);
  const currentSeconds = useRef<number>(180);

  const {
    state: { questions },
    actions: { answerQuestion, setQuestionStatus, setQuestionTimes },
  } = useContext(QuestionsContext);

  const { statement, answers, id } = useMemo(() => {
    return apiQuestions.find((question) => question.area === area) as Question;
  }, [area, apiQuestions]);

  const {
    answerId: selectedAnswer,
    result,
    secondsLeft,
    status,
    id: questionId,
  }: QuestionState = (questions.find(
    (question) => question.id === id
  ) as QuestionState) || {};

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

  const updateQuestionTimes = (secondsLeft: number, interval: NodeJS.Timer) => {
    currentTimer.current = interval;
    currentSeconds.current = secondsLeft;
  };

  const initializeQuestion = useCallback(() => {
    if (!questionId) {
      setQuestionTimes({
        questionId: id,
        secondsLeft: 300,
      });
    }
  }, [id, setQuestionTimes, questionId]);

  useEffect(() => {
    initializeQuestion();
  }, [initializeQuestion]);

  useEffect(() => {
    console.log("id", id);
    console.log("secondsLeft", secondsLeft);
  }, [secondsLeft, id]);

  const selectArea = (selectedArea: QUESTION_AREA) => {
    if (currentTimer.current) {
      clearInterval(currentTimer.current);
      currentTimer.current = null;
    }
    setQuestionTimes({
      questionId: id,
      secondsLeft: currentSeconds.current,
    });
    setArea(selectedArea);
  };

  return (
    <Game
      area={area}
      onChooseArea={selectArea}
      onExpire={onTimeIsOver}
      onChooseAnswer={chooseAnswer}
      selectedAnswerIndex={selectedAnswer}
      answers={answers}
      questionStatement={statement}
      result={result}
      questionStatus={status || QUESTION_STATUS.STARTED}
      leftSeconds={secondsLeft || currentSeconds.current}
      onTimeUpdate={updateQuestionTimes}
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
