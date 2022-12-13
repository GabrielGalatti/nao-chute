import { Box, Text } from "@chakra-ui/react";
import { COLORS } from "../../config/colors";
import { urbane } from "../../config/fonts";
import { AnswerType } from "../../types/Answer";

type AnswerProps = {
  answer: AnswerType;
  isSelected: boolean;
  onClick: (id: number) => void;
};

const Answer = ({ isSelected, answer, onClick }: AnswerProps) => {
  return (
    <Box
      w="100%"
      py="10px"
      px="20px"
      bgColor={isSelected ? COLORS.SECONDARY : COLORS.GRAY}
      borderRadius="10px"
      onClick={() => onClick(answer.id)}
      cursor="pointer"
    >
      <Text
        fontFamily={urbane.style.fontFamily}
        fontWeight={500}
        color={isSelected ? COLORS.WHITE : COLORS.TEXT}
        fontSize="14px"
      >
        {answer.text}
      </Text>
    </Box>
  );
};

export default Answer;
