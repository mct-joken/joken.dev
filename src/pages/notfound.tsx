import { Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="100vh"
      backgroundColor="gray.50"
    >
      <Flex direction="column" alignItems="center">
        <Heading as="h1" size="xl" mb="8">
          Not Found
        </Heading>
        <Text fontSize="xl" mb="4">
          The page you are looking for does not exist.
        </Text>
        <Text fontSize="xl" mb="8">
          Please check the URL or go to the <Link to="/">home page</Link>.
        </Text>
      </Flex>
    </Flex>
  );
};
