import { DeleteIcon } from "@chakra-ui/icons";
import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

function Favourites(props) {
  const { isOpen, onClose, favourites, handleDeleteFavorites } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent minW="max">
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Table variant="simple">
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
              {(favourites || []).map((p) => (
                <Tr>
                  <Td>
                    <Image
                      src={p.thumnail}
                      w="150px"
                      h="70px"
                      objectFit="fill"
                    />
                  </Td>
                  <Td>{p.name}</Td>
                  <Td isNumeric>{p.price} $</Td>
                  <Td overflow="hidden" whiteSpace="nowrap">
                    {p.description}
                  </Td>
                  <Td>
                    <DeleteIcon
                      ml="10px"
                      cursor="pointer"
                      onClick={() => handleDeleteFavorites(p.id)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export { Favourites };
