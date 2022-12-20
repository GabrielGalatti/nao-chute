import React from "react";
import QuestionsProvider from "./questions";

type ContextProps = {
  children: React.ReactNode;
};

const ContextProvider = ({ children }: ContextProps) => {
  return <QuestionsProvider>{children}</QuestionsProvider>;
};

export default ContextProvider;
