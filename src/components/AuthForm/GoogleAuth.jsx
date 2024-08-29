import React from "react";
import { Image, Flex, Text } from "@chakra-ui/react";

const GoogleAuth = () => {
  return (
    <>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        mt={3}
        w={"full"}
        cursor={"pointer"}
      >
        <Image src={"./google.png"} alt="google" h={5} />
        <Text mx={2} color={"blue.500"}>
          Log in with Google
        </Text>
      </Flex>
    </>
  );
};

export default GoogleAuth;
