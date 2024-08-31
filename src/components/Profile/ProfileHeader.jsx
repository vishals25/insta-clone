import useUserProfileStore from "./../../../store/userProfileStore";
import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

const ProfileHeader = () => {
  const { userProfile } = useUserProfileStore();

  return (
    <>
      <Flex
        gap={{ base: 4, sm: 10 }}
        py={10}
        direction={{ base: "column", sm: "row" }}
      >
        <AvatarGroup
          size={{ base: "xl", md: "2xl" }}
          justifySelf={"center"}
          alignItems={"flex-start"}
          mx={"auto"}
        >
          <Avatar src={userProfile.profilePicURL}></Avatar>
        </AvatarGroup>
        <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
          <Flex
            gap={4}
            direction={{ base: "column", sm: "row" }}
            justifyContent={{ base: "center", sm: "flex-start" }}
            alignItems={"center"}
            w={"full"}
          >
            <Text fontSize={{ base: "small", md: "lg" }}>
              {userProfile.username}
            </Text>
            <Flex
              gap={4}
              justifyContent={{ base: "center", sm: "flex-start" }}
              alignItems={"center"}
            >
              <Button
                bg={"white"}
                color={"black"}
                _hover={{ bg: "whiteAlpha.800" }}
                size={{ base: "xs", md: "sm" }}
              >
                Edit Profile
              </Button>
            </Flex>
          </Flex>
          <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
            <Text fontSize={{ base: "x-small", md: "small" }}>
              <Text as={"span"} fontWeight={"bold"} mr={1}>
                {userProfile.posts.length}
              </Text>
              Posts
            </Text>
            <Text fontSize={{ base: "x-small", md: "small" }}>
              <Text as={"span"} fontWeight={"bold"} mr={1}>
                {userProfile.followers.length}
              </Text>
              Followers
            </Text>
            <Text fontSize={{ base: "x-small", md: "small" }}>
              <Text as={"span"} fontWeight={"bold"} mr={1}>
                {userProfile.following.length}
              </Text>
              Following
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap={4}>
            <Text fontSize={"small"} fontWeight={"bold"}>
              {userProfile.fullname}
            </Text>
          </Flex>
          <Flex fontSize={"small"}>
            <Text>{userProfile.bio}</Text>
          </Flex>
        </VStack>
      </Flex>
    </>
  );
};

export default ProfileHeader;
