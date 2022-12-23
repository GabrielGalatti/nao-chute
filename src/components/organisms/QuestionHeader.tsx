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
  onTimeUpdate?: (time: number, interval: NodeJS.Timer) => void;
  leftSeconds: number;
};

const QuestionHeader = ({
  area,
  onExpire,
  status,
  onTimeUpdate,
  leftSeconds,
}: QuestionHeaderProps) => {
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
        <Timer
          onExpire={onExpire}
          leftSeconds={leftSeconds}
          onTimeUpdate={onTimeUpdate}
        />
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
