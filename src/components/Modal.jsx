import React from 'react';
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Heading,
  Grid,
} from '@chakra-ui/react';

const Modal = ({ isOpen, onClose }) => {
  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here
    onClose();
  };

  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay bg="rgba(0, 0, 0, 0.5)" backdropFilter="blur(4px)" />
      <ModalContent
        bg="#f3f3f3"
        p="5rem 6rem"
        boxShadow="0 4rem 6rem rgba(0, 0, 0, 0.3)"
        borderRadius="md"
        position="relative"
        maxW="60rem"
      >
        <ModalCloseButton
          position="absolute"
          top="0.5rem"
          right="2rem"
          color="inherit"
          fontSize="4rem"
          bg="none"
          border="none"
          p="0"
        />
        <ModalHeader p="0" mb="4.5rem">
          <Heading as="h2" fontSize="3.25rem" lineHeight="1.5">
            Open your bank account <br />
            in just{' '}
            <Box
              as="span"
              position="relative"
              _after={{
                display: 'block',
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                height: '100%',
                width: '100%',
                zIndex: -1,
                opacity: 0.7,
                transform: 'scale(1.07, 1.05) skewX(-15deg)',
                backgroundImage: 'var(--chakra-gradients-primary)',
              }}
            >
              5 minutes
            </Box>
          </Heading>
        </ModalHeader>
        <ModalBody p="0">
          <Grid
            as="form"
            onSubmit={handleSubmit}
            templateColumns="1fr 2fr"
            alignItems="center"
            gap="2.5rem"
            mx="3rem"
          >
            <FormLabel fontSize="1.7rem" fontWeight="500">
              First Name
            </FormLabel>
            <Input
              type="text"
              fontSize="1.7rem"
              p="1rem 1.5rem"
              border="1px solid #ddd"
              borderRadius="0.5rem"
            />

            <FormLabel fontSize="1.7rem" fontWeight="500">
              Last Name
            </FormLabel>
            <Input
              type="text"
              fontSize="1.7rem"
              p="1rem 1.5rem"
              border="1px solid #ddd"
              borderRadius="0.5rem"
            />

            <FormLabel fontSize="1.7rem" fontWeight="500">
              Email Address
            </FormLabel>
            <Input
              type="email"
              fontSize="1.7rem"
              p="1rem 1.5rem"
              border="1px solid #ddd"
              borderRadius="0.5rem"
            />

            <Button
              variant="primary"
              gridColumn="1 / span 2"
              justifySelf="center"
              mt="1rem"
              type="submit"
            >
              Next step →
            </Button>
          </Grid>
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
