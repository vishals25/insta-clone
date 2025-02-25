import { Box, Flex, Link, Tooltip, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { InstagramLogo, InstagramMobileLogo } from "../../assets/contants";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "./../../../store/authStore";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  const authUser = useAuthStore((state) => state.user);
  const { handleLogout, isLoggingOut } = useLogout();

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} height={"full"}>
        {/* Desktop logo */}
        <Link
          to="/"
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor="pointer"
        >
          <InstagramLogo />
        </Link>

        {/* Mobile logo */}
        <Link
          to="/"
          as={RouterLink}
          p={2}
          display={{ base: "block", md: "none" }}
          width={10}
          _hover={{
            bg: "whiteAlpha.200",
          }}
          cursor="pointer"
        >
          <InstagramMobileLogo />
        </Link>

        {/* Sidebar items */}
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          <SidebarItems />
        </Flex>
        {/* LOGOUT */}
        <Tooltip
          hasArrow
          label="Logout"
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Flex
            onClick={handleLogout}
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "whiteAlpha.400", borderRadius: "3px" }}
            p={2}
            justifyContent={{ base: "center", md: "flex-start" }}
            mt={"auto"}
          >
            <BiLogOut />
            <Button
              display={{ base: "none", md: "block" }}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              isLoading={isLoggingOut}
            >
              Logout
            </Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
