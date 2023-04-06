import { Box } from "@chakra-ui/react";
import { Header } from "./components/header";
import AuroraImg from "./assets/aurora.jpeg";
import { TaskCards } from "./components/task-cards";

const App = () => {
  return (
    <Box
      backgroundImage={AuroraImg}
      height={"100vh"}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
    >
      <Header />
      <TaskCards />
    </Box>
  );
};

export default App;
