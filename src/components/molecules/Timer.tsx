import { useEffect, useMemo } from "react";
import useTimer from "../../hooks/useTimer";
import StyledText from "../atoms/StyledText";

type TimerProps = {
  onExpire: () => void;
};

const Timer = ({ onExpire }: TimerProps) => {
  const { minutes, seconds } = useTimer({
    seconds: 10,
    onExpire,
  });

  const timerString = useMemo(
    () => `Tempo Restante:*<br>* *<b>${minutes}:${seconds}<b>*`,
    [minutes, seconds]
  );

  return (
    <StyledText
      size="18px"
      boldSize="24px"
      lineHeight="24px"
      regularWeight={600}
      boldWeight={600}
      text={timerString}
      textAlign="right"
      key="timer"
    />
  );
};

export default Timer;
