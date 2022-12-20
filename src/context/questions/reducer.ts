import {
  QuestionAction,
  QuestionContextState,
  QUESTION_ACTION_TYPES,
  QuestionTime,
  QuestionAnswer,
  QuestionStatus,
  QuestionState,
} from "./types";

export const questionsReducer = (
  prevState: QuestionContextState,
  action: QuestionAction
): QuestionContextState => {
  const question = prevState.questions.find(
    (q) => q.id === action.payload.questionId
  ) as QuestionState;

  const possibleActions: {
    [key in QUESTION_ACTION_TYPES]: () => QuestionContextState;
  } = {
    [QUESTION_ACTION_TYPES.ANSWER_QUESTION]: () => {
      const questionAnswer = action.payload as QuestionAnswer;

      return {
        questions: [
          ...prevState.questions.filter(
            (q) => q.id !== questionAnswer.questionId
          ),
          {
            ...question,
            answerId: questionAnswer.answerId,
          },
        ],
      };
    },
    [QUESTION_ACTION_TYPES.SET_QUESTION_TIMES]: () => {
      const questionTime = action.payload as QuestionTime;

      return {
        questions: [
          ...prevState.questions.filter(
            (q) => q.id !== questionTime.questionId
          ),
          {
            ...question,
            initialDate: questionTime.initialDate,
          },
        ],
      };
    },
    [QUESTION_ACTION_TYPES.SET_QUESTION_STATUS]: () => {
      const questionStatus = action.payload as QuestionStatus;
      return {
        questions: [
          ...prevState.questions.filter(
            (q) => q.id !== questionStatus.questionId
          ),
          {
            ...question,
            status: questionStatus.status,
          },
        ],
      };
    },
  };

  return possibleActions[action.action]();
};
