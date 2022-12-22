import { useCallback, useEffect, useRef } from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import Image from "next/image";

import nice from "../../../public/images/nice.svg";
import wrong from "../../../public/images/wrong.svg";

import { bdSuper, urbane } from "../../config/fonts";
import { QUESTION_STATUS } from "../../context/questions/types";

import { AnswerType } from "../../types/Answer";
import { Result } from "../../types/Result";

import AnswerGroup from "../molecules/AnswerGroup";
import StyledText from "../atoms/StyledText";
import { FaMedal } from "react-icons/fa";
import { COLORS } from "../../config/colors";

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
        <>
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap="20px"
            py="15px"
            borderBottom={`1px solid black`}
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
              boldSize="32px"
              lineHeight="24px"
              regularWeight={600}
              boldWeight={600}
              text={
                result && result.correctAnswer.id === selectAnswerIndex
                  ? "PARABÉNS, *<b>VOCÊ ACERTOU!!!<b>*"
                  : "*<b>ERRADO!!!<b>* *<br>* Selecione a próxima questão no menu à esquerda!"
              }
              textAlign="center"
              key="result-title"
            />
          </Flex>
          <Flex w="100%" justifyContent="space-between" mb={-5}>
            <Flex key="answers-number" alignItems="center">
              <Icon as={FaMedal} mr="10px" boxSize="20px" color={COLORS.TEXT} />
              <StyledText
                size="18px"
                boldSize="16px"
                lineHeight="20px"
                regularWeight={600}
                boldWeight={600}
                fontFamily={bdSuper.style.fontFamily}
                text={`Respostas: ${
                  result ? result.numberOfAnswers : "Calculando"
                }`}
                textAlign="left"
              />
            </Flex>
          </Flex>
        </>
      )}
      <AnswerGroup
        answers={answers}
        onClick={
          status !== QUESTION_STATUS.FINISHED ? onChooseAnswer : () => {}
        }
        selectedAnswerIndex={selectAnswerIndex}
        result={result}
      />
    </Flex>
  );
};

export default Question;
