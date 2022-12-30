import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";

export type memberProps = {
  members: Readonly<{
    realName: string;
    nickName: string;
    position: string | null;
    link: { name: string; url: string }[];
    imageUrl: string;
  }>[];
};

// ToDo: 画像のフォールバック考える
const MemberCard = ({ members }: memberProps) => {
  return (
    <>
      {members.map((m) => {
        return (
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            mt="1em"
            w="100%"
            maxW="40em"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src={m.imageUrl}
            />
            <Stack>
              <CardBody>
                <Heading size="md">{m.nickName}</Heading>

                <Text py="2">{m.realName}</Text>
                {m.position && <Badge colorScheme="green">{m.position}</Badge>}
              </CardBody>

              <CardFooter>
                <HStack spacing={3} direction="row">
                  {m.link.map((link) => {
                    return (
                      <Link href={link.url}>
                        {link.name === "twitter" ? (
                          <Button variant="solid" colorScheme={"twitter"}>
                            {link.name}
                          </Button>
                        ) : (
                          <Button variant="solid" colorScheme="facebook">
                            {link.name}
                          </Button>
                        )}
                      </Link>
                    );
                  })}
                </HStack>
              </CardFooter>
            </Stack>
          </Card>
        );
      })}
    </>
  );
};

export const MemberCards = (props: memberProps) => {
  return (
    <>
      <MemberCard {...props} />
    </>
  );
};
