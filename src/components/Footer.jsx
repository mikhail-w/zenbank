import React from 'react';
import { Box, Flex, Link, Text, Image, HStack } from '@chakra-ui/react';

const Footer = () => {
  const footerLinks = [
    { text: 'About', href: '#' },
    { text: 'Pricing', href: '#' },
    { text: 'Terms of Use', href: '#' },
    { text: 'Privacy Policy', href: '#' },
    { text: 'Careers', href: '#' },
    { text: 'Blog', href: '#' },
    { text: 'Contact Us', href: '#' },
  ];

  return (
    <Box as="footer" py="10rem" px="3rem" bg="bg.dark">
      <Flex as="ul" listStyleType="none" justify="center" mb="5rem" wrap="wrap">
        {footerLinks.map((link, index) => (
          <Box
            as="li"
            key={index}
            mr={index === footerLinks.length - 1 ? '0' : '4rem'}
            mb="1rem"
          >
            <Link
              href={link.href}
              fontSize="1.6rem"
              color="#eee"
              textDecoration="none"
              _hover={{ color: 'brand.primary' }}
            >
              {link.text}
            </Link>
          </Box>
        ))}
      </Flex>

      <Image
        src="/img/icon.png"
        alt="Logo"
        h="5rem"
        display="block"
        mx="auto"
        mb="5rem"
      />

      <Text fontSize="1.4rem" color="#aaa" textAlign="center">
        &copy; Copyright by{' '}
        <Link
          href=""
          target="_blank"
          fontSize="1.4rem"
          color="#eee"
          _hover={{ color: 'brand.primary' }}
        >
          ZenBank
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
