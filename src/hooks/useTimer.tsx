import { useEffect, useRef, useState } from "react";

type UseTimerProps = {
  seconds: number;
  onExpire?: () => void;
  onTimeUpdate?: (time: number, interval: NodeJS.Timer) => void;
};

const useTimer = ({
  seconds,
  onExpire = () => {},
  onTimeUpdate = () => {},
}: UseTimerProps) => {
  const [time, setTime] = useState(seconds);
  const currentTimer = useRef<NodeJS.Timer | null>(null);
  useEffect(() => {
    setTime(seconds);
    if (currentTimer.current) clearInterval(currentTimer.current);
  }, [seconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time === 0) {
        clearInterval(interval);
        onExpire();
      } else {
        const timeUpdated = time - 1;
        setTime(timeUpdated);
        onTimeUpdate(timeUpdated, interval);
      }
    }, 1000);
    currentTimer.current = interval;
    return () => clearInterval(interval);
  }, [time, onExpire, onTimeUpdate]);

  return {
    minutes: Math.floor((time / 60) % 60),
    seconds: Math.floor(time % 60),
  };
};

export default useTimer;
