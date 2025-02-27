import { useState, useEffect, useRef } from 'react';
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Button,
  VStack,
  HStack,
  Grid,
  GridItem,
  useTheme,
} from '@chakra-ui/react';

const Testimonial = ({ header, text, author, photo, location }) => {
  return (
    <Box w="65%" position="relative" mx="auto">
      <Box
        _before={{
          content: "'\\201C'",
          position: 'absolute',
          top: '-5.7rem',
          left: '-6.8rem',
          lineHeight: 1,
          fontSize: '20rem',
          fontFamily: 'inherit',
          color: 'brand.primary',
          zIndex: -1,
        }}
      >
        <Heading as="h5" fontSize="2.25rem" fontWeight="500" mb="1.5rem">
          {header}
        </Heading>
        <Text fontSize="1.7rem" mb="3.5rem" color="text.secondary">
          {text}
        </Text>
        <Grid
          templateColumns="6.5rem 1fr"
          columnGap="2rem"
          as="address"
          fontStyle="normal"
          ml="3rem"
        >
          <Image
            src={photo}
            alt={author}
            w="6.5rem"
            borderRadius="50%"
            gridRow="1 / span 2"
          />
          <Text
            fontSize="1.7rem"
            fontWeight="500"
            alignSelf="end"
            m="0"
            gridColumn="2"
          >
            {author}
          </Text>
          <Text fontSize="1.5rem" gridColumn="2">
            {location}
          </Text>
        </Grid>
      </Box>
    </Box>
  );
};

const Testimonials = ({ isVisible }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlide = 2; // 0-indexed, 3 slides total

  const goToSlide = slide => {
    setCurrentSlide(slide);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? maxSlide : prev - 1));
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const testimonials = [
    {
      header: 'Best financial decision ever!',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis et asperiores laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus id alias reiciendis, perferendis facere pariatur dolore veniam autem esse non voluptatem saepe provident nihil molestiae.',
      author: 'Aarav Lynn',
      photo: '/img/user-1.jpg',
      location: 'San Francisco, USA',
    },
    {
      header: 'The last step to becoming a complete minimalist',
      text: 'Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam perferendis veritatis neque repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt exercitationem deleniti.',
      author: 'Miyah Miles',
      photo: '/img/user-2.jpg',
      location: 'London, UK',
    },
    {
      header: 'Finally free from old-school banks',
      text: 'Debitis, nihil sit minus suscipit magni aperiam vel tenetur incidunt commodi architecto numquam omnis nulla autem, necessitatibus blanditiis modi similique quidem. Odio aliquam culpa dicta beatae quod maiores ipsa minus consequatur error sunt, deleniti saepe aliquid quos inventore sequi. Necessitatibus id alias reiciendis, perferendis facere.',
      author: 'Francisco Gomes',
      photo: '/img/user-3.jpg',
      location: 'Lisbon, Portugal',
    },
  ];

  return (
    <Box
      as="section"
      id="section--3"
      py="15rem"
      px="3rem"
      borderTop="1px solid #ddd"
      transition="transform 1s, opacity 1s"
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? 'translateY(0)' : 'translateY(8rem)'}
    >
      <Box maxW="80rem" mx="auto" mb="4rem">
        <Text
          as="h2"
          fontSize="1.8rem"
          fontWeight="600"
          textTransform="uppercase"
          color="brand.primary"
          mb="1rem"
        >
          Not sure yet?
        </Text>
        <Heading
          as="h3"
          fontSize="4rem"
          lineHeight="1.3"
          fontWeight="500"
          textAlign="center"
        >
          Millions of users are simplifying their banking experience.
        </Heading>
      </Box>

      <Box
        maxW="100rem"
        h="50rem"
        mx="auto"
        position="relative"
        overflow="hidden"
      >
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            position="absolute"
            top="0"
            w="100%"
            h="50rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
            transition="transform 1s"
            transform={`translateX(${100 * (index - currentSlide)}%)`}
          >
            <Testimonial {...testimonial} />
          </Box>
        ))}

        <Button
          position="absolute"
          top="50%"
          left="6%"
          transform="translate(-50%, -50%)"
          zIndex="10"
          bg="rgba(255, 255, 255, 0.7)"
          color="#333"
          borderRadius="50%"
          h="5.5rem"
          w="5.5rem"
          fontSize="3.25rem"
          onClick={prevSlide}
        >
          ←
        </Button>

        <Button
          position="absolute"
          top="50%"
          right="6%"
          transform="translate(50%, -50%)"
          zIndex="10"
          bg="rgba(255, 255, 255, 0.7)"
          color="#333"
          borderRadius="50%"
          h="5.5rem"
          w="5.5rem"
          fontSize="3.25rem"
          onClick={nextSlide}
        >
          →
        </Button>

        <Flex
          position="absolute"
          bottom="5%"
          left="50%"
          transform="translateX(-50%)"
        >
          {testimonials.map((_, index) => (
            <Box
              key={index}
              as="button"
              bg={currentSlide === index ? 'brand.primary' : '#b9b9b9'}
              opacity={currentSlide === index ? 1 : 0.7}
              h="1rem"
              w="1rem"
              borderRadius="50%"
              mr={index === testimonials.length - 1 ? '0' : '1.75rem'}
              cursor="pointer"
              transition="all 0.5s"
              onClick={() => goToSlide(index)}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Testimonials;
