import { Text, TextProps, Flex } from "@chakra-ui/react";
import { COLORS } from "../../config/colors";
import { bdSuper } from "../../config/fonts";

type StyledTextProps = {
  text: string;
  boldColor?: COLORS;
  regularColor?: COLORS;
  size: `${number}px`;
  lineHeight?: `${number}px`;
  textAlign?: "center" | "left" | "right";
  boldWeight?: 500 | 600;
  regularWeight?: 400 | 500;
  fontFamily?: string;
};

const StyledText = ({
  text,
  boldColor = COLORS.PRIMARY,
  regularColor = COLORS.TEXT,
  size,
  lineHeight = "64px",
  textAlign = "left",
  boldWeight = 600,
  regularWeight = 400,
  fontFamily = bdSuper.style.fontFamily,
}: StyledTextProps) => {
  const titleSplitted = text.split("*");
  const COMMON_TEXT_PROPS: TextProps = {
    fontFamily,
    fontSize: size,
    display: "inline-block",
    lineHeight,
    textAlign,
  };

  const wordStyles: { [key: string]: TextProps } = {
    bold: {
      as: "span",
      fontWeight: boldWeight,
      color: boldColor,
      ...COMMON_TEXT_PROPS,
    },
    regular: {
      fontWeight: regularWeight,
      color: regularColor,
      ...COMMON_TEXT_PROPS,
    },
  };

  const getWordFormatted = (word: string) => {
    if (word.includes("<b>"))
      return (
        <Text key={word} {...wordStyles.bold}>
          {removeWordStyles(word)}
        </Text>
      );
    else if (word.includes("<br>")) {
      return <br />;
    } else return removeWordStyles(word);
  };

  const removeWordStyles = (word: string) => {
    return word
      .replaceAll("*", "")
      .replaceAll(" (br) ", "<br>")
      .replaceAll("<b>", "");
  };

  return (
    <Text flex={1} {...wordStyles.regular}>
      {titleSplitted.map((word) => (
        <>{getWordFormatted(word)}</>
      ))}
    </Text>
  );
};

export default StyledText;
