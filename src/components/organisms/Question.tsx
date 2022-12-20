import { Box, Flex } from "@chakra-ui/react";
import { useCallback, useEffect, useRef } from "react";
import { urbane } from "../../config/fonts";

import { AnswerType } from "../../types/Answer";
import AnswerGroup from "../molecules/AnswerGroup";

type QuestionProps = {
  onChooseAnswer: (id: number) => void;
  selectAnswerIndex?: number;
  answers: AnswerType[];
  questionStatement: string;
};

const Question = ({
  onChooseAnswer,
  selectAnswerIndex,
  answers,
  questionStatement,
}: QuestionProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  const updateQuestionStatement = useCallback(() => {
    if (!divRef.current) return;
    divRef.current.innerHTML = questionStatement;
  }, [questionStatement]);

  useEffect(() => {
    updateQuestionStatement();
  }, [updateQuestionStatement]);

  return (
    <Flex flexDirection="column" gap="30px">
      <Box
        ref={divRef}
        justifyContent="center"
        className={urbane.className}
      ></Box>
      <AnswerGroup
        answers={answers}
        onClick={onChooseAnswer}
        selectedAnswerIndex={selectAnswerIndex}
      />
    </Flex>
  );
};

export default Question;
