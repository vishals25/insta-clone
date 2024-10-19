import { Box, Link, Text, Tooltip } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <Tooltip
      hasArrow
      label="Home"
      placement="right"
      ml={1}
      openDelay={500}
      display={{ base: "block", md: "none" }}
    >
      <Link
        display={"flex"}
        alignItems={"center"}
        to={"/"}
        as={RouterLink}
        gap={4}
        _hover={{ bg: "whiteAlpha.400", borderRadius: "3px" }}
        p={2}
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <AiFillHome size={25} />
        <Box display={{ base: "none", md: "block" }}>
          <Text>Home</Text>
        </Box>
      </Link>
    </Tooltip>
  );
};

export default Home;
