import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';

const SignUp = ({ openModal }) => {
  return (
    <Box
      as="section"
      className="section section--sign-up"
      bg="bg.dark"
      borderTop="none"
      borderBottom="1px solid #444"
      textAlign="center"
      py="10rem"
      px="3rem"
    >
      <Box className="section__title" mb="6rem">
        <Heading
          as="h3"
          className="section__header"
          fontSize="4rem"
          lineHeight="1.3"
          fontWeight="500"
          color="white"
          textAlign="center"
        >
          "Let go of worry, embrace simplicity—ZenBank guides you to financial
          enlightenment."
        </Heading>
      </Box>
      <Button
        variant="primary"
        fontSize="1.9rem"
        py="2rem"
        px="5rem"
        onClick={openModal}
      >
        Open your free account today!
      </Button>
    </Box>
  );
};

export default SignUp;
