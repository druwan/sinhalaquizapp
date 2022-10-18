import { ChevronDownIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import React, { useState } from "react";
import useSWR from "swr";
import { Category } from "../../utils/Interface";
import { fetcher } from "../../utils/loadQuestions";

import QuizCard from "../QuizCard/QuizCard";

const CategoryMenu = () => {
  const { colorMode } = useColorMode();
  const colorScheme = colorMode === "light" ? "Mint" : "Flax";

  const [selectTopic, setTopic] = useState("Select Category");

  const { data, error } = useSWR("/api/category", fetcher);

  if (error) return <p>Failed to load</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <>
      <Center>
        <HStack py={6} maxW={"container.md"}>
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
                  value={category.name}
                  onClick={() => setTopic(category.name)}
                >
                  {category.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          <Spacer />

          <Button
            colorScheme={colorScheme}
            onClick={() => setTopic("Select Category")}
          >
            Clear Category
          </Button>
        </HStack>
      </Center>

      {selectTopic !== "Select Category" && (
        <QuizCard props={selectTopic.toLowerCase()} />
      )}
    </>
  );
};

export default CategoryMenu;
