import {
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import ProfilePosts from "../../components/Profile/ProfilePosts";
import useGetUserProfileByUsername from "../../hooks/useGetUserProfileByUsername";
import { Link as RouterLink, useParams } from "react-router-dom";

const ProfilePage = () => {
  const { username } = useParams();

  // Pass username as an object to the custom hook
  const { isLoading, userProfile } = useGetUserProfileByUsername({ username });

  // Check if user profile was not found
  const userNotFound = !isLoading && !userProfile;
  if (userNotFound) {
    return <UserNotFound />;
  }

  return (
    <>
      <Container maxW={"container.lg"} py={5}>
        <Flex
          py={10}
          px={4}
          pl={{ base: 4, md: 10 }}
          w={"full"}
          mx={"auto"}
          flexDirection={"column"}
        >
          {!isLoading && userProfile && (
            <ProfileHeader userProfile={userProfile} />
          )}
          {isLoading && <ProfileHeaderSkeleton />}
        </Flex>

        <Flex
          px={{ base: 2, sm: 4 }}
          maxW={"full"}
          mx={"auto"}
          borderTop={"1px solid"}
          borderColor={"whiteAlpha.300"}
          direction={"column"}
        >
          <ProfileTabs />
          <ProfilePosts />
        </Flex>
      </Container>
    </>
  );
};

export default ProfilePage;

// Component for handling case when user is not found
const UserNotFound = () => {
  return (
    <Flex flexDir="column" textAlign={"center"} mx={"auto"} py={10}>
      <Text fontSize={"2xl"}>User Not Found</Text>
      <Link
        as={RouterLink}
        to={"/"}
        color={"blue.500"}
        w={"max-content"}
        mx={"auto"}
        mt={4}
      >
        Go home
      </Link>
    </Flex>
  );
};

// Skeleton loader for ProfileHeader component
const ProfileHeaderSkeleton = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <SkeletonCircle size="24" />

      <VStack
        alignItems={{ base: "center", sm: "flex-start" }}
        gap={2}
        mx={"auto"}
        flex={1}
      >
        <Skeleton height="12px" width="150px" />
        <Skeleton height="12px" width="100px" />
      </VStack>
    </Flex>
  );
};
