import { Avatar, Button, Flex, Text, VStack } from "@chakra-ui/react";
import useFollowUser from "./../../hooks/useFollowUser";
import useAuthStore from "../../../store/authStore";

const SuggestedUser = ({ user, setUser }) => {
  const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(user.uid);
  const authUser = useAuthStore((state) => state.user);

  const onFollowUser = async () => {
    await handleFollowUser();
    setUser({
      ...user,
      followers: isFollowing
        ? user.followers.filter((follower) => follower.uid !== authUser.uid)
        : [...user.followers, authUser],
    });
  };

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} setUser={user.uid}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="Programmer" src={user.profilePicURL} size={"sm"} />
        <VStack alignItems={"start"} mb={0} gap={0}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            {user.username}
          </Text>
          <Text fontSize={"xs"} color={"gray.500"}>
            {user.followers.length} followers
          </Text>
        </VStack>
      </Flex>
      {authUser.uid !== user.uid && (
        <Button
          fontSize={13}
          bg={"transparent"}
          h={"max-content"}
          fontWeight={"medium"}
          color={"blue.500"}
          cursor={"pointer"}
          onClick={onFollowUser}
          _hover={{ bg: "transparent", color: "white" }}
          isLoading={isUpdating}
          p={0}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      )}
    </Flex>
  );
};

export default SuggestedUser;
