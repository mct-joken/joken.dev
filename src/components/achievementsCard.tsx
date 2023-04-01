import { ListItem, UnorderedList, Box, Text } from "@chakra-ui/react";

export const AchievementsCard = ({
                                   achievements,
                                 }: {
  achievements: Array<{ name: string; result: Array<string> }>;
}) => {
  return (
    <>
      <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
        <UnorderedList>
          {achievements.map((a, index) => {
            return (
              <Box key={index} mb={4} borderRadius={"md"} boxShadow={"md"} p={4} bg={"white"}>
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                  {a.name}
                </Text>
                <UnorderedList>
                  {a.result.map((r, i) => {
                    return (
                      <ListItem key={i} pl={4}>
                        {r}
                      </ListItem>
                    );
                  })}
                </UnorderedList>
              </Box>
            );
          })}
        </UnorderedList>
      </div>
    </>
  );
};
