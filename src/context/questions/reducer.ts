import { Question } from "../../types/Question";
import { QuestionAnswer } from "../../types/QuestionAnswer";
import { QuestionAction, QUESTION_ACTION_TYPES } from "./types";

export const questionsReducer = (
  prevState: Question[],
  action: QuestionAction
): Question[] => {
  const possibleActions = {
    [QUESTION_ACTION_TYPES.INIT_QUESTIONS]: () => action.payload as Question[],
    [QUESTION_ACTION_TYPES.ANSWER_QUESTION]: () => {
      const questionAnswer = action.payload as QuestionAnswer;
      const question = prevState.find(
        (question) => question.id === questionAnswer.questionId
      ) as Question;
      return prevState
        .filter((q) => q.id !== questionAnswer.questionId)
        .concat({
          ...question,
          answers: question.answers.map((answer) => ({
            ...answer,
            selected: answer.id === questionAnswer.answerId,
          })),
        });
    },
  };

  return possibleActions[action.action]();
};
