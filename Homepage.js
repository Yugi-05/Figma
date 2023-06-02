import React from 'react';
import { Box, Heading, Skeleton, Stack, Text } from '@chakra-ui/react';

const HomePage = () => {
  const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Section 2',
      content: 'Praesent convallis metus in nisi scelerisque scelerisque.',
    },
    {
      title: 'Section 3',
      content: 'Nullam tempus tristique velit, sed vestibulum purus convallis at.',
    },
  ];

  return (
    <Box p={4} maxWidth="600px" mx="auto">
      <Heading as="h1" textAlign="center" mb={4}>
        My Homepage
      </Heading>

      {sections.map((section, index) => (
        <Box key={index} borderWidth="1px" borderRadius="lg" p={4} mb={4}>
          <Skeleton isLoaded>
            <Heading as="h2" size="lg" mb={2}>
              {section.title}
            </Heading>
            <Text>{section.content}</Text>
          </Skeleton>
        </Box>
      ))}
    </Box>
  );
};

export default HomePage;
