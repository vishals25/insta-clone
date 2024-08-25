import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

const PostFooter = () => {
  const [Liked, setLiked] = useState(false);
  const [Likes, setLikes] = useState(1000);
  return (
    <>
      <Flex alignItems={"center"} gap={4} w={"full"} mb={2} mt={"auto"}>
        <Box></Box>
      </Flex>
    </>
  );
};

export default PostFooter;
