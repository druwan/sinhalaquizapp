import { Container, Progress, useColorModeValue } from "@chakra-ui/react";

const TrackProgress = ({ value }) => {
  const colorScheme = useColorModeValue("whatsapp", "linkedin");

  // Calc new value based on num of questions answered.
  return (
    <Container maxW={"container.sm"} pt={"3"}>
      <Progress colorScheme={colorScheme} value={value} size={"sm"} />
    </Container>
  );
};

export default TrackProgress;
