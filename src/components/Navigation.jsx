import { useState } from 'react';
import {
  Flex,
  Box,
  HStack,
  Image,
  Link as ChakraLink,
  Button,
  useStyleConfig,
} from '@chakra-ui/react';

const Navigation = ({ isStickyNav, openModal }) => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleLinkHover = index => {
    setHoveredLink(index);
  };

  const handleLinkLeave = () => {
    setHoveredLink(null);
  };

  const getLinkOpacity = index => {
    if (hoveredLink === null) return 1;
    return hoveredLink === index ? 1 : 0.5;
  };

  const navLinks = [
    { label: 'Features', href: '#section--1' },
    { label: 'Operations', href: '#section--2' },
    { label: 'Testimonials', href: '#section--3' },
  ];

  return (
    <Flex
      as="nav"
      justify="space-between"
      align="center"
      h="9rem"
      w="100%"
      px="6rem"
      zIndex={100}
      position={isStickyNav ? 'fixed' : 'relative'}
      bg={isStickyNav ? 'rgba(255, 255, 255, 0.95)' : 'transparent'}
      backdropFilter={isStickyNav ? 'blur(4px)' : 'none'}
      transition="all 0.3s"
    >
      <Image
        src="/img/logo.png"
        alt="Bankist logo"
        h="4.5rem"
        transition="all 0.3s"
        opacity={hoveredLink !== null ? 0.5 : 1}
      />

      <HStack as="ul" spacing="4rem" listStyleType="none">
        {navLinks.map((link, index) => (
          <Box as="li" key={index}>
            <ChakraLink
              href={link.href}
              fontSize="1.7rem"
              fontWeight="400"
              color="inherit"
              display="block"
              transition="all 0.3s"
              opacity={getLinkOpacity(index)}
              position="relative"
              _hover={{ textDecoration: 'none' }}
              onMouseEnter={() => handleLinkHover(index)}
              onMouseLeave={handleLinkLeave}
              _after={
                hoveredLink === index
                  ? {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      height: '10%',
                      width: '100%',
                      zIndex: -1,
                      opacity: 0.7,
                      transform: 'scale(1.07, 1.05) skewX(-15deg)',
                      backgroundImage: 'var(--chakra-gradients-primary)',
                    }
                  : {}
              }
            >
              {link.label}
            </ChakraLink>
          </Box>
        ))}

        <Box as="li">
          <Button
            variant="primary"
            fontSize="1.7rem"
            borderRadius="3rem"
            py="0.8rem"
            px="2.5rem"
            onClick={openModal}
            _hover={{ color: 'inherit' }}
          >
            Open account
          </Button>
        </Box>
      </HStack>
    </Flex>
  );
};

export default Navigation;
