import { Flex, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaHeartbeat, FaSquareRootAlt, FaChess } from "react-icons/fa";
import { COLORS } from "../../config/colors";

import { QUESTION_AREA } from "../../config/constants";

type QuestionMenuProps = {
  areaSelected: QUESTION_AREA;
  onClickMenuItem: (area: QUESTION_AREA) => void;
};

const QuestionMenu = ({ areaSelected, onClickMenuItem }: QuestionMenuProps) => {
  const AREA_ICONS: { [key in QUESTION_AREA]: IconType } = {
    [QUESTION_AREA.EXATAS]: FaSquareRootAlt,
    [QUESTION_AREA.HUMANAS]: FaChess,
    [QUESTION_AREA.BIOLOGICAS]: FaHeartbeat,
  };

  return (
    <Flex
      flexDir="column"
      gap="50px"
      alignItems="center"
      justifyContent="center"
      borderRight={`1px solid ${COLORS.TEXT}`}
      pr="20px"
    >
      {Object.keys(AREA_ICONS).map((area) => (
        <Icon
          as={AREA_ICONS[area as QUESTION_AREA]}
          key={`ib-${area}`}
          boxSize="25px"
          color={areaSelected == area ? COLORS.PRIMARY : COLORS.TEXT}
          onClick={() => onClickMenuItem(area as QUESTION_AREA)}
          cursor="pointer"
        />
      ))}
    </Flex>
  );
};

export default QuestionMenu;
