import React, { createContext, useMemo, useReducer } from "react";

import { Question } from "../../types/Question";
import { QuestionAnswer } from "../../types/QuestionAnswer";
import { questionActions } from "./actions";
import { questionsReducer } from "./reducer";

type QuestionsProviderProps = {
  children: React.ReactNode;
};

const INITIAL_STATE = [] as Question[];
const QuestionsContext = createContext({
  state: INITIAL_STATE,
  actions: {
    initializeQuestions: (questions: Question[]) => {},
    answerQuestion: (questionAnswer: QuestionAnswer) => {},
  },
});

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
