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
import { DataTable, type DataTableSortStatus } from "mantine-datatable";
import { ReactNode, useEffect, useState } from "react";
import sortBy from "lodash/sortBy";

interface Statistic {
  id: number;
  visit: any;
  date: string;
  haqdi: number;
  eq5d: number;
  who5: number;
}

interface QuestionnaireLinkProps {
  value: any;
}

interface ColumnTitleProps {
  title: string | ReactNode;
  tooltipMessage: string;
}

const statistics = [
  { id: 1, visit: "Baseline", date: "05/12/2023", haqdi: 4, eq5d: 9, who5: 5 },
  { id: 2, visit: 1, date: "05/12/2023", haqdi: 3, eq5d: 2, who5: 7 },
  { id: 3, visit: 2, date: "07/11/2023", haqdi: 1, eq5d: 3, who5: 2 },
  { id: 4, visit: 3, date: "25/10/2024", haqdi: 8, eq5d: 7, who5: 5 },
  { id: 5, visit: 4, date: "17/05/2023", haqdi: 2, eq5d: 9, who5: 4 },
];

function ColumnTitle({ title, tooltipMessage }: ColumnTitleProps) {
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

function QuestionnaireLink({ value }: QuestionnaireLinkProps) {
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
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus<Statistic>>({
    columnAccessor: "visit",
    direction: "desc",
  });

  const [records, setRecords] = useState(sortBy(statistics, "visit"));

  useEffect(() => {
    const data = sortBy(statistics, sortStatus.columnAccessor) as Statistic[];
    setRecords(sortStatus.direction === "desc" ? data.reverse() : data);
  }, [sortStatus]);

  const columns = [
    { accessor: "visit", title: "Visit", sortable: true },
    { accessor: "date", title: "Date", sortable: true },
    {
      accessor: "haqdi",
      title: (
        <ColumnTitle
          title="HAQ-DI"
          tooltipMessage="Health Assessment Questionnaire-Disability Index"
        />
      ),
      render: ({ haqdi }: Statistic) => <QuestionnaireLink value={haqdi} />,
      sortable: true,
    },
    {
      accessor: "eq5d",
      title: (
        <ColumnTitle title="EQ-5D" tooltipMessage="EuroQol-5 Dimensions" />
      ),
      render: ({ eq5d }: Statistic) => <QuestionnaireLink value={eq5d} />,
      sortable: true,
    },
    {
      accessor: "who5",
      title: (
        <ColumnTitle
          title="WHO-5"
          tooltipMessage="World Health Organization-Five Well-Being Index"
        />
      ),
      render: ({ who5 }: Statistic) => <QuestionnaireLink value={who5} />,
      sortable: true,
    },
  ];

  return (
    <Paper shadow="lg" p="lg" radius="lg" withBorder>
      <Text fw={500}>Questionnaire Statistics</Text>
      <Divider my="xs" color={`var(--mantine-color-red-2)`} />
      <DataTable
        //height={200}
        records={records}
        columns={columns}
        sortStatus={sortStatus}
        onSortStatusChange={setSortStatus}
      />
    </Paper>
  );
}
