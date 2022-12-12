import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import { urbane } from "../../config/fonts";
import CommonButton from "../atoms/CommonButton";
import StyledText from "../atoms/StyledText";

type HomeTemplateProps = {
  image: string;
  imgAlt: string;
  title: string;
  description: string;
  btnLabel: string;
};

const HomeTemplate = ({
  image,
  imgAlt,
  btnLabel,
  description,
  title,
}: HomeTemplateProps) => {
  return (
    <Flex
      flexDirection="column"
      gap="20px"
      alignItems="center"
      justifyContent="center"
      py="20px"
    >
      <Image src={image} alt={imgAlt} height={180} />
      <StyledText
        size="24px"
        boldSize="36px"
        regularWeight={600}
        boldWeight={600}
        text={title}
        textAlign="center"
        lineHeight="40px"
        key="title"
      />
      <StyledText
        size="16px"
        lineHeight="30px"
        fontFamily={urbane.style.fontFamily}
        boldWeight={500}
        text={description}
        textAlign="center"
        key="description"
      />
      <CommonButton label={btnLabel} onClick={() => {}} />
    </Flex>
  );
};

export default HomeTemplate;
