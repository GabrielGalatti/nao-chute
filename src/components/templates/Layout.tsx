import { Box, Card, CardBody, Flex, useDisclosure } from "@chakra-ui/react";

import Header from "../organisms/Header";
import HelpModal from "./HelpModal";
import game from "../../../public/images/game.svg";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const helpSteps = [
    "Você terá que responder *<b>uma pergunta de cada<b>* *<br>* *<b>área (exatas, humanas e biológicas)<b>*",
    "Você terá *<b>5 minutos para responder cada<b>* *<br>* *<b>pergunta<b>*",
    "Você terá acesso à uma análise dos seus resultados",
  ];
  const { onClose, onOpen, isOpen } = useDisclosure();
  return (
    <Box
      minH="100vh"
      w="100vw"
      backgroundImage="/images/bg.png"
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        px={["30px", "5%", "10%", "20%"]}
        py="50px"
        flexDirection="column"
        gap="40px"
      >
        <Header onClickHowToPlay={onOpen} />
        <Card w="100%" minH="100%" bgColor="white" borderRadius="20px">
          <CardBody>{children}</CardBody>
        </Card>
      </Flex>
      <HelpModal
        isOpen={isOpen}
        onClose={onClose}
        btnLabel="FECHAR"
        imgAlt="Como Jogar?"
        imgPath={game}
        onClickBtn={onClose}
        title="Como Jogar?"
        steps={helpSteps}
      />
    </Box>
  );
};

export default Layout;
