import { Flex } from "@chakra-ui/react";
import { QUESTION_AREA } from "../../config/constants";
import { QUESTION_STATUS } from "../../context/questions/types";

import StyledText from "../atoms/StyledText";
import DynamicTimer from "../molecules/DynamicTimer";
import Timer from "../molecules/Timer";

type QuestionHeaderProps = {
  area: QUESTION_AREA;
  onExpire: () => void;
  status: QUESTION_STATUS;
};

const QuestionHeader = ({ area, onExpire, status }: QuestionHeaderProps) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems={["flex-start", "center"]}
      w="100%"
    >
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
      {status !== QUESTION_STATUS.FINISHED ? (
        <DynamicTimer onExpire={onExpire} />
      ) : (
        <StyledText
          size="18px"
          boldSize="24px"
          regularWeight={600}
          boldWeight={600}
          text={`QUESTÃO*<br>* *<b>FINALIZADA<b>*`}
          textAlign="right"
          lineHeight="24px"
          key="title"
        />
      )}
    </Flex>
  );
};

export default QuestionHeader;
