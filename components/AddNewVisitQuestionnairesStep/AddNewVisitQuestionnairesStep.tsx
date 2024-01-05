import { FunctionComponent, MouseEvent } from "react";
import { UseFormReturnType } from "@mantine/form";
import { Flex, Text, Paper, ActionIcon } from "@mantine/core";
import { DataTable } from "mantine-datatable";

import { SlPencil } from "react-icons/sl";
import { AiOutlineExport } from "react-icons/ai";

interface AddNewVisitQuestionnairesStepProps {
  form: UseFormReturnType<any>;
}

const AddNewVisitQuestionnairesStep: FunctionComponent<
  AddNewVisitQuestionnairesStepProps
> = ({ form }) => {
  const { diseaseActivities, patientQuestionnaires } = form.values.step2;

  return (
    <Flex direction="column" gap="lg">
      <Text fw={500}>Disease Activity</Text>
      <Paper shadow="lg" p="lg" radius="lg" withBorder>
        <DataTable
          records={diseaseActivities}
          columns={[
            {
              accessor: "date",
              title: "Date",
              sortable: true,
            },
            {
              accessor: "questionnaireName",
              title: "Questionnaire Name",
              sortable: true,
            },
            {
              accessor: "score",
              title: "Score",
              textAlign: "right",
              sortable: true,
            },
            {
              accessor: "",
              width: "0%",
              textAlign: "right",
              render: () => (
                <ActionIcon
                  size="md"
                  variant="subtle"
                  color="lilly-red"
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation();
                  }}
                >
                  <SlPencil size={20} />
                </ActionIcon>
              ),
            },
          ]}
        />
      </Paper>

      <Text fw={500}>Patient Questionnaires</Text>
      <Paper shadow="lg" p="lg" radius="lg" withBorder>
        <DataTable
          records={patientQuestionnaires}
          columns={[
            {
              accessor: "date",
              title: "Date",
              sortable: true,
            },
            {
              accessor: "questionnaireName",
              title: "Questionnaire Name",
              sortable: true,
            },
            {
              accessor: "score",
              title: "Score",
              textAlign: "right",
              sortable: true,
            },
            {
              accessor: "",
              width: "0%",
              textAlign: "right",
              render: () => (
                <ActionIcon
                  size="md"
                  variant="subtle"
                  color="lilly-red"
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation();
                  }}
                >
                  <AiOutlineExport size={20} />
                </ActionIcon>
              ),
            },
          ]}
        />
      </Paper>
    </Flex>
  );
};

export default AddNewVisitQuestionnairesStep;
