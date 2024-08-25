import React from "react";
import {
  Box,
  VStack,
  Input,
  Button,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuhtForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleAuth = () => {
    if (isLogin) {
      if (!inputs.email || !inputs.password) {
        alert("Please fill in all fields");
        return;
      }
    } else {
      if (!inputs.email || !inputs.password || !inputs.confirmPassword) {
        alert("enter all the fields");
        return;
      }
    }
    navigate("/");
  };

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="./logo.png" h={24} cursor={"pointer"} alt="Instagram" />
          <Input
            placeholder="Email"
            fontSize={14}
            type="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <Input
            placeholder="password"
            fontSize={14}
            type="password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
          {!isLogin ? (
            <Input
              placeholder="Confirm password"
              fontSize={14}
              type="password"
              value={inputs.confirmPassword}
            />
          ) : null}
          <Button
            w={"full"}
            variant="solid"
            colorScheme="blue"
            fontSize={14}
            onClick={handleAuth}
          >
            {isLogin ? "Log in" : "Sign Up"}
          </Button>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            mt={2}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text fontSize={12} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            mt={3}
            w={"full"}
            cursor={"pointer"}
          >
            <Image src={"./google.png"} alt="google" h={5} />
            <Text mx={2} color={"blue.500"}>
              Log in with Google
            </Text>
          </Flex>
        </VStack>
      </Box>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't Have an Account?" : "Already have Account?"}
          </Box>
          <Box
            color={"blue.500"}
            cursor={"pointer"}
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            {isLogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuhtForm;
