import { Flex } from "@chakra-ui/react";
import { QUESTION_AREA } from "../../config/constants";

import StyledText from "../atoms/StyledText";
import Timer from "../molecules/Timer";

type QuestionHeaderProps = {
  area: QUESTION_AREA;
  initialDate: Date;
  onExpire: () => void;
};

const QuestionHeader = ({
  area,
  initialDate,
  onExpire,
}: QuestionHeaderProps) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" w="100%">
      <StyledText
        size="18px"
        boldSize="24px"
        regularWeight={600}
        boldWeight={600}
        text={`Área Selecionada:*<br>* *<b>${area}<b>*`}
        textAlign="left"
        lineHeight="24px"
        key="title"
      />
      <Timer initialDate={initialDate} onExpire={onExpire} />
    </Flex>
  );
};

export default QuestionHeader;
