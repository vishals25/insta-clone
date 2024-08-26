import { Container } from "@chakra-ui/react";
import React from "react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      <FeedPost img="/img1.png" username="josh" avatar="/img1.png" />
      <FeedPost img="/img2.png" username="vishal" avatar="/img2.png" />
      <FeedPost img="/img3.png" username="doe" avatar="/img3.png" />
      <FeedPost img="/img4.png" username="jane" avatar="/img4.png" />
    </Container>
  );
};

export default FeedPosts;
