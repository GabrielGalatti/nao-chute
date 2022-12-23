import { Result } from "../../types/Result";

export enum QUESTION_STATUS {
  FINISHED = "FINISHED",
  STARTED = "STARTED",
}

export type QuestionAnswer = {
  questionId: number;
  answerId: number;
  result: Result;
};

export type QuestionTime = {
  questionId: number;
  secondsLeft: number;
};

export type QuestionStatus = {
  questionId: number;
  status: QUESTION_STATUS;
  result?: Result;
};

export enum QUESTION_ACTION_TYPES {
  ANSWER_QUESTION = "ANSWER_QUESTION",
  SET_QUESTION_TIMES = "SET_QUESTION_TIMES",
  SET_QUESTION_STATUS = "SET_QUESTION_STATUS",
}

export type QuestionAction = {
  action: QUESTION_ACTION_TYPES;
  payload: QuestionTime | QuestionAnswer | QuestionStatus;
};

export type QuestionState = {
  id: number;
  status?: QUESTION_STATUS;
  secondsLeft?: number;
  answerId?: number;
  result?: Result;
};

export type QuestionContextState = {
  questions: QuestionState[];
};

export type QuestionPossibleActions = {
  answerQuestion: (questionAnswer: QuestionAnswer) => void;
  setQuestionTimes: (questionTime: QuestionTime) => void;
  setQuestionStatus: (questionStatus: QuestionStatus) => void;
};

export type QuestionContextType = {
  state: QuestionContextState;
  actions: QuestionPossibleActions;
};
