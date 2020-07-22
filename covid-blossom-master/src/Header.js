import React from "react";
import { Heading, Flex } from "@chakra-ui/core";


const Header = props => (
  <Flex
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    padding=".5rem 1.5rem"
    bg="green.500"
    color="white"
    {...props}
  >
    <Flex align="center" mr={5}>
      <Heading as="h1" size="lg">
        Covid19 Info
        </Heading>
    </Flex>
  </Flex>
);

export default Header;