import React from "react";

import bgImage from "./assets/bg.png";
import hotel from "./assets/hotel.jpg";

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

import Header from "./Header";

function Landing() {
  return (
    <>
      <Header></Header>
      <Flex
        height="100vh"
        bgImage={bgImage}
        bgSize="cover"
        bgPosition="center"
        alignItems={{ base: "start", md: "center" }}
        justifyContent={{ base: "start", md: "center" }}
        flexDirection="column"
        gap="6"
        px="6"
        py="6"
      >
        <Image
          src={hotel}
          height={{ base: "200px", md: "300px" }}
          border="4px solid white"
        ></Image>
        <Flex
          alignItems={{ base: "start", md: "center" }}
          flexDirection="column"
          w="100%"
          gap="1"
        >
          <Text color="white" fontWeight="bold" fontSize="md">
            Hilton Chicago
          </Text>
          <Text color="#6CC6F1">
            720 South Michigan Avenue<br></br> Chicago, Illinois, 60605
          </Text>
          <Text color="white">1-312-922-400</Text>
        </Flex>
        <Flex flexDirection="column" w={{ base: "100%", md: "40%" }}>
          <Link
            borderTopRadius="8px"
            py="3"
            px="3"
            fontWeight="bold"
            bgGradient="linear(to-t, #6CC6F1, white)"
          >
            Map
          </Link>
          <Link
            py="3"
            px="3"
            fontWeight="bold"
            bgGradient="linear(to-t, #6CC6F1, white)"
          >
            Map
          </Link>
          <Link
            py="3"
            px="3"
            fontWeight="bold"
            bgGradient="linear(to-t, #6CC6F1, white)"
          >
            Map
          </Link>
          <Link
            py="3"
            px="3"
            fontWeight="bold"
            bgGradient="linear(to-t, #6CC6F1, white)"
            borderBottomRadius="8px"
          >
            Map
          </Link>
        </Flex>
      </Flex>
    </>
  );
}

export default Landing;
