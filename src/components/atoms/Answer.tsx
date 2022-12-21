import { Box, Text } from "@chakra-ui/react";
import { useCallback, useMemo } from "react";
import { COLORS } from "../../config/colors";
import { urbane } from "../../config/fonts";
import { AnswerType } from "../../types/Answer";

type AnswerProps = {
  answer: AnswerType;
  isSelected: boolean;
  onClick: (id: number) => void;
  correctAnswerId?: number;
};

const Answer = ({
  isSelected,
  answer,
  onClick,
  correctAnswerId,
}: AnswerProps) => {
  const bgColor = useMemo(() => {
    if (isSelected && !correctAnswerId) return COLORS.SECONDARY;
    else if (isSelected && correctAnswerId !== answer.id) return COLORS.ERROR;
    else if (correctAnswerId === answer.id) return COLORS.SUCCESS;
    return COLORS.GRAY;
  }, [correctAnswerId, isSelected, answer.id]);
  return (
    <Box
      w="100%"
      py="10px"
      px="20px"
      bgColor={bgColor}
      borderRadius="10px"
      onClick={() => onClick(answer.id)}
      cursor="pointer"
    >
      <Text
        fontFamily={urbane.style.fontFamily}
        fontWeight={500}
        color={bgColor === COLORS.GRAY ? COLORS.TEXT : COLORS.WHITE}
        fontSize="14px"
      >
        {answer.label}
      </Text>
    </Box>
  );
};

export default Answer;
