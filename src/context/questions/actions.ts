import { Dispatch } from "react";

import { Question } from "../../types/Question";
import { QuestionAnswer } from "../../types/QuestionAnswer";
import { QuestionAction, QUESTION_ACTION_TYPES } from "./types";

const initializeQuestions = (
  questions: Question[],
  dispatch: Dispatch<QuestionAction>
) => {
  localStorage.setItem("questions", JSON.stringify(questions));
  dispatch({
    action: QUESTION_ACTION_TYPES.INIT_QUESTIONS,
    payload: questions,
  });
};

const answerQuestion = (
  questionAnswer: QuestionAnswer,
  dispatch: Dispatch<QuestionAction>
) => {
  // Ver como salvar respostas do usuário no localStorage
  dispatch({
    action: QUESTION_ACTION_TYPES.ANSWER_QUESTION,
    payload: questionAnswer,
  });
};

export const questionActions = (dispatch: Dispatch<QuestionAction>) => ({
  initializeQuestions: (questions: Question[]) =>
    initializeQuestions(questions, dispatch),
  answerQuestion: (questionAnswer: QuestionAnswer) =>
    answerQuestion(questionAnswer, dispatch),
});
