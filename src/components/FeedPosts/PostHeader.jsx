import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const PostHeader = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="progile" src="/img1.png" size={"sm"} />
        <Flex>
          <Box fontSize={"sm"} gap={2} mr={2} fontWeight={"bold"}>
            John Doe
          </Box>
          <Text fontSize={"sm"} color={"gray.500"}>
            • 1h
          </Text>
        </Flex>
      </Flex>
      <Box
        fontSize={12}
        color={"blue.500"}
        cursor={"pointer"}
        _hover={{
          color: "white",
        }}
        transition={"0.2s ease-in-out"}
        mr={2}
        fontWeight={"bold"}
      >
        Unfollow
      </Box>
    </Flex>
  );
};

export default PostHeader;
