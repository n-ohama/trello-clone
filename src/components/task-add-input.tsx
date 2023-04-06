import { Box, Input } from "@chakra-ui/react";
import { ChangeEvent, FC, FormEvent } from "react";

type Props = {
  inputText: string;
  setInputText: (value: string) => void;
  taskList: { text: string; id: number }[];
  setTaskList: (value: { text: string; id: number }[]) => void;
};

export const TaskAddInput: FC<Props> = ({
  inputText,
  setInputText,
  taskList,
  setTaskList,
}) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputText === "") {
      return;
    }
    setTaskList([...taskList, { text: inputText, id: taskList.length }]);
    setInputText("");
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Input
          type={"text"}
          placeholder={"add a task"}
          onChange={handleChange}
          value={inputText}
          width={"100%"}
          fontSize={"1.3rem"}
          p={"10px 15px"}
          bgColor={"white"}
        />
      </form>
    </Box>
  );
};
