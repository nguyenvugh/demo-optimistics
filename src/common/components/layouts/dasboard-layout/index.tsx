import React from "react";
import Header from "./Header";
import { LeftMenu } from "./LeftMenu";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function DashBoardLayout() {
  return (
    <HStack alignItems="start" spacing="0">
      <LeftMenu />
      <VStack flexGrow={1} h="100vh" overflow="auto" spacing="0">
        <Header />
        <Box w="full" bg="#F7F7FA" flexGrow={1} m="0px" p="6" overflow="auto">
          <Outlet />
        </Box>
      </VStack>
    </HStack>
  );
}

export { DashBoardLayout };
