import { useMemo, useState } from "react";
import Game from "../components/templates/Game";
import { QUESTION_AREA } from "../config/constants";

const Start = () => {
  const initialDate = useMemo(() => new Date(), []);
  const [area, setArea] = useState<QUESTION_AREA>(QUESTION_AREA.EXATAS);
  const [selectedAnswer, setAnswer] = useState<number | undefined>(undefined);
  return (
    <Game
      area={area}
      initialDate={initialDate}
      onChooseArea={(selectedArea) => setArea(selectedArea)}
      onExpire={console.log}
      onChooseAnswer={(answerId) => setAnswer(answerId)}
      selectedAnswerIndex={selectedAnswer}
    />
  );
};

export default Start;
