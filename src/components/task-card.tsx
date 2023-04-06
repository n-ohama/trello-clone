import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { TaskAddInput } from "./task-add-input";
import { TaskCardDeleteButton } from "./task-card-delete-button";
import { TaskCardTitle } from "./task-card-title";
import { Tasks } from "./tasks";

export const TaskCard = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState<{ text: string; id: number }[]>([]);
  return (
    <Box
      width={"250px"}
      padding={"10px 25px"}
      margin={"10px 1%"}
      backgroundColor={"rgb(228, 228, 228)"}
      borderRadius={"5px"}
    >
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Tasks taskList={taskList} setTaskList={setTaskList} />
    </Box>
  );
};
