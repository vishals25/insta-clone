import {
  Avatar,
  Box,
  Flex,
  Link,
  Tooltip,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/contants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "./../../../store/authStore";

const Sidebar = () => {
  const authUser = useAuthStore((state) => state.user);
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar size={"xs"} name="Vishal S" src={authUser.profilePicURL} />,
      text: "Profile",
      link: `/${authUser.username}`,
    },
  ];
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
          {sidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
                display={"flex"}
                alignItems={"center"}
                to={item.link || "#"}
                as={RouterLink}
                gap={4}
                _hover={{ bg: "whiteAlpha.400", borderRadius: "3px" }}
                p={2}
                justifyContent={{ base: "center", md: "flex-start" }}
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>
                  <Text>{item.text}</Text>
                </Box>
              </Link>
            </Tooltip>
          ))}
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
