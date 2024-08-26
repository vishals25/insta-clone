import { Avatar, Box, Flex, Text, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="Programmer" src="/profilepic.png" size={"sm"} />
        <Text fontSize={14} fontWeight={"bold"}>
          Vishal
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        to={"/auth"}
        color={"blue.400"}
        style={{ textDecoration: "none" }}
        _hover={{ color: "white" }}
        cursor={"pointer"}
        fontSize={12}
      >
        Logout
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
