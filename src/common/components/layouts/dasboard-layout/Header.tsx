import { Avatar, Box } from "@chakra-ui/react";
import React from "react";

function Header() {
  return (
    <Box
      w="full"
      h="24"
      shadow="header"
      zIndex="1"
      bg="white"
      flexShrink={0}
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      px="5"
    >
      <Avatar cursor="pointer" w="12" h="12" />
    </Box>
  );
}

export default Header;
