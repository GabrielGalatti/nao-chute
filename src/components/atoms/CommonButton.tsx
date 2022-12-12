import { As, Icon, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { COLORS } from "../../config/colors";
import { bdSuper } from "../../config/fonts";

type CommonButtonProps = {
  label: string;
  icon?: As<any>;
  onClick: () => void;
  iconPosition?: "left" | "right";
  hoverColor?: COLORS;
  fullwidth?: boolean;
};

const CommonButton = ({
  label,
  onClick,
  icon,
  iconPosition,
  hoverColor = COLORS.SECONDARY,
  fullwidth,
}: CommonButtonProps) => {
  const getIconProps = () => {
    if (!icon) return {};
    else if (iconPosition === "right")
      return { rightIcon: <Icon as={icon} color="currentcolor" /> };
    else return { leftIcon: <Icon as={icon} color="currentcolor" /> };
  };

  return (
    <Button
      {...getIconProps()}
      fontFamily={bdSuper.style.fontFamily}
      as={motion.button}
      color={COLORS.WHITE}
      bgColor={COLORS.PRIMARY}
      border="none"
      py="20px"
      px="60px"
      fontWeight={700}
      borderRadius={10}
      boxShadow="2xl"
      whileHover={{ scale: 1.1 }}
      transition="0.1s linear"
      w={fullwidth ? "100%" : "auto"}
      _hover={{ bgColor: hoverColor }}
      cursor="pointer"
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CommonButton;
