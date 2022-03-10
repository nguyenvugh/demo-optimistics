import { Image, Td, Tr } from "@chakra-ui/react";
import React from "react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

function ProductItem(props) {
  const { handleDeleteProduct, product } = props;
  return (
    <Tr>
      <Td>
        <Image src={product.thumnail} w="120px" h="70px" objectFit="fill" />
      </Td>
      <Td>{product.name}</Td>
      <Td isNumeric>{product.price} $</Td>
      <Td overflow="hidden" whiteSpace="nowrap">
        {product.description}
      </Td>
      <Td>
        <AddIcon cursor="pointer" />
        <DeleteIcon
          ml="10px"
          cursor="pointer"
          onClick={() => handleDeleteProduct(product.id)}
        />
      </Td>
    </Tr>
  );
}

export { ProductItem };
