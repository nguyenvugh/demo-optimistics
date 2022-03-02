import { CheckCircleIcon, InfoIcon } from "@chakra-ui/icons";
import { Box, Spinner, Text, useToast as useToastC } from "@chakra-ui/react";

export function useToast() {
  const toast = useToastC();
  function handleToast({ message, id }) {
    toast({
      id,
      position: "top-right",
      duration: null,
      containerStyle: {
        minWidth: "unset",
        paddingRight: "20px",
      },
      render() {
        return <ToastMessage message={message} status="loading" />;
      },
    });
  }

  function handleClose(id) {
    setTimeout(() => {
      toast.close(id);
    }, 2000);
  }

  function handleUpdateToast(id, message, status) {
    toast.update(id, {
      render() {
        return <ToastMessage status={status} message={message} />;
      },
    });
    handleClose(id);
  }

  return { toast: handleToast, update: handleUpdateToast, close: handleClose };
}

const icon = {
  loading: <Spinner color="white" size="sm" />,
  success: <CheckCircleIcon color="white" />,
  error: <InfoIcon color="white" />,
};
const bg = {
  loading: "#3182CE",
  success: "#48BB78",
  error: "#E53E3E",
};
function ToastMessage({ status, message }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      px="4"
      py="3"
      bg={bg[status]}
      borderRadius="6px"
      maxW="max"
    >
      {icon[status]}
      <Text ml="2" fontSize="14px">
        {message}
      </Text>
    </Box>
  );
}
