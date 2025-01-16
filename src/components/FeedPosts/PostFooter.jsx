import {
  Box,
  Flex,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/contants";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../../store/authStore";
import useLikePost from "../../hooks/useLikePost";
import { timeAgo } from "../../utils/timeAgo";
import CommentsModal from "../Modals/CommentsModal";

const PostFooter = ({ post, isProfilePage,creatorProfile }) => {
  const { isCommenting, handlePostComment } = usePostComment();
  const [comment, setComment] = useState("");
  const authUser = useAuthStore(state => (state.user));
  const commentRef = useRef(null);
  const {isLiked, handleLikePost, isUpdating ,likes } = useLikePost(post);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment)
    setComment('');
  }

  return (
    <Box mb={10} mt={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} mb={2} mt={3}>
        <Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}>
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18} onClick={()=> commentRef.current.focus()}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"small"}>
        {likes} likes
      </Text>
      {isProfilePage && (
        <Text fontWeight={600} fontSize={"small"} color={'gray'}>
            Posted {timeAgo(post.createdAt)}
        </Text>
      )}
      {!isProfilePage && (
        <>
          <Text fontWeight={700} fontSize={"small"}>
            {creatorProfile?.username}{" "}
            <Text as="span" fontWeight={400}>
              {post.caption}
            </Text>
          </Text>
          <Text fontSize={"small"} color={"gray"}>
            {post.comments.length > 0 && (
              <Text as="span" fontWeight={400} cursor={"pointer"} onClick={onOpen}>
                View all {post.comments.length} comments
              </Text>
            )}
          </Text>
          {isOpen ? <CommentsModal isOpen={isOpen} onClose={onClose} post={post}/> : null}
        </>
      )}

      {authUser && (
        <Flex alignItems={"center"} gap={2} justifyContent={"space-between"}>
        <InputGroup mx={2}>
          <Input
            variant={"flushed"}
            placeholder={"Add a comment..."}
            fontSize={14}
            onChange={(e) => setComment(e.target.value)}
              value={comment}
              ref={commentRef}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              _hover={{ color: "white" }}
              fontWeight={600}
              bg={"transparent"}
              onClick={handleSubmitComment}
              isLoading={isCommenting}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
      )}
    </Box>
  );
};

export default PostFooter;
