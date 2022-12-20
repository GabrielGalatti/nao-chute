import { Dispatch } from "react";

import {
  QuestionAction,
  QuestionPossibleActions,
  QUESTION_ACTION_TYPES,
  QuestionAnswer,
  QuestionTime,
  QuestionStatus,
} from "./types";

const answerQuestion = (
  questionAnswer: QuestionAnswer,
  dispatch: Dispatch<QuestionAction>
) => {
  // Ver como salvar respostas do usuário no localStorage
  console.log("answerQuestion", questionAnswer);
  dispatch({
    action: QUESTION_ACTION_TYPES.ANSWER_QUESTION,
    payload: questionAnswer,
  });
};

const setQuestionTimes = (
  questionTime: QuestionTime,
  dispatch: Dispatch<QuestionAction>
) => {
  // Ver como salvar tempo de resposta do usuário no localStorage
  dispatch({
    action: QUESTION_ACTION_TYPES.SET_QUESTION_TIMES,
    payload: questionTime,
  });
};

const setQuestionStatus = (
  questionStatus: QuestionStatus,
  dispatch: Dispatch<QuestionAction>
) => {
  dispatch({
    action: QUESTION_ACTION_TYPES.SET_QUESTION_STATUS,
    payload: questionStatus,
  });
};

export const questionActions = (
  dispatch: Dispatch<QuestionAction>
): QuestionPossibleActions => ({
  answerQuestion: (questionAnswer: QuestionAnswer) =>
    answerQuestion(questionAnswer, dispatch),
  setQuestionTimes: (questionTime: QuestionTime) =>
    setQuestionTimes(questionTime, dispatch),
  setQuestionStatus: (questionStatus: QuestionStatus) =>
    setQuestionStatus(questionStatus, dispatch),
});
