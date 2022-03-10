import { Box, Button, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

function ProductForm(props) {
  const { handleAddProduct } = props;

  const [tempProduct, setTempProduct] = useState();
  function handleUpdateTemp(e, key) {
    setTempProduct({ ...tempProduct, [key]: e.target.value });
  }

  return (
    <Box
      width="600px"
      sx={{
        input: {
          color: "white",
        },
      }}
    >
      <Text fontSize="20px" fontWeight="bold" color="white">
        Add new product
      </Text>

      <Text {...LABEL_STYLE}>Name:</Text>
      <Input onChange={(e) => handleUpdateTemp(e, "name")} />
      <Text {...LABEL_STYLE}>Price:</Text>
      <Input onChange={(e) => handleUpdateTemp(e, "price")} />
      <Text {...LABEL_STYLE}>Description:</Text>
      <Input onChange={(e) => handleUpdateTemp(e, "description")} />
      <Text {...LABEL_STYLE}>Thumnail:</Text>
      <Input onChange={(e) => handleUpdateTemp(e, "thumnail")} />

      <Button mt="5" onClick={() => handleAddProduct(tempProduct)}>
        Add
      </Button>
    </Box>
  );
}

const LABEL_STYLE = {
  mt: "3",
};

export { ProductForm };
