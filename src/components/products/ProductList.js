import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Image,
  Skeleton,
  Stack,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

function ProductList(props) {
  const {
    products,
    handleDeleteProduct,
    showFavorites,
    addFavorites,
    isLoading,
  } = props;
  console.log(products);
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
          {(products || []).map((p) => (
            <Tr>
              <Td>
                <Image src={p.thumnail} w="120px" h="70px" objectFit="fill" />
              </Td>
              <Td>{p.name}</Td>
              <Td isNumeric>{p.price} $</Td>
              <Td overflow="hidden" whiteSpace="nowrap">
                {p.description}
              </Td>
              <Td>
                <AddIcon cursor="pointer" onClick={() => addFavorites(p)} />
                <DeleteIcon
                  ml="10px"
                  cursor="pointer"
                  onClick={() => handleDeleteProduct(p.id)}
                />
              </Td>
            </Tr>
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
