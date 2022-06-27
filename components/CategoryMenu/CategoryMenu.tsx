import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import useSWR from 'swr';

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

const CategoryMenu = () => {
  const { colorMode } = useColorMode();
  const colorScheme = colorMode === 'light' ? 'Mint' : 'Flax';

  const [selectTopic, setTopic] = useState('Select Category');

  const { data, error } = useSWR('/api/category', fetcher);

  if (error) return <p>Failed to load</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <Center>
      <HStack maxW={'container.md'}>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            colorScheme={colorScheme}
          >
            {selectTopic}
          </MenuButton>
          <MenuList>
            {data.categories.map((category) => (
              <MenuItem
                key={category.id}
                value={category.topic}
                onClick={() => setTopic(category.topic)}
              >
                {category.topic}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>

        <Spacer />

        <Button
          colorScheme={colorScheme}
          onClick={() => setTopic('Select Category')}
        >
          Clear Category
        </Button>
      </HStack>
    </Center>
  );
};

export default CategoryMenu;
