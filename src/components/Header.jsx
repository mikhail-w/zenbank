import { useRef } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import Navigation from './Navigation';

const Header = ({ openModal, isStickyNav }) => {
  const section1Ref = useRef(null);

  const scrollToSection = () => {
    document
      .querySelector('#section--1')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      as="header"
      px="3rem"
      h="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Navigation isStickyNav={isStickyNav} openModal={openModal} />

      <Grid
        templateColumns="3fr 2fr"
        gap="3rem"
        flex="1"
        maxW="115rem"
        alignContent="center"
        justifyContent="center"
        alignItems="start"
        justifyItems="start"
        className="header__title"
      >
        <GridItem>
          <Heading as="h1" fontSize="5.5rem" lineHeight="1.35" fontWeight="500">
            The art of{' '}
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
              banking
            </Box>{' '}
            with
            <br />
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
              effortless
            </Box>{' '}
            simplicity
          </Heading>
        </GridItem>

        <GridItem rowSpan={4} colStart={2}>
          <Image
            src="/img/hero.png"
            alt="Minimalist bank items"
            w="100%"
            transform="translateY(-6rem)"
          />
        </GridItem>

        <GridItem>
          <Text fontSize="2.4rem" fontWeight="500" as="h4">
            The path to mindful banking starts here.
          </Text>
        </GridItem>

        <GridItem>
          <Button
            variant="text"
            onClick={scrollToSection}
            py="2px"
            fontSize="1.7rem"
            mb="5rem"
          >
            Learn more ↓
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Header;
