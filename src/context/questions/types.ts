import { Question } from "../../types/Question";
import { QuestionAnswer } from "../../types/QuestionAnswer";

export enum QUESTION_ACTION_TYPES {
  INIT_QUESTIONS = "INIT_QUESTIONS",
  ANSWER_QUESTION = "ANSWER_QUESTION",
}

export type QuestionAction = {
  action: QUESTION_ACTION_TYPES;
  payload: Question[] | QuestionAnswer;
};
