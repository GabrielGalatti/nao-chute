import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import Image from "next/image";

import { COLORS } from "../../config/colors";
import { bdSuper, urbane } from "../../config/fonts";

import CommonButton from "../atoms/CommonButton";
import StyledText from "../atoms/StyledText";

type HelpModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imgPath: string;
  imgAlt: string;
  steps: string[];
  btnLabel: string;
  onClickBtn: () => void;
};

const HelpModal = ({
  isOpen,
  onClose,
  title,
  imgAlt,
  imgPath,
  steps,
  btnLabel,
  onClickBtn,
}: HelpModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent py="20px" minW="40%">
        <ModalHeader
          fontFamily={bdSuper.style.fontFamily}
          fontSize="24px"
          color={COLORS.PRIMARY}
          textAlign="center"
          fontWeight={600}
        >
          {title}
        </ModalHeader>
        <ModalCloseButton color={COLORS.PRIMARY} />
        <ModalBody>
          <Flex flexDir="column" gap="30px" alignItems="center">
            <Image src={imgPath} alt={imgAlt} height={200} />
            <Flex flexDir="column" alignItems="flex-start" gap="20px">
              {steps.map((step, index) => (
                <StyledText
                  text={`*<b>${index + 1} - <b>* ${step}`}
                  size="16px"
                  key={`step-${index}`}
                  boldColor={COLORS.TEXT}
                  regularColor={COLORS.TEXT}
                  lineHeight="30px"
                  fontFamily={urbane.style.fontFamily}
                />
              ))}
            </Flex>
            <CommonButton label={btnLabel} onClick={onClickBtn} />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default HelpModal;
