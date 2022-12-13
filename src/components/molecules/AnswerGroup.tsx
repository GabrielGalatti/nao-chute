import { Flex } from "@chakra-ui/react";
import { AnswerType } from "../../types/Answer";
import Answer from "../atoms/Answer";

type AnswerGroupProps = {
  answers: AnswerType[];
  selectedAnswerIndex?: number;
  onClick: (id: number) => void;
};

const AnswerGroup = ({
  answers,
  selectedAnswerIndex,
  onClick,
}: AnswerGroupProps) => {
  return (
    <Flex flexDirection="column" gap="15px" w="100%">
      {answers.map((answer, index) => (
        <Answer
          key={`answer-${index}`}
          answer={answer}
          onClick={onClick}
          isSelected={selectedAnswerIndex === answer.id}
        />
      ))}
    </Flex>
  );
};

export default AnswerGroup;
