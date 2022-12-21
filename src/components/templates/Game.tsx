import { Flex } from "@chakra-ui/react";

import { QUESTION_AREA } from "../../config/constants";

import { QUESTION_STATUS } from "../../context/questions/types";

import { AnswerType } from "../../types/Answer";
import { Result } from "../../types/Result";

import Question from "../organisms/Question";
import QuestionHeader from "../organisms/QuestionHeader";
import QuestionMenu from "../organisms/QuestionMenu";

type GameProps = {
  area: QUESTION_AREA;
  initialDate: Date;
  onExpire: () => void;
  onChooseArea: (area: QUESTION_AREA) => void;
  onChooseAnswer: (answerId: number) => void;
  selectedAnswerIndex?: number;
  answers: AnswerType[];
  questionStatement: string;
  questionStatus: QUESTION_STATUS;
  result?: Result;
};

const Game = ({
  area,
  initialDate,
  onExpire,
  onChooseArea,
  onChooseAnswer,
  selectedAnswerIndex,
  answers,
  questionStatement,
  result,
  questionStatus,
}: GameProps) => {
  return (
    <Flex flexDirection="column">
      <QuestionHeader
        area={area}
        initialDate={initialDate}
        onExpire={onExpire}
        status={questionStatus}
      />
      <Flex
        justifyContent="flex-start"
        w="100%"
        pt="40px"
        flexDirection={["column", "row"]}
      >
        <QuestionMenu areaSelected={area} onClickMenuItem={onChooseArea} />
        <Flex
          flex={1}
          px={["0px", "40px"]}
          pt={["20px", "0px"]}
          overflowY="auto"
          maxH="60vh"
        >
          <Question
            onChooseAnswer={onChooseAnswer}
            selectAnswerIndex={selectedAnswerIndex}
            answers={answers}
            questionStatement={questionStatement}
            result={result}
            status={questionStatus}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Game;
