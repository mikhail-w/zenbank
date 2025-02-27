import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Grid,
  Icon,
  useTheme,
} from '@chakra-ui/react';
import { FiUpload, FiHome, FiUserX } from 'react-icons/fi';

const Operations = ({ isVisible }) => {
  const [activeTab, setActiveTab] = useState('1');
  const theme = useTheme();

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  const operationContent = {
    1: {
      icon: FiUpload,
      color: 'brand.secondaryOpacity',
      iconColor: 'brand.secondaryDarker',
      title: 'Tranfser money to anyone, instantly! No fees, no BS.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    2: {
      icon: FiHome,
      color: 'brand.primaryOpacity',
      iconColor: 'brand.primary',
      title: 'Buy a home or make your dreams come true, with instant loans.',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    3: {
      icon: FiUserX,
      color: 'brand.tertiaryOpacity',
      iconColor: 'brand.tertiary',
      title: 'No longer need your account? No problem! Close it instantly.',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  };

  return (
    <Box
      as="section"
      id="section--2"
      py="15rem"
      px="3rem"
      borderTop="1px solid #ddd"
      transition="transform 1s, opacity 1s"
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? 'translateY(0)' : 'translateY(8rem)'}
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
          Operations
        </Text>
        <Heading as="h3" fontSize="4rem" lineHeight="1.3" fontWeight="500">
          Everything as simple as possible, but no simpler.
        </Heading>
      </Box>

      <Box maxW="100rem" mx="auto" mt="12rem" bg="white" className="operations">
        <Flex justify="center" className="operations__tab-container">
          <Button
            variant={activeTab === '1' ? 'secondary' : undefined}
            mr="2.5rem"
            transform={
              activeTab === '1' ? 'translateY(-66%)' : 'translateY(-50%)'
            }
            onClick={() => handleTabClick('1')}
            className={`operations__tab operations__tab--1 ${
              activeTab === '1' ? 'operations__tab--active' : ''
            }`}
          >
            <Text as="span" mr="1rem" fontWeight="600" display="inline-block">
              01
            </Text>
            Instant Transfers
          </Button>
          <Button
            variant={activeTab === '2' ? 'primary' : undefined}
            mr="2.5rem"
            transform={
              activeTab === '2' ? 'translateY(-66%)' : 'translateY(-50%)'
            }
            onClick={() => handleTabClick('2')}
            className={`operations__tab operations__tab--2 ${
              activeTab === '2' ? 'operations__tab--active' : ''
            }`}
          >
            <Text as="span" mr="1rem" fontWeight="600" display="inline-block">
              02
            </Text>
            Instant Loans
          </Button>
          <Button
            variant={activeTab === '3' ? 'tertiary' : undefined}
            transform={
              activeTab === '3' ? 'translateY(-66%)' : 'translateY(-50%)'
            }
            onClick={() => handleTabClick('3')}
            className={`operations__tab operations__tab--3 ${
              activeTab === '3' ? 'operations__tab--active' : ''
            }`}
          >
            <Text as="span" mr="1rem" fontWeight="600" display="inline-block">
              03
            </Text>
            Instant Closing
          </Button>
        </Flex>

        {Object.keys(operationContent).map(tabKey => {
          const content = operationContent[tabKey];
          return (
            <Grid
              key={tabKey}
              templateColumns="7rem 1fr"
              columnGap="3rem"
              rowGap="0.5rem"
              p="2.5rem 7rem 6.5rem 7rem"
              fontSize="1.7rem"
              display={activeTab === tabKey ? 'grid' : 'none'}
              className={`operations__content operations__content--${tabKey} ${
                activeTab === tabKey ? 'operations__content--active' : ''
              }`}
            >
              <Flex
                align="center"
                justify="center"
                bg={content.color}
                h="7rem"
                w="7rem"
                borderRadius="50%"
              >
                <Icon
                  as={content.icon}
                  boxSize="2.75rem"
                  color={content.iconColor}
                />
              </Flex>
              <Heading
                as="h5"
                fontSize="2.25rem"
                fontWeight="500"
                alignSelf="center"
              >
                {content.title}
              </Heading>
              <Text color="text.secondary" gridColumn="2">
                {content.description}
              </Text>
            </Grid>
          );
        })}
      </Box>
    </Box>
  );
};

export default Operations;
