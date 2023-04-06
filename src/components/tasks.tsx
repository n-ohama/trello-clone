import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { Task } from "./task";

type Props = {
  taskList: { text: string; id: number }[];
  setTaskList: (value: { text: string; id: number }[]) => void;
};

export const Tasks: FC<Props> = ({ taskList, setTaskList }) => {
  return (
    <Box>
      {taskList.map((task) => (
        <Task
          key={task.id}
          task={task}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      ))}
    </Box>
  );
};
