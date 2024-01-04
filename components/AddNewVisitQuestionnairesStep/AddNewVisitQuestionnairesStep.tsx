import { FunctionComponent } from "react";
import { UseFormReturnType } from "@mantine/form";
import { Flex, Table, Text, Paper } from "@mantine/core";

interface AddNewVisitQuestionnairesStepProps {
  form: UseFormReturnType<object>;
}

const AddNewVisitQuestionnairesStep: FunctionComponent<
  AddNewVisitQuestionnairesStepProps
> = ({ form }) => {
  return (
    <Flex direction="column" gap="lg">
      <Text fw={500}>Disease Activity</Text>
      <Paper shadow="lg" p="lg" radius="lg" withBorder></Paper>
    </Flex>
  );
};

export default AddNewVisitQuestionnairesStep;
