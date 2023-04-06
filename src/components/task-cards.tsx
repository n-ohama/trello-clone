import { Box } from "@chakra-ui/react";
import { AddTaskCardButton } from "./add-task-card-button";
import { TaskCard } from "./task-card";

export const TaskCards = () => {
  return (
    <Box>
      <TaskCard />
      <AddTaskCardButton />
    </Box>
  );
};
