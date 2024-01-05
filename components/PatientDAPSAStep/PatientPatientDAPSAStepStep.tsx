import { useEffect, useState } from "react";
import { Flex, NumberInput, Paper, Text } from "@mantine/core";
import { FunctionComponent } from "react";
import { UseFormReturnType } from "@mantine/form";
import { DataTable, type DataTableSortStatus } from "mantine-datatable";
import sortBy from "lodash/sortBy";
import { DiseaseActivities } from "@lilly/constants";

interface PatientDAPSAStepProps {
  form: UseFormReturnType<any>;
}

interface Activity {
  id: string;
  score: number;
  name?: string;
}

export const Null = () => null;

const PatientDAPSAStep: FunctionComponent<PatientDAPSAStepProps> = ({
  form,
}) => {
  console.log(form.values.step7);

  const { dapsa } = form.values.step7;

  const activities = dapsa.map(({ id, score }: Activity) => ({
    id,
    score,
    name: DiseaseActivities.List.find(({ value }) => value === id)?.label,
  }));

  const [sortStatus, setSortStatus] = useState<DataTableSortStatus<Activity>>({
    columnAccessor: "name",
    direction: "desc",
  });

  const [records, setRecords] = useState(sortBy(activities, "name"));

  useEffect(() => {
    const data = sortBy(activities, sortStatus.columnAccessor) as Activity[];
    setRecords(sortStatus.direction === "desc" ? data.reverse() : data);
  }, [sortStatus]);

  return (
    <Flex direction="column" gap="lg">
      <Text fw={500}>Disease Activity: DAPSA</Text>
      <Paper shadow="lg" p="lg" radius="lg" withBorder>
        <DataTable
          records={records}
          columns={[
            {
              accessor: "name",
              title: "Count Group",
              sortable: true,
            },
            {
              accessor: "score",
              title: "Score",
              sortable: true,
              width: 100,
              render: ({ id }) => {
                const index = dapsa.findIndex(
                  (item: Activity) => item.id === id
                );

                return (
                  <NumberInput
                    rightSection={<Null />}
                    {...form.getInputProps(`step7.dapsa.${index}.score`)}
                  />
                );
              },
            },
          ]}
          sortStatus={sortStatus}
          onSortStatusChange={setSortStatus}
        />
      </Paper>
    </Flex>
  );
};

export default PatientDAPSAStep;
