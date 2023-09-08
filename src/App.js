import logo from "./logo.svg";
import "./App.css";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from "@chakra-ui/theme";
import MainComponent from "./mainComponent";
const { Button } = chakraTheme.components


const theme = extendBaseTheme({
  components: {
    Button,
  },
});


function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <MainComponent />
    </ChakraBaseProvider>
  );
}

export default App;

