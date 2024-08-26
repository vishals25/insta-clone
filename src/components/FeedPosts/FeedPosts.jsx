import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  const [IsLoading, seIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      seIsLoading(false);
    }, 2000);
  });
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {IsLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size="10" mb={4} />
              <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
                <Skeleton height="10px" w={"200px"} />
                <Skeleton height="10px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}>coming soon</Box>
            </Skeleton>
          </VStack>
        ))}
      {!IsLoading && (
        <>
          <FeedPost img="/img1.png" username="josh" avatar="/img1.png" />
          <FeedPost img="/img2.png" username="vishal" avatar="/img2.png" />
          <FeedPost img="/img3.png" username="doe" avatar="/img3.png" />
          <FeedPost img="/img4.png" username="jane" avatar="/img4.png" />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
