import { Container, Progress, useColorMode } from "@chakra-ui/react";

const TrackProgress = ({ value }) => {
  const { colorMode } = useColorMode();
  const colorScheme = colorMode === "light" ? "Raisin" : "Flax";

  // Calc new value based on num of questions answered.
  return (
    <Container maxW={"container.sm"}>
      <Progress colorScheme={colorScheme} value={value} size={"sm"} />
    </Container>
  );
};

export default TrackProgress;
