import "@mantine/core/styles.css";
import { MantineProvider, Button, Flex } from "@mantine/core";
import { theme } from "./theme";
import Home from "./pages/Home";
import Players from "./pages/Players";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      {/* <Home /> */}
      <Players />
    </MantineProvider>
  );
}
