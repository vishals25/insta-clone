import { Box, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const FeedPost = ({ img, username, avatar }) => {
  return (
    <>
      <PostHeader username={username} avatar={avatar} />
      <Box my={2}>
        <Image
          overflow={"hidden"}
          borderRadius={4}
          src={img}
          alt={`${username}'s post image`}
        />
      </Box>
      <PostFooter username={username} />
    </>
  );
};

export default FeedPost;
