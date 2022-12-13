import { Flex, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import { BsQuestionLg, BsInstagram } from "react-icons/bs";

import logo from "../../../public/images/logo.png";
import { COLORS } from "../../config/colors";

type HeaderProps = {
  onClickHowToPlay: () => void;
};

const Header = ({ onClickHowToPlay }: HeaderProps) => {
  return (
    <Flex w="100%" justifyContent="space-between" alignItems="center">
      <Image alt="Não Chute!" src={logo} height={60} />
      <Flex gap="15px">
        <IconButton
          aria-label="Como Jogar?"
          icon={<BsQuestionLg />}
          size="md"
          variant="outline"
          color={COLORS.WHITE}
          borderWidth={2}
          onClick={onClickHowToPlay}
          _hover={{ color: COLORS.PRIMARY, bg: COLORS.WHITE }}
        />
        <IconButton
          aria-label="Instagram - Não Chute"
          icon={<BsInstagram />}
          size="md"
          variant="outline"
          color={COLORS.WHITE}
          borderWidth={2}
          _hover={{ color: COLORS.PRIMARY, bg: COLORS.WHITE }}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
