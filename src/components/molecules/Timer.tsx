import { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import StyledText from "../atoms/StyledText";

type TimerProps = {
  initialDate: Date;
  onExpire: () => void;
};

const Timer = ({ initialDate, onExpire }: TimerProps) => {
  const addMinutes = (date: Date, minutes: number) => {
    date.setMinutes(date.getMinutes() + minutes);
    return date;
  };

  // const { minutes, seconds } = useTimer({
  //   expiryTimestamp: addMinutes(initialDate, 5),
  //   onExpire,
  // });

  return (
    <StyledText
      size="18px"
      boldSize="24px"
      lineHeight="24px"
      regularWeight={600}
      boldWeight={600}
      text={`Tempo Restante:*<br>* *<b>${5}:00<b>*`}
      textAlign="right"
      key="timer"
    />
  );
};

export default Timer;
