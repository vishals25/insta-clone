import {
  Box,
  Flex,
  GridItem,
  Image,
  Text,
  useDisclosure,
  Avatar,
  Divider,
  VStack,
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

const ProfilePost = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
                7
              </Text>
            </Flex>
            <Flex alignItems="center">
              <FaComment size={20} />
              <Text fontWeight="bold" ml={2}>
                7
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image
          src={img}
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
        size={{ base: "3xl", md: "5xl" }}
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
              <Box
                borderRadius={4}
                overflow={"hidden"}
                borderRight={"1px solid whiteAlpha.500"}
                flex={1.5}
              >
                <Image src={img} alt="post Modal pic" />
              </Box>
              <Flex
                flex={1}
                flexDir={"column"}
                px={10}
                display={{ base: "none", md: "flex" }}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar src="/profilepic.png" alt="profilepic" />
                    <Text fontWeight={"bold"} fontSize={12}>
                      vishal
                    </Text>
                  </Flex>
                  <Box
                    _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                    borderRadius={4}
                    p={1}
                  >
                    <MdDelete
                      size={20}
                      cursor={"pointer"}
                      aria-label="Delete post"
                    />
                  </Box>
                </Flex>
                <Divider />
                <VStack
                  w={"full"}
                  alignItems={"start"}
                  maxH={"350px"}
                  overflowY={"auto"}
                >
                  <Comment
                    createdAt="1d ago"
                    username="vishal"
                    ProfilePic="/profilepic.png"
                    text={"Dummy images from Splash"}
                  />
                  <Comment
                    createdAt="1d ago"
                    username="vishal"
                    ProfilePic="/profilepic.png"
                    text={"Dummy images from Splash"}
                  />
                  <Comment
                    createdAt="12hr ago"
                    username="vishal"
                    ProfilePic="/profilepic.png"
                    text={"Dummy images from Splash"}
                  />
                  <Comment
                    createdAt="1d ago"
                    username="vishal"
                    ProfilePic="/profilepic.png"
                    text={"Dummy images from Splash"}
                  />
                  <Comment
                    createdAt="1d ago"
                    username="vishal"
                    ProfilePic="/profilepic.png"
                    text={"Dummy images from Splash"}
                  />
                  <Comment
                    createdAt="12hr ago"
                    username="vishal"
                    ProfilePic="/profilepic.png"
                    text={"Dummy images from Splash"}
                  />
                </VStack>
                <Divider />
                <PostFooter isProfilePage={true} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
