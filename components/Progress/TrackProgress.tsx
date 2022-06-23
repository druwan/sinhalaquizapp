import { Progress, useColorMode } from '@chakra-ui/react';

const TrackProgress = () => {
  const { colorMode } = useColorMode();
  const colorScheme = colorMode === 'light' ? 'Raisin' : 'Turquoise';

  // Calc new value based on num of questions answered.
  return <Progress colorScheme={colorScheme} value={69} size={'sm'} />;
};

export default TrackProgress;
