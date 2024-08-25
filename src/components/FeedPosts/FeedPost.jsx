import { Box, Image } from "@chakra-ui/react";
import React from "react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const FeedPost = () => {
  return (
    <>
      <PostHeader />
      <Box>
        <Image src="/img1.png" alt="profile pic" />
      </Box>
      <PostFooter />
    </>
  );
};

export default FeedPost;
