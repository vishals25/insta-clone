import { Box, Flex, Grid, Skeleton, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";
import useGetUserPosts from "../../hooks/useGetUserPosts";

const ProfilePosts = () => {

  const { IsLoading, posts } = useGetUserPosts();

  const noPostsFound = !IsLoading && posts.length === 0;
  if (noPostsFound) return <NoPostsFound/>
  return (
    <Grid
      templateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      gap={1}
      columnGap={1}
    >
      {IsLoading &&
        [0, 1, 2,].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Skeleton w={"full"}>
              <Box h={"500px"}>coming soon</Box>
            </Skeleton>
          </VStack>
        ))}
      {!IsLoading && (
        <>
          {posts.map((post) => (
            <ProfilePost key={post.id} post={post} />
            ))}
        </>
      )}
    </Grid>
  );
};

export default ProfilePosts;


const NoPostsFound = () => {
	return (
		<Flex flexDir='column' textAlign={"center"} mx={"auto"} mt={10}>
			<Text fontSize={"2xl"}>No Posts Found🤔</Text>
		</Flex>
	);
};