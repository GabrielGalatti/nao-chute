import { useCallback, useEffect, useRef } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

import nice from "../../../public/images/nice.svg";
import wrong from "../../../public/images/wrong.svg";

import { urbane } from "../../config/fonts";
import { QUESTION_STATUS } from "../../context/questions/types";

import { AnswerType } from "../../types/Answer";
import { Result } from "../../types/Result";

import AnswerGroup from "../molecules/AnswerGroup";
import StyledText from "../atoms/StyledText";

type QuestionProps = {
  onChooseAnswer: (id: number) => void;
  selectAnswerIndex?: number;
  answers: AnswerType[];
  questionStatement: string;
  result?: Result;
  status: QUESTION_STATUS;
};

const Question = ({
  onChooseAnswer,
  selectAnswerIndex,
  answers,
  questionStatement,
  status,
  result,
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
    <Flex flexDirection="column" gap="30px" w="100%">
      {status !== QUESTION_STATUS.FINISHED ? (
        <Box
          ref={divRef}
          justifyContent="center"
          className={urbane.className}
        ></Box>
      ) : (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          py="10px"
        >
          <Image
            src={
              result && result.correctAnswer.id === selectAnswerIndex
                ? nice
                : wrong
            }
            alt="Questão Finalizada!"
            height={180}
          />
          <StyledText
            size="18px"
            boldSize="24px"
            lineHeight="24px"
            regularWeight={600}
            boldWeight={600}
            text={
              result && result.correctAnswer.id === selectAnswerIndex
                ? "PARABÉNS, *<b>VOCÊ ACERTOU!!!<b>*"
                : "*<b>ERRADO!!!<b>* MAS AMANHÃ TEM MAIS!"
            }
            textAlign="center"
            key="result-title"
          />
        </Flex>
      )}
      <AnswerGroup
        answers={answers}
        onClick={
          status !== QUESTION_STATUS.FINISHED ? onChooseAnswer : () => {}
        }
        selectedAnswerIndex={selectAnswerIndex}
      />
    </Flex>
  );
};

export default Question;
