import { Avatar, Button, Flex, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const SuggestedUser = ({ name, followers, avatar }) => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="Programmer" src={avatar} size={"sm"} />
        <VStack alignItems={"start"} mb={0} gap={0}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            {name}
          </Text>
          <Text fontSize={"xs"} color={"gray.500"}>
            {followers} followers
          </Text>
        </VStack>
      </Flex>
      <Button
        fontSize={13}
        bg={"transparent"}
        h={"max-content"}
        fontWeight={"medium"}
        color={"blue.500"}
        cursor={"pointer"}
        onClick={() => setIsFollowed(!isFollowed)}
        _hover={{ bg: "transparent", color: "white" }}
        p={0}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
  );
};

export default SuggestedUser;
