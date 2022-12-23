import { useEffect, useMemo } from "react";
import useTimer from "../../hooks/useTimer";
import StyledText from "../atoms/StyledText";

type TimerProps = {
  onExpire: () => void;
  onTimeUpdate?: (time: number, interval: NodeJS.Timer) => void;
  leftSeconds: number;
};

const Timer = ({ onExpire, onTimeUpdate, leftSeconds }: TimerProps) => {
  const { minutes, seconds } = useTimer({
    seconds: leftSeconds,
    onExpire,
    onTimeUpdate,
  });

  const timerString = useMemo(() => {
    const secondsFormatted = seconds < 10 ? `0${seconds}` : seconds;
    return `Tempo Restante:*<br>* *<b>${minutes}:${secondsFormatted}<b>*`;
  }, [minutes, seconds]);

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
