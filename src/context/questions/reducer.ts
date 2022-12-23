import {
  QuestionAction,
  QuestionContextState,
  QUESTION_ACTION_TYPES,
  QuestionTime,
  QuestionAnswer,
  QuestionStatus,
  QuestionState,
  QUESTION_STATUS,
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
            id: questionAnswer.questionId,
            answerId: questionAnswer.answerId,
            status: QUESTION_STATUS.FINISHED,
            result: questionAnswer.result,
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
            id: questionTime.questionId,
            secondsLeft: questionTime.secondsLeft,
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
            id: questionStatus.questionId,
            status: questionStatus.status,
            result: questionStatus.result,
          },
        ],
      };
    },
  };

  return possibleActions[action.action]();
};
