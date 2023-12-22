import {
  Paper,
  Table,
  Badge,
  Button,
  Flex,
  MultiSelect,
  Divider,
  Text,
} from "@mantine/core";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { QuestionaireStatuses } from "@lilly/constants";
import getColorByStatus from "@lilly/utils/getColorByStatus";

const questionnaireList = [
  {
    id: 1,
    name: "First questionnaire name",
    scheduledDate: "15/12/2023",
    status: "partially-answered",
    completionDate: null,
  },
  {
    id: 2,
    name: "Second questionnaire name",
    scheduledDate: "25/11/2023",
    status: "pending",
    completionDate: null,
  },
  {
    id: 3,
    name: "Third questionnaire name",
    scheduledDate: "05/01/2024",
    status: "not-completed",
    completionDate: null,
  },
  {
    id: 4,
    name: "Fourth questionnaire name",
    scheduledDate: "02/02/2024",
    status: "not-completed",
    completionDate: null,
  },
  {
    id: 5,
    name: "Fifth questionnaire name",
    scheduledDate: "19/11/2023",
    status: "completed",
    completionDate: "21/11/2023",
  },
  {
    id: 6,
    name: "First questionnaire name",
    scheduledDate: "15/12/2023",
    status: "partially-answered",
    completionDate: null,
  },
  {
    id: 7,
    name: "Second questionnaire name",
    scheduledDate: "25/11/2023",
    status: "pending",
    completionDate: null,
  },
  {
    id: 8,
    name: "Third questionnaire name",
    scheduledDate: "05/01/2024",
    status: "not-completed",
    completionDate: null,
  },
  {
    id: 9,
    name: "Fourth questionnaire name",
    scheduledDate: "02/02/2024",
    status: "not-completed",
    completionDate: null,
  },
  {
    id: 10,
    name: "Fifth questionnaire name",
    scheduledDate: "19/11/2023",
    status: "completed",
    completionDate: "21/11/2023",
  },
];

export default function StudyWidget() {
  const [questionnaires, setQuestionnaires] = useState(questionnaireList);

  const handleFilterChange = (statuses) => {
    setQuestionnaires(() =>
      questionnaireList.filter(({ status }) =>
        statuses.length > 0 ? statuses?.includes(status) : questionnaireList
      )
    );
  };

  const rows = questionnaires.map(
    ({ id, scheduledDate, name, status, completionDate }) => (
      <Table.Tr key={id}>
        <Table.Td miw={130}>{scheduledDate}</Table.Td>
        <Table.Td miw={200}>{name}</Table.Td>
        <Table.Td>
          <Badge
            variant="outline"
            color={getColorByStatus(status)}
            size="md"
            radius="sm"
            fullWidth
          >
            {
              QuestionaireStatuses.List?.find(
                (qStatus) => qStatus.value === status
              )?.label
            }
          </Badge>
        </Table.Td>
        <Table.Td>{completionDate}</Table.Td>
        <Table.Td miw={200} maw={250} align="right">
          {(status === QuestionaireStatuses.Enum.PartiallyAnswered ||
            status === QuestionaireStatuses.Enum.Pending) && (
            <Button size="compact-xs" variant="transparent" color="#000">
              Complete Questionnaire
              <FaChevronRight className="m-l-10" size={14} />
            </Button>
          )}
        </Table.Td>
      </Table.Tr>
    )
  );

  const noData = (
    <Table.Tr>
      <Table.Td p="xl" colSpan={5}>
        <Text ta="center">No data available</Text>
      </Table.Td>
    </Table.Tr>
  );

  return (
    <Paper shadow="lg" p="lg" radius="lg" withBorder>
      <Flex align="center" gap="lg" wrap="wrap">
        <Flex gap="lg" grow={1}>
          <Text
            fw={500}
            color={`var(--mantine-color-lilly-red-7)`}
            styles={{
              root: {
                borderBottom: `3px solid var(--mantine-color-lilly-red-7)`,
              },
            }}
          >
            Study name
          </Text>
          <Text fw={500}>Some study</Text>
        </Flex>
        <MultiSelect
          placeholder="Choose filters..."
          className="m-l-auto"
          maw={500}
          label="Filter Status"
          styles={{
            label: {
              fontWeight: "normal",
            },
            root: {
              width: "100%",
            },
          }}
          data={QuestionaireStatuses.List}
          clearable
          onChange={handleFilterChange}
        />
      </Flex>
      <Divider my="xs" color={`var(--mantine-color-red-2)`} />
      <Table.ScrollContainer h={200}>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Scheduled Date</Table.Th>
              <Table.Th>Questionaire Name</Table.Th>
              <Table.Th w={150}>Status</Table.Th>
              <Table.Th w={150}>Completion Date</Table.Th>
              <Table.Th w={200}></Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows.length > 0 ? rows : noData}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Paper>
  );
}
