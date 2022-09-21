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
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { loadNumbers } from '../../lib/loadQuestions';
import QuizCard from '../QuizCard/QuizCard';

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

interface Category {
  id: number;
  topic: string;
}

const CategoryMenu = () => {
  const { colorMode } = useColorMode();
  const colorScheme = colorMode === 'light' ? 'Mint' : 'Flax';

  const [selectTopic, setTopic] = useState('Select Category');
  const [numbers, setNumbers] = useState(null);

  const { data, error } = useSWR('/api/category', fetcher);

  if (error) return <p>Failed to load</p>;
  if (!data) return <p>Loading...</p>;

  useEffect(() => {
    async function getQuizQuestions() {
      try {
        await loadNumbers().then((result) => setNumbers(result));
      } catch (err) {
        console.log(err.message);
      }
    }
    getQuizQuestions();
  }, []);

  return (
    <>
      <Center>
        <HStack py={6} maxW={'container.md'}>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              colorScheme={colorScheme}
            >
              {selectTopic}
            </MenuButton>
            <MenuList>
              {data.categories.map((category: Category) => (
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

      {selectTopic === 'Numbers' && (
        <QuizCard props={numbers.props.numbers.numbers} />
      )}
    </>
  );
};

export default CategoryMenu;
