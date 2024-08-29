import {
  Box,
  Flex,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/contants";

const PostFooter = ({ username, isProfilePage }) => {
  const [Liked, setLiked] = useState(false);
  const [Likes, setLikes] = useState(1000);
  const handleLike = () => {
    if (Liked) {
      setLiked(false);
      setLikes(Likes - 1);
    } else {
      setLiked(true);
      setLikes(Likes + 1);
    }
  };
  return (
    <Box mb={10} mt={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} mb={2} mt={3}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
          {!Liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"small"}>
        {Likes} likes
      </Text>
      {!isProfilePage && (
        <>
          <Text fontWeight={700} fontSize={"small"}>
            {username}{" "}
            <Text as="span" fontWeight={400}>
              Feeling Good
            </Text>
          </Text>
          <Text fontSize={"small"} color={"gray"}>
            View all 1,000 comments
          </Text>
        </>
      )}

      <Flex alignItems={"center"} gap={2} justifyContent={"space-between"}>
        <InputGroup mx={2}>
          <Input
            variant={"flushed"}
            placeholder={"Add a comment..."}
            fontSize={14}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              _hover={{ color: "white" }}
              fontWeight={600}
              bg={"transparent"}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PostFooter;
