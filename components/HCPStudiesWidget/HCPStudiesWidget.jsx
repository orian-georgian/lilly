import {
  TextInput,
  Paper,
  Table,
  Badge,
  Radio,
  Flex,
  Divider,
  Text,
} from "@mantine/core";
import { IoIosSearch } from "react-icons/io";

import { useHCPDashboard } from "@lilly/hooks";
import { useMediaQuery } from "@mantine/hooks";

export default function HCPStudiesWidget() {
  const {
    isLoading,
    studies,
    selectedStudyId,
    setSelectedStudyId,
    filterStudies,
  } = useHCPDashboard();
  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleChangeSelection = (studyId) => () => {
    setSelectedStudyId(studyId);
  };

  const rows = studies.map(
    ({ studyId, title, patients, daysLeft, fpet, fpv, lpet, lpv }) => (
      <Table.Tr
        key={studyId}
        bg={
          selectedStudyId === studyId
            ? "var(--mantine-color-lilly-red-light)"
            : undefined
        }
      >
        <Table.Td w={70}>
          <Radio
            aria-label="Select row"
            checked={selectedStudyId === studyId}
            onChange={handleChangeSelection(studyId)}
          />
        </Table.Td>
        <Table.Td miw={130}>{studyId}</Table.Td>
        <Table.Td miw={200}>{title}</Table.Td>
        <Table.Td>
          <Badge variant="outline" color="red" size="md" radius="sm" fullWidth>
            {patients}
          </Badge>
        </Table.Td>
        <Table.Td>
          <Badge variant="outline" color="red" size="md" radius="sm" fullWidth>
            {daysLeft}
          </Badge>
        </Table.Td>
        <Table.Td>{fpet}</Table.Td>
        <Table.Td>{fpv}</Table.Td>
        <Table.Td>{lpet}</Table.Td>
        <Table.Td>{lpv}</Table.Td>
      </Table.Tr>
    )
  );

  const noData = (
    <Table.Tr>
      <Table.Td p="xl" colSpan={9}>
        <Text ta="center">No data available</Text>
      </Table.Td>
    </Table.Tr>
  );

  return (
    <Paper shadow="lg" p="lg" radius="lg" withBorder>
      <Flex align="center" gap="lg" wrap="wrap">
        <Text fw={500}>{`${studies.length} ${
          studies.length === 1 ? "Study" : "Studies"
        }`}</Text>
        <TextInput
          placeholder="Search Study"
          className="m-l-auto"
          w={isMobile ? "100%" : "auto"}
          leftSection={<IoIosSearch size={20} />}
          onChange={filterStudies}
        />
      </Flex>
      <Divider my="xs" color={`var(--mantine-color-red-2)`} />
      <Table.ScrollContainer h={200}>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th />
              <Table.Th>Study Id</Table.Th>
              <Table.Th>Study Title</Table.Th>
              <Table.Th w={150}>Patients</Table.Th>
              <Table.Th w={150}>Days Left</Table.Th>
              <Table.Th w={200}>FPET</Table.Th>
              <Table.Th w={200}>FPV</Table.Th>
              <Table.Th w={200}>LPET</Table.Th>
              <Table.Th w={200}>LPV</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows.length > 0 ? rows : noData}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Paper>
  );
}
