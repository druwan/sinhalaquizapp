import {
  Button,
  ButtonGroup,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const QuizAlternativesCard = ({ correct, alternatives, currentScore }) => {
  const checkAnswer = (e) => {
    e.preventDefault();

    if (e.target.innerText === correct) {
      currentScore += 1;
    } else {
      console.log(currentScore);
    }

    // Next Question
  };
  return (
    <Flex justifyContent={"space-around"} gap={3}>
      <ButtonGroup>
        {alternatives.map((alternative) => (
          <Button
            key={alternative.id}
            size={"lg"}
            bg={useColorModeValue("Mint.300", "Flax.200")}
            color={"Raisin.900"}
            onClick={(e) => checkAnswer(e)}
          >
            <Text fontSize={"xl"}>{alternative.sinhala.alphabetical}</Text>
          </Button>
        ))}
      </ButtonGroup>
    </Flex>
  );
};

export default QuizAlternativesCard;
