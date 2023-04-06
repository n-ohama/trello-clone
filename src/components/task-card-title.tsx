import { Box, Input, Text } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today");
  const handleClick = () => {
    setIsClick(true);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputCardTitle(event.target.value);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsClick(false);
  };
  const handleBlur = () => {
    setIsClick(false);
  };

  return (
    <Box
      onClick={handleClick}
      _hover={{ cursor: "pointer" }}
      mb={"10px"}
      width={"30%"}
    >
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <Input
            autoFocus
            type={"text"}
            value={inputCardTitle}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={10}
            width={"80px"}
            fontSize={"1.1rem"}
            padding={"4px 6px"}
            borderRadius={"3px"}
            border={"none"}
            outline={"none"}
          />
        </form>
      ) : (
        <Text fontWeight={"bold"}>{inputCardTitle}</Text>
      )}
    </Box>
  );
};
