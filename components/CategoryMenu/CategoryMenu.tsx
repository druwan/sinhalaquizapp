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
import {
  loadFamily,
  loadNumbers,
  loadPronouns,
  loadTime,
} from '../../lib/loadQuestions';
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
  const [family, setFamily] = useState(null);
  const [numbers, setNumbers] = useState(null);
  const [pronouns, setPronouns] = useState(null);
  const [time, setTime] = useState(null);

  const { data, error } = useSWR('/api/category', fetcher);

  // According to the React docs, it is OK to use multiple effects https://reactjs.org/docs/hooks-effect.html#tip-use-multiple-effects-to-separate-concerns
  useEffect(() => {
    async function getNumbers() {
      try {
        await loadFamily().then((resFamily) => setFamily(resFamily));
        await loadNumbers().then((resNumbers) => setNumbers(resNumbers));
        await loadPronouns().then((resPronouns) => setPronouns(resPronouns));
        await loadTime().then((resTime) => setTime(resTime));
      } catch (err) {
        console.log(err.message);
      }
    }
    getNumbers();
  }, [selectTopic]);

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

      {selectTopic === 'Family' && (
        <QuizCard props={family.props.family.family} />
      )}
      {selectTopic === 'Numbers' && (
        <QuizCard props={numbers.props.numbers.numbers} />
      )}
      {selectTopic === 'Pronouns' && (
        <QuizCard props={pronouns.props.pronouns.pronouns} />
      )}
      {selectTopic === 'Time' && <QuizCard props={time.props.time.time} />}
    </>
  );
};

export default CategoryMenu;
