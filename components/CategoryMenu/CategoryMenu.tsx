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
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import useSWR from 'swr';
import { Category } from '../../utils/Interface';
import { fetcher } from '../../utils/loadQuestions';

import QuizCard from '../QuizCard/QuizCard';

const CategoryMenu = () => {
  const [selectTopic, setTopic] = useState('Select Category');
  const buttonTextColor = useColorModeValue('Flax.900', 'Flax.900');
  const buttonBgColor = 'Flax.200';

  const { data, error } = useSWR('/api/category', fetcher);

  if (error) return <p>Failed to load</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <>
      <Center>
        <HStack py={6} maxW={'container.md'}>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg={buttonBgColor}
              color={buttonTextColor}
              _hover={{ bg: buttonBgColor }}
              _active={{ bg: buttonBgColor }}>
              {selectTopic}
            </MenuButton>
            <MenuList bg={buttonBgColor} color={buttonTextColor}>
              {data.categories.map((category: Category) => (
                <MenuItem
                  key={category.id}
                  value={category.name}
                  onClick={() => setTopic(category.name)}
                  _hover={{ bg: 'Raisin.400' }}>
                  {category.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          <Spacer />

          <Button
            bg={buttonBgColor}
            color={buttonTextColor}
            onClick={() => setTopic('Select Category')}
            _hover={{ bg: buttonBgColor }}
            _active={{ bg: buttonBgColor }}>
            Clear Category
          </Button>
        </HStack>
      </Center>

      {selectTopic !== 'Select Category' && (
        <QuizCard props={selectTopic.toLowerCase()} />
      )}
    </>
  );
};

export default CategoryMenu;
