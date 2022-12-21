import { AnswerType } from "./Answer";

export type Result = {
  correctAnswer: AnswerType;
  questionId: number;
  numberOfAnswers: number;
  result: { [key: string]: number };
};
