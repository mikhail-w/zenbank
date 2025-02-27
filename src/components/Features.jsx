import { useEffect, useRef, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Grid,
  Image,
  Flex,
  Icon,
  useTheme,
} from '@chakra-ui/react';
import { MdMonitor, MdTrendingUp, MdCreditCard } from 'react-icons/md';

const FeatureBox = ({ icon, title, description }) => {
  const theme = useTheme();
  return (
    <Box alignSelf="center" justifySelf="center" width="70%" fontSize="1.5rem">
      <Flex
        align="center"
        justify="center"
        bg="brand.primaryOpacity"
        h="5.5rem"
        w="5.5rem"
        borderRadius="50%"
        mb="2rem"
      >
        <Icon as={icon} boxSize="2.5rem" color="brand.primary" />
      </Flex>
      <Heading
        as="h5"
        fontSize="2rem"
        mb="1rem"
        fontWeight="500"
      >
        {title}
      </Heading>
      <Text color="text.secondary">{description}</Text>
    </Box>
  );
};

const Features = ({ isVisible }) => {
  const sectionRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState({
    digital: false,
    grow: false,
    card: false,
  });

  // Simulate lazy loading for images
  useEffect(() => {
    if (isVisible) {
      const loadImages = () => {
        setTimeout(() => {
          setImagesLoaded({ digital: true, grow: true, card: true });
        }, 1000);
      };
      loadImages();
    }
  }, [isVisible]);

  return (
    <Box
      as="section"
      id="section--1"
      py="15rem"
      px="3rem"
      borderTop="1px solid #ddd"
      transition="transform 1s, opacity 1s"
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? 'translateY(0)' : 'translateY(8rem)'}
      ref={sectionRef}
    >
      <Box maxW="80rem" mx="auto" mb="8rem">
        <Text
          as="h2"
          fontSize="1.8rem"
          fontWeight="600"
          textTransform="uppercase"
          color="brand.primary"
          mb="1rem"
        >
          Features
        </Text>
        <Heading
          as="h3"
          fontSize="4rem"
          lineHeight="1.3"
          fontWeight="500"
        >
          Everything you need in a modern bank and more.
        </Heading>
      </Box>

      <Grid
        templateColumns="1fr 1fr"
        gap="4rem"
        mx="12rem"
        className="features"
      >
        <Image
          src={imagesLoaded.digital ? "/img/digital.jpg" : "/img/digital-lazy.jpg"}
          alt="Computer"
          w="100%"
          className={!imagesLoaded.digital ? "lazy-img" : ""}
          filter={!imagesLoaded.digital ? "blur(20px)" : "none"}
          transition="filter 0.5s"
        />

        <FeatureBox
          icon={MdMonitor}
          title="100% digital bank"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
            sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
            debitis ducimus."
        />

        <FeatureBox
          icon={MdTrendingUp}
          title="Watch your money grow"
          description="Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
            inventore ab? Nulla incidunt eius numquam sequi iste pariatur
            quibusdam!"
        />

        <Image
          src={imagesLoaded.grow ? "/img/grow.jpg" : "/img/grow-lazy.jpg"}
          alt="Plant"
          w="100%"
          className={!imagesLoaded.grow ? "lazy-img" : ""}
          filter={!imagesLoaded.grow ? "blur(20px)" : "none"}
          transition="filter 0.5s"
        />

        <Image
          src={imagesLoaded.card ? "/img/card.jpg" : "/img/card-lazy.jpg"}
          alt="Credit card"
          w="100%"
          className={!imagesLoaded.card ? "lazy-img" : ""}
          filter={!imagesLoaded.card ? "blur(20px)" : "none"}
          transition="filter 0.5s"
        />

        <FeatureBox
          icon={MdCreditCard}
          title="Free debit card included"
          description="Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
            eveniet consequatur odit quam quos possimus assumenda dicta fuga
            inventore ab."
        />
      </Grid>
    </Box>
  );
};

export default Features;