import {
  Flex,
  GridItem,
  Image,
  Text,
  useDisclosure,
  Avatar,
  Divider,
  VStack,
  Button,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import Comment from "../Comment/Comment";
import PostFooter from "./../FeedPosts/PostFooter";
import useUserProfileStore from "../../../store/userProfileStore";
import useAuthStore from '../../../store/authStore';
import useShowToast from '../../hooks/useShowToast'
import { firestore, storage } from '../../firebase/firebase'
import { useState } from "react";
import { deleteObject, ref } from "firebase/storage";
import { arrayRemove, doc, deleteDoc, updateDoc  } from "firebase/firestore";
import usePostStore from "../../../store/postStore";
import Caption from "../Comment/Caption";

const ProfilePost = ({ post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userProfile = useUserProfileStore((state) => state.userProfile);
  const authUser = useAuthStore((state) => state.user);
  const showToast = useShowToast();
  const [isDeleting, setIsDeleting] = useState(false);
  const deletePost = usePostStore((state) => state.deletePost);
  const decrementPostsCount = useUserProfileStore((state) => state.deletePost);
  

  	const handleDeletePost = async () => {
		if (!window.confirm("Are you sure you want to delete this post?")) return;
		if (isDeleting) return;

		try {
			const imageRef = ref(storage, `posts/${post.id}`);
			await deleteObject(imageRef);
			const userRef = doc(firestore, "users", authUser.uid);
			await deleteDoc(doc(firestore, "posts", post.id));

			await updateDoc(userRef, {
				posts: arrayRemove(post.id),
			});

			deletePost(post.id);
			decrementPostsCount(post.id);
			showToast("Success", "Post deleted successfully", "success");
		} catch (error) {
			showToast("Error", error.message, "error");
		} finally {
			setIsDeleting(false);
		}
	};
  return (
    <>
      <GridItem
        cursor="pointer"
        borderRadius={4}
        overflow="hidden"
        border="1px solid"
        borderColor="whiteAlpha.300"
        position="relative"
        aspectRatio={1}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position="absolute"
          top={0}
          left={0}
          bg="whiteAlpha.300"
          transition="all 0.3s ease"
          zIndex={1}
          width="100%"
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Flex alignItems="center" justifyContent="center" gap={6}>
            <Flex alignItems="center">
              <AiFillHeart size={20} />
              <Text fontWeight="bold" ml={2}>
                {post.likes.length}
              </Text>
            </Flex>
            <Flex alignItems="center">
              <FaComment size={20} />
              <Text fontWeight="bold" ml={2}>
                {post.comments.length}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image
          src={post.imageURL}
          alt="postpic"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </GridItem>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: "2xl", md: "4xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            <Flex
              gap={4}
              w={{ base: "90%", sm: "70%", md: "full" }}
              mx={"auto"}
            >
              <Flex
                borderRadius={4}
                overflow={"hidden"}
                borderRight={"1px solid whiteAlpha.500"}
                flex={1.5}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src={post.imageURL} alt="post Modal pic" />
              </Flex>
              <Flex
                flex={1}
                flexDir={"column"}
                px={10}
                display={{ base: "none", md: "flex" }}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"} paddingBottom={2}>
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar src={userProfile.profilePicURL} alt="profilepic" />
                    <Text fontWeight={"bold"} fontSize={12}>
                      {userProfile.username}
                    </Text>
                  </Flex>
                  {authUser.uid === userProfile.uid && (
                  <Button
                    size={"sm"}
                    bg={"transparent"}
                    _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                    borderRadius={4}
                      p={1}
                      onClick={handleDeletePost}
                      isLoading={isDeleting}
                  >
                    <MdDelete
                      size={20}
                      cursor={"pointer"}
                      aria-label="Delete post"
                    />
                  </Button>
                )}
                </Flex>
                <Divider />
                <VStack
                  w={"full"}
                  alignItems={"start"}
                  maxH={"350px"}
                  overflowY={"auto"}
                >

                  {post.caption && <Caption post={post}/>
                  }
                  {post.comments.map(comment => (
                    <Comment
                      key={comment.id}
                      comment={comment}
                    />
                ))}
                </VStack>
                <Divider />
                <PostFooter isProfilePage={true} post={post} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
