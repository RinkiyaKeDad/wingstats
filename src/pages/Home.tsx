import { Button, Flex, Title } from "@mantine/core";

export default function Home() {
  return (
    <Flex direction="column" align="center" gap="xs">
      <Title order={1}>Wingstats</Title>
      <Flex direction="row" align="center" gap="xs">
        <Button>Players</Button>
        <Button>Log Gameplay</Button>
      </Flex>
    </Flex>
  );
}
