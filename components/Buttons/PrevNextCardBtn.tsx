import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const PrevNextCardBtn = () => {
  const colorScheme = useColorModeValue("Raisin", "Turquoise");

  return (
    <ButtonGroup
      spacing={5}
      display={"flex"}
      alignContent={"center"}
      justifyContent={"space-around"}
      variant={"ghost"}
      colorScheme={colorScheme}
    >
      <Button leftIcon={<ArrowLeftIcon />}>Previous Card</Button>
      <Button rightIcon={<ArrowRightIcon />}>Next Card</Button>
    </ButtonGroup>
  );
};

export default PrevNextCardBtn;
