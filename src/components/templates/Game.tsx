import { Flex } from "@chakra-ui/react";
import { QUESTION_AREA } from "../../config/constants";
import QuestionHeader from "../organisms/QuestionHeader";
import QuestionMenu from "../organisms/QuestionMenu";

type GameProps = {
  area: QUESTION_AREA;
  initialDate: Date;
  onExpire: () => void;
  onChooseArea: (area: QUESTION_AREA) => void;
};

const Game = ({ area, initialDate, onExpire, onChooseArea }: GameProps) => {
  return (
    <Flex flexDirection="column">
      <QuestionHeader
        area={area}
        initialDate={initialDate}
        onExpire={onExpire}
      />
      <Flex justifyContent="flex-start" w="100%" pt="40px">
        <QuestionMenu areaSelected={area} onClickMenuItem={onChooseArea} />
      </Flex>
    </Flex>
  );
};

export default Game;
