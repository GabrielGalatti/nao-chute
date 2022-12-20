import { useCallback, useContext, useEffect, useMemo, useState } from "react";

import Game from "../components/templates/Game";

import { QUESTION_AREA } from "../config/constants";
import { QuestionsContext } from "../context/questions";
import { QuestionState } from "../context/questions/types";

import { ApiResponse } from "../types/ApiResponse";
import { Question } from "../types/Question";

type StartProps = {
  apiQuestions: Question[];
};

const Start = ({ apiQuestions }: StartProps) => {
  const initialDate = useMemo(() => new Date(), []);
  const [area, setArea] = useState<QUESTION_AREA>(QUESTION_AREA.EXATAS);

  const {
    state: { questions },
    actions: { answerQuestion },
  } = useContext(QuestionsContext);

  const { statement, answers, id } = useMemo(() => {
    return apiQuestions.find((question) => question.area === area) as Question;
  }, [area, apiQuestions]);

  const selectedAnswer = useMemo(() => {
    if (questions.length === 0) return undefined;
    const q = questions.find((question) => question.id === id) as QuestionState;

    return q?.answerId;
  }, [questions, id]);

  return (
    <Game
      area={area}
      initialDate={initialDate}
      onChooseArea={(selectedArea) => setArea(selectedArea)}
      onExpire={console.log}
      onChooseAnswer={(answerId) =>
        answerQuestion({ questionId: id, answerId })
      }
      selectedAnswerIndex={selectedAnswer}
      answers={answers}
      questionStatement={statement}
    />
  );
};

export default Start;

export async function getStaticProps(context: any) {
  const response = await fetch("http://localhost:1337/api/questions/current", {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      authorization: `Bearer bd3af4ff805d42c2783c4d7c1bddac502be8b92f13c5bebf03240ca9b70548878fd7f6fa689e82bf04f6264d38d686bedb6b65ef8553f16665053a0903185d0a8e31bee296697a0559b296ce3d611521eefff7b0daf16908ef391ff0438fbd25976a6c302318951fc8468aaa4b898e3ee2a785e2fca266c44f397c71299253b4`,
    }),
  });

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
