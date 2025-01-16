import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";

const FeedPosts = () => {

  const { IsLoading, posts } = useGetFeedPosts();
  
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {IsLoading &&
        [0, 1, 2].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size="10" mb={4} />
              <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
                <Skeleton height="10px" w={"200px"} />
                <Skeleton height="10px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"400px"}>coming soon</Box>
            </Skeleton>
          </VStack>
        ))}
      {!IsLoading && (
        <>
          {!IsLoading && posts.length > 0 &&
            posts.map((post) => (
              <FeedPost key={post.id} post={post} />
              ))
          }
        </>
      )}
      {
        !IsLoading && posts.length === 0 && (
          <Flex
            align={"center"}
            justify={"center"}
          >
            <Box
            fontSize={"xl"}
            fontWeight={"bold"}
            color={"gray.500"}

          >
            No posts yet

          </Box>
          </Flex>
      )}
    </Container>
  );
};

export default FeedPosts;
