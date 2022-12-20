import React, { createContext, useMemo, useReducer } from "react";

import { Question } from "../../types/Question";
import { questionActions } from "./actions";
import { questionsReducer } from "./reducer";
import {
  QuestionContextType,
  QuestionContextState,
  QuestionTime,
  QuestionAnswer,
} from "./types";

type QuestionsProviderProps = {
  children: React.ReactNode;
};

const INITIAL_STATE = {
  questions: [],
} as QuestionContextState;

const QuestionsContext = createContext({
  state: INITIAL_STATE,
  actions: {
    answerQuestion: (questionAnswer: QuestionAnswer) => {},
    setQuestionTimes: (questionTimes: QuestionTime) => {},
  },
} as QuestionContextType);

const QuestionsProvider = ({ children }: QuestionsProviderProps) => {
  const [state, dispatch] = useReducer(questionsReducer, INITIAL_STATE);

  const actions = useMemo(() => questionActions(dispatch), [dispatch]);

  return (
    <QuestionsContext.Provider value={{ actions, state }}>
      {children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsProvider;
