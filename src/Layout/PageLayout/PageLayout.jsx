import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <Flex>
      {pathname !== "/auth" ? (
        // Sidebar should only be displayed if not on the "/auth" route
        <Box w={{ base: "57px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}

      {/* The page content */}
      <Box flex="1" w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
