import { Box, Card, CardBody, Flex } from "@chakra-ui/react";
import Header from "../organisms/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
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
        <Header />
        <Card w="100%" minH="100%" bgColor="white" borderRadius="20px">
          <CardBody>{children}</CardBody>
        </Card>
      </Flex>
    </Box>
  );
};

export default Layout;
