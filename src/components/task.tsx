import { Flex, IconButton, Text } from "@chakra-ui/react";
import { FC } from "react";
import { BsTrash3Fill } from "react-icons/bs";

type Props = {
  task: { text: string; id: number };
  taskList: { text: string; id: number }[];
  setTaskList: (value: { text: string; id: number }[]) => void;
};

export const Task: FC<Props> = ({ task, taskList, setTaskList }) => {
  const handleDelete = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      p={"17px 0"}
      mt={"10px"}
      bgColor={"white"}
      borderRadius={"5px"}
      boxShadow={"1px 1px 1px 1px rgb(75, 75, 75)"}
    >
      <Text ml={"12px"}>{task.text}</Text>
      <IconButton
        icon={<BsTrash3Fill />}
        aria-label="delete task"
        mr={"9px"}
        onClick={() => handleDelete(task.id)}
      />
    </Flex>
  );
};
