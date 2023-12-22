import {
  Paper,
  Table,
  Text,
  Divider,
  Flex,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";
import { MdOutlineInfo } from "react-icons/md";
import { AiOutlineExport } from "react-icons/ai";

const statistics = [
  { id: 1, visit: "Baseline", date: "05/12/2023", haqdi: 4, eq5d: 9, who5: 5 },
  { id: 2, visit: 1, date: "05/12/2023", haqdi: 3, eq5d: 2, who5: 7 },
  { id: 3, visit: 2, date: "07/11/2023", haqdi: 1, eq5d: 3, who5: 2 },
  { id: 4, visit: 3, date: "25/10/2024", haqdi: 8, eq5d: 7, who5: 5 },
  { id: 5, visit: 4, date: "17/05/2023", haqdi: 2, eq5d: 9, who5: 4 },
];

function ColumnTitle({ title, tooltipMessage }) {
  return (
    <Flex gap="sm">
      {title}
      <Tooltip
        multiline
        maw={150}
        arrowOffset={25}
        arrowSize={8}
        label={tooltipMessage}
        withArrow
        position="top-start"
      >
        <UnstyledButton>
          <MdOutlineInfo color={`var(--mantine-color-lilly-red-7)`} size={20} />
        </UnstyledButton>
      </Tooltip>
    </Flex>
  );
}

function QuestionaireLink({ value }) {
  return (
    <Flex gap="xs" align="center">
      {value}
      <UnstyledButton h={17}>
        <AiOutlineExport color={`var(--mantine-color-lilly-red-7)`} size={17} />
      </UnstyledButton>
    </Flex>
  );
}

export default function QuestionnaireStatisticsWidget() {
  const rows = statistics.map(({ id, visit, date, haqdi, eq5d, who5 }) => (
    <Table.Tr key={id}>
      <Table.Td>{visit}</Table.Td>
      <Table.Td>{date}</Table.Td>
      <Table.Td>
        <QuestionaireLink value={haqdi} />
      </Table.Td>
      <Table.Td>
        <QuestionaireLink value={eq5d} />
      </Table.Td>
      <Table.Td>
        <QuestionaireLink value={who5} />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Paper shadow="lg" p="lg" radius="lg" withBorder>
      <Text fw={500}>Questionnaire Statistics</Text>
      <Divider my="xs" color={`var(--mantine-color-red-2)`} />
      <Table.ScrollContainer h={200}>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Visit</Table.Th>
              <Table.Th>Date</Table.Th>
              <Table.Th>
                <ColumnTitle
                  title="HAQ-DI"
                  tooltipMessage="Some information regarding this questionnaire."
                />
              </Table.Th>
              <Table.Th>
                <ColumnTitle
                  title="EQ-5D"
                  tooltipMessage="The pacient is the most important."
                />
              </Table.Th>
              <Table.Th>
                <ColumnTitle
                  title="WHO-5"
                  tooltipMessage="This was a very nice questionnaire."
                />
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Paper>
  );
}
