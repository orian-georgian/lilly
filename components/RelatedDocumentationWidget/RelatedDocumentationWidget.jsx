import { Paper, Table, Text, Divider } from "@mantine/core";

const documentsList = [
  {
    id: 1,
    name: "Document name",
  },
  {
    id: 2,
    name: "Document name 2",
  },
  {
    id: 3,
    name: "Document name 3",
  },
  {
    id: 4,
    name: "Document name 4",
  },
  {
    id: 5,
    name: "Document name 5",
  },
];

export default function RelatedDocumentationWidget() {
  const rows = documentsList.map(({ id, name }) => (
    <Table.Tr key={id}>
      <Table.Td>{name}</Table.Td>
    </Table.Tr>
  ));

  const noData = (
    <Table.Tr>
      <Table.Td p="xl">
        <Text ta="center">No data available</Text>
      </Table.Td>
    </Table.Tr>
  );

  return (
    <Paper shadow="lg" p="lg" radius="lg" withBorder>
      <Text fw={500}>Related Documentation</Text>
      <Divider my="xs" color={`var(--mantine-color-red-2)`} />
      <Table.ScrollContainer h={200}>
        <Table>
          <Table.Tbody>{rows.length > 0 ? rows : noData}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Paper>
  );
}
