import {
  Button,
  Flex,
  Title,
  Table,
  Modal,
  TextInput,
  Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";

export default function Players() {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
    },
  });
  const players = [
    { name: "Arsh", gamesPlayed: 2 },
    { name: "Nitish", gamesPlayed: 3 },
    { name: "Amit", gamesPlayed: 7 },
    { name: "Saloni", gamesPlayed: 5 },
    { name: "Abhinav", gamesPlayed: 13 },
  ];

  const rows = players.map((player) => (
    <Table.Tr key={player.name}>
      <Table.Td>{player.name}</Table.Td>
      <Table.Td>{player.gamesPlayed}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Modal opened={opened} onClose={close} title="Add a Player">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            withAsterisk
            label="Name"
            placeholder="John Doe"
            key={form.key("name")}
            {...form.getInputProps("name")}
          />
          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Modal>
      <Flex direction="column" gap="sm" align="center">
        <Title order={1}>Players</Title>
        <Button onClick={open}>Add player</Button>
        <Table.ScrollContainer minWidth={200}>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Name</Table.Th>
                <Table.Th>Games Played</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Flex>
    </>
  );
}
