import React from "react";
// import Button from "react-bootstrap/Button";

import { useAuth } from "../context/AuthContext";

import { FaSun, FaMoon } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
// import { VscAccount } from "react-icons/vsc";
import {
  IconButton,
  useColorMode,
  VStack,
  HStack,
  Heading,
  // useToast,
} from "@chakra-ui/react";
// import FontAwesomeIcon from ''

export default function Header() {
  const { userData, handleLogout } = useAuth();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p="2em">
      <IconButton
        colorScheme="teal"
        aria-label="Send email"
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
        alignSelf="flex-end"
      />
      {/* <Heading as="h1" size="4xl" noOfLines={1} mb='30' bgGradient='linear(to-r, pink.500, pink.300, blue.500)'> */}
      <Heading
        as="h1"
        size="4xl"
        noOfLines={1}
        mb="30"
        // bgGradient="linear(to-r, #FFB6B9, #FAE3D9, #BBDED6, #61C0BF)"
        bgGradient="linear(to-r, primary.100, primary.200, primary.300, primary.400)"
        bgClip="text"
        textstyles='h1'
      >
        Whiteboard App
      </Heading>

      {userData.isAuth ? (
        <HStack>
          <Heading as="h3" size="lg" bg="#61C0BF" bgClip="text" variant={['base', 'sm', 'md']}>
            Welcome{" "}
            {userData.user.username.charAt(0).toUpperCase() +
              userData.user.username.slice(1)}
            {/* Logout */}
            <IconButton
              m="3"
              colorScheme="teal"
              aria-label="Send email"
              icon={<FiLogOut />}
              onClick={handleLogout}
              alignSelf="flex-end"
            />
          </Heading>

          {/* <IconButton
            colorScheme="teal"
            aria-label="Send email"
            icon={<FiLogOut />}
            onClick={handleLogout}
            alignSelf="flex-end"
          /> */}

          {/* <Button
            variant="outline-success"
            onClick={handleLogout}
            style={{ marginLeft: "107em" }}
          >
            Logout */}
          {/* <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" /> */}
          {/* <i style={{ fontSize: "24px" }} className="fas">
            &#xf35a;
            </i> */}
          {/* </Button> */}
        </HStack>
      ) : null}
    </VStack>
  );
}
