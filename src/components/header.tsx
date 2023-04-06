import { Box, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box
      textAlign={"center"}
      padding={"4px 10%"}
      backgroundColor={"rgb(102, 94, 74)"}
      marginBottom={"50px"}
    >
      <Text
        as={"h1"}
        fontSize={"45px"}
        color={"aliceblue"}
        fontWeight={"bold"}
        textShadow={"2px 2px 2px black"}
      >
        Simple Trello
      </Text>
    </Box>
  );
};
