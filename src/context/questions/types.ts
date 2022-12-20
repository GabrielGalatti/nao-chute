export enum QUESTION_STATUS {
  FINISHED = "FINISHED",
  STARTED = "STARTED",
}

export type QuestionAnswer = {
  questionId: number;
  answerId: number;
};

export type QuestionTime = {
  questionId: number;
  initialDate: string;
};

export type QuestionStatus = {
  questionId: number;
  status: QUESTION_STATUS;
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
  initialDate?: string;
  answerId?: number;
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
