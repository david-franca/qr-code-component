import Typography from "@/components/Typography";
import { Card, CardBody, Center, Flex, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <Center h="100vh" bg="slate.300" p={["1.5rem", "0"]}>
      <Card
        maxW={["100%", "400px"]}
        rounded="25px"
        boxShadow="0px 25px 25px 0px rgba(0, 0, 0, 0.05)"
        p="1.5rem 1.5rem 2.5rem 1.5rem"
      >
        <CardBody
          p="0"
          gap="1.5rem"
          bg="white"
          display="flex"
          flexDir="column"
          w="288px"
        >
          <Image
            src="/img/qrCode.png"
            alt="QR Code"
            rounded="10px"
            w="full"
            h="full"
          />
          <Flex gap="1rem" flexDir="column" px="1rem">
            <Typography bold>
              Improve your front-end skills by building projects
            </Typography>
            <Typography>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </Typography>
          </Flex>
        </CardBody>
      </Card>
    </Center>
  );
}
