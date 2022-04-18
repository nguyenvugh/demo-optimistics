import { HStack } from "@chakra-ui/react";
import React from "react";

function Wrapper(props) {
  return (
    <HStack
      bg="#1A202C"
      minHeight="100vh"
      w="full"
      alignItems="start"
      justifyContent="center"
      pt="150px"
      spacing="10"
    >
      {props.children}
    </HStack>
  );
}

export default Wrapper;
