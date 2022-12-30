import { Heading, Text, Box } from "@chakra-ui/react";
export const TopPageTextContainer = () => {
  return (
    <Box
      h="30em"
      width={["100%", "95%", "90%", "85%"]}
      // backgroundColor={"teal.100"}
    >
      <TopPageCopy />
    </Box>
  );
};

const TopPageCopy = () => {
  return (
    <>
      <Heading fontSize="4xl" mt={"5.5em"}>
        Building the Future with{" "}
        <Text
          as="span"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          Technology.
        </Text>
      </Heading>
      <Text as="span">テクノロジーで未来を創る</Text>
    </>
  );
};
