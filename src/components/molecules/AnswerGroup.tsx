import { Flex, Progress, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { COLORS } from "../../config/colors";
import { urbane } from "../../config/fonts";
import { AnswerType } from "../../types/Answer";
import { Result } from "../../types/Result";
import Answer from "../atoms/Answer";

type AnswerGroupProps = {
  answers: AnswerType[];
  selectedAnswerIndex?: number;
  onClick: (id: number) => void;
  result?: Result;
};

const AnswerGroup = ({
  answers,
  selectedAnswerIndex,
  onClick,
  result,
}: AnswerGroupProps) => {
  const getProgressValue = (id: number) => {
    if (!result) return 0;
    const n = result.result[id.toString()] || 0;
    return Math.trunc(((n * 100) / result.numberOfAnswers) * 10) / 10;
  };

  return (
    <Flex flexDirection="column" gap="15px" w="100%">
      {answers.map((answer, index) => (
        <Flex key={`answer-${index}`} flexDir="column" w="100%">
          {result && (
            <>
              <Flex w="100%" flexDir="column" alignItems="flex-end">
                <Text
                  fontSize={14}
                  fontFamily={urbane.style.fontFamily}
                  fontWeight={600}
                  color={COLORS.TEXT}
                >
                  {`${getProgressValue(answer.id)}%`}
                </Text>
              </Flex>
              <Progress
                value={getProgressValue(answer.id)}
                h="5px"
                colorScheme="purple"
                mb="10px"
                isIndeterminate={getProgressValue(answer.id) === 0}
              />
            </>
          )}
          <Answer
            answer={answer}
            onClick={onClick}
            isSelected={selectedAnswerIndex === answer.id}
          />
        </Flex>
      ))}
    </Flex>
  );
};

export default AnswerGroup;
