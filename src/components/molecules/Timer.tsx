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

  const { minutes, seconds } = useTimer({
    expiryTimestamp: addMinutes(initialDate, 5),
    onExpire,
  });

  return (
    <StyledText
      size="24px"
      boldSize="36px"
      regularWeight={600}
      boldWeight={600}
      text={`Tempo Restante:*<br>* *<b>${minutes}:${seconds}<b>*`}
      textAlign="center"
      lineHeight="40px"
      key="title"
    />
  );
};

export default Timer;
