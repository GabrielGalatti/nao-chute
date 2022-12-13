import { Flex } from "@chakra-ui/react";
import { QUESTION_AREA } from "../../config/constants";
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
};

const Game = ({
  area,
  initialDate,
  onExpire,
  onChooseArea,
  onChooseAnswer,
  selectedAnswerIndex,
}: GameProps) => {
  return (
    <Flex flexDirection="column">
      <QuestionHeader
        area={area}
        initialDate={initialDate}
        onExpire={onExpire}
      />
      <Flex
        justifyContent="flex-start"
        w="100%"
        pt="40px"
        flexDirection={["column", "row"]}
      >
        <QuestionMenu areaSelected={area} onClickMenuItem={onChooseArea} />
        <Flex flex={1} px={["0px", "40px"]} pt={["20px", "0px"]}>
          <Question
            onChooseAnswer={onChooseAnswer}
            selectAnswerIndex={selectedAnswerIndex}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Game;
