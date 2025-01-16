import { Box, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";

const FeedPost = ({ post }) => {

  const {userProfile} = useGetUserProfileById(post.createdBy);
  return (
    <>
      <PostHeader post={post} creatorProfile={userProfile} />
      <Box my={2}>
        <Image
          overflow={"hidden"}
          borderRadius={4}
          src={post.imageURL}
          alt={`post image`}
        />
      </Box>
      <PostFooter post={post} creatorProfile={userProfile}/>
    </>
  );
};

export default FeedPost;
