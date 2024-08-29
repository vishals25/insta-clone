import React from "react";
import { Flex, Text, Avatar } from "@chakra-ui/react";
const Comment = ({ createdAt, username, ProfilePic, text }) => {
  return (
    <>
      <Flex gap={4}>
        <Avatar src={ProfilePic} name={username} size={"sm"} />
        <Flex direction={"column"}>
          <Flex gap={2}>
            <Text fontWeight={"bold"} fontSize={12}>
              {username}
            </Text>
            <Text fontSize={14}>{text}</Text>
          </Flex>
          <Text fontSize={12} color={"gray"}>
            {createdAt}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Comment;
