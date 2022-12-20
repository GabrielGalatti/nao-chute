import { QUESTION_AREA } from "../config/constants";
import { AnswerType } from "./Answer";

export type Question = {
  id: number;
  statement: string;
  area: QUESTION_AREA;
  initialDate: Date;
  finalDate: Date;
  answers: AnswerType[];
};
