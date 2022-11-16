import React from "react";

import {
  Box,
  Flex,
  Button,
  HStack,
  Image,
  useDisclosure,
  Stack,
  Text,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Center,
  Grid,
  GridItem,
  BGImage,
  Container,
} from "@chakra-ui/react";

import logo from "./assets/logo.jpg";

function Header() {
  return (
    <Flex
      bg="#404040"
      alignItems="center"
      justifyContent="space-between"
      py="3"
      px="2vw"
    >
      <Button>Back</Button>
      <Text fontWeight="bold" fontSize="2xl" color="white">
        Hotel Details
      </Text>
      <Image src={logo} w="50px"></Image>
    </Flex>
  );
}

export default Header;
