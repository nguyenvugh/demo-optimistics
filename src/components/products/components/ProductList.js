import {
  Box,
  Button,
  Skeleton,
  Stack,
  Table,
  TableCaption,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { ProductItemProvider } from "../providers/ProductItemProvider";

function ProductList(props) {
  const { products, showFavorites, isLoading } = props;

  return isLoading ? (
    <Loading />
  ) : (
    <Box
      className={""}
      width="600px"
      sx={{
        td: {
          color: "white",
          fontSize: "14px",
        },
      }}
    >
      <Text fontSize="20px" fontWeight="bold" color="white">
        ProductList
      </Text>

      <Button onClick={showFavorites}>Show List</Button>

      <Table variant="simple">
        <TableCaption>Product list</TableCaption>
        <Thead>
          <Tr>
            <Th>Thumnail</Th>
            <Th>Name</Th>
            <Th isNumeric>Price</Th>
            <Th>Description</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {(products || []).map((product) => (
            <ProductItemProvider product={product} />
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

function Loading() {
  return (
    <Stack>
      <Skeleton height="20px" width="500px" />
      <Skeleton height="20px" width="500px" />
      <Skeleton height="20px" width="500px" />
      <Skeleton height="20px" width="500px" />
      <Skeleton height="20px" width="500px" />
      <Skeleton height="20px" width="500px" />
      <Skeleton height="20px" width="500px" />
      <Skeleton height="20px" width="500px" />
      <Skeleton height="20px" width="500px" />
    </Stack>
  );
}

export { ProductList };
