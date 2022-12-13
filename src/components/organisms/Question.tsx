import AnswerGroup from "../molecules/AnswerGroup";

type QuestionProps = {
  onChooseAnswer: (id: number) => void;
  selectAnswerIndex?: number;
};

const Question = ({ onChooseAnswer, selectAnswerIndex }: QuestionProps) => {
  const answers = [
    {
      text: "(A) hidrelétrica, porque a água corrente baixa a temperatura da turbina.",
      id: 1,
    },
    {
      text: "(B) hidrelétrica, porque a usina faz uso da energia cinética da água.",
      id: 2,
    },
    {
      text: "(C) termoelétrica, porque no movimento das turbinas ocorre aquecimento.",
      id: 3,
    },
    {
      text: "(D) eólica, porque a turbina é movida pelo movimento da água.",
      id: 4,
    },
    {
      text: "(E) nuclear, porque a energia é obtida do núcleo das moléculas de água",
      id: 5,
    },
  ];

  return (
    <AnswerGroup
      answers={answers}
      onClick={onChooseAnswer}
      selectedAnswerIndex={selectAnswerIndex}
    />
  );
};

export default Question;
