import { Flex, Box, Spinner } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import Navbar from "../../components/Navbar/Navbar";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && user;
  const canRenderNavbar = pathname !== "/auth" && !user && !loading;
  const checkingUserIsAuth = !user && loading;

  if (checkingUserIsAuth) return <PageLayoutSpinner />;
  return (
    <Flex direction={canRenderNavbar ? "column" : "row"}>
      {canRenderSidebar ? (
        // Sidebar should only be displayed if not on the "/auth" route
        <Box w={{ base: "57px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {canRenderNavbar ? (
        // Navbar should only be displayed if not logged in and not on the "/auth" route
        <Navbar />
      ) : null}

      {/* The page content */}
      <Box
        flex="1"
        w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}
        mx={"auto"}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;

const PageLayoutSpinner = () => {
  return (
    <Flex justify="center" align="center" h="100vh">
      <Spinner size="xl" color="blue.500" />
    </Flex>
  );
};
