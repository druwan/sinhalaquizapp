import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AnimatePresence, motion } from "framer-motion";

const ToggleTheme = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const colorScheme = colorMode === "light" ? "Raisin" : "Flax";
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={colorScheme}
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 0, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorScheme={colorScheme}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
          size={"md"}
          pt={"4"}
          variant={"link"}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ToggleTheme;
