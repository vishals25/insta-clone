import { Container, Box, Flex } from "@chakra-ui/react";
import React from "react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>
        <Box
          flex={3}
          mr={10}
          display={{ base: "none", md: "block" }}
          maxW={"300px"}
          border={"1px solid red"}
        >
          <h1>Right Side</h1>
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
