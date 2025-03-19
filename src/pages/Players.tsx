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
import { useState } from "react";
import { IconTrash } from "@tabler/icons-react";

interface Player {
  id: number;
  name: string;
  gamesPlayed: number;
}

let id = 4;

export default function Players() {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      id: id,
      name: "",
      gamesPlayed: 0,
    },
  });

  const [players, setPlayers] = useState<Player[]>([
    { id: 1, name: "Arsh", gamesPlayed: 2 },
    { id: 2, name: "Nitish", gamesPlayed: 3 },
    { id: 3, name: "Amit", gamesPlayed: 7 },
  ]);

  const rows = players.map((player) => (
    <Table.Tr key={player.name}>
      <Table.Td>{player.name}</Table.Td>
      <Table.Td>{player.gamesPlayed}</Table.Td>
      <Table.Td>
        <IconTrash
          size={20}
          stroke={1.5}
          color="var(--mantine-color-blue-filled)"
          onClick={() => setPlayers(players.filter((p) => p.id !== player.id))}
        />
      </Table.Td>
    </Table.Tr>
  ));

  function handleOnSubmit(values: Player) {
    setPlayers([...players, { id: id++, name: values.name, gamesPlayed: 0 }]);
    console.log(id);
    form.reset();
  }

  return (
    <>
      <Modal opened={opened} onClose={close} title="Add a Player">
        <form onSubmit={form.onSubmit((values) => handleOnSubmit(values))}>
          <TextInput
            withAsterisk
            label="Name"
            placeholder="John Doe"
            key={form.key("name")}
            {...form.getInputProps("name")}
          />
          <Group justify="flex-end" mt="md">
            <Button type="submit" onClick={close}>
              Submit
            </Button>
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
