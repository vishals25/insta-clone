import SuggestedUser from "./SuggestedUser";
import { Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={14} fontWeight={"bold"} color={"gray.500"}>
          Suggested For You
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          color={"white"}
          _hover={{ color: "blue.100" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser name="joe" followers={1999} avatar="/img1.png" />
      <SuggestedUser name="doe" followers={69} avatar="/img2.png" />
      <SuggestedUser name="john" followers={159} avatar="/img3.png" />
      <Flex alignItems={"flex-start"}>
        <Text fontSize={12} color={"gray.500"} mt={5}>
          Build by ©{" "}
          <Link
            href="https://github.com/vishals25"
            target="_blank"
            color={"blue.500"}
            fontSize={12}
            textDecoration={"none"}
            _hover={{ color: "white" }}
          >
            Vishal
          </Link>
          ™
        </Text>
      </Flex>
    </VStack>
  );
};

export default SuggestedUsers;
