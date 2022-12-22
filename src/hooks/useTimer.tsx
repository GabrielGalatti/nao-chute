import { useEffect, useMemo, useState } from "react";

type UseTimerProps = {
  seconds: number;
  onExpire?: () => void;
};

const useTimer = ({ seconds, onExpire = () => {} }: UseTimerProps) => {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time === 0) {
        clearInterval(interval);
        onExpire();
      } else setTime(time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time, onExpire]);

  return {
    minutes: Math.floor((time / 60) % 60),
    seconds: Math.floor(time % 60),
  };
};

export default useTimer;
