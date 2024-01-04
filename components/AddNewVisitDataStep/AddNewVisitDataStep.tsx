import { FunctionComponent } from "react";
import { DatePickerInput } from "@mantine/dates";
import { UseFormReturnType } from "@mantine/form";
import { Flex, Select, Text } from "@mantine/core";

import { MdOutlineCalendarMonth } from "react-icons/md";

interface AddNewVisitDataStepProps {
  form: UseFormReturnType<object>;
}

const labelStyles = {
  label: {
    fontWeight: 400,
  },
};

const AddNewVisitDataStep: FunctionComponent<AddNewVisitDataStepProps> = ({
  form,
}) => {
  return (
    <Flex direction="column" gap="lg">
      <Text fw={500}>Visit Data</Text>
      <DatePickerInput
        styles={labelStyles}
        leftSection={<MdOutlineCalendarMonth />}
        leftSectionPointerEvents="none"
        label="Visit Date"
        placeholder="Select a date"
        {...form.getInputProps("visitDate")}
      />
      <Select
        styles={labelStyles}
        label="Visit Type"
        placeholder="Select a visit type"
        withAsterisk
        data={["Type 1", "Type 2", "Type 3", "Type 4"]}
        {...form.getInputProps("visitType")}
      />
      <DatePickerInput
        styles={labelStyles}
        leftSection={<MdOutlineCalendarMonth />}
        leftSectionPointerEvents="none"
        label="Disease Activity Assessment Date"
        placeholder="Select a date"
        {...form.getInputProps("assessmentDate")}
      />
      <DatePickerInput
        styles={labelStyles}
        leftSection={<MdOutlineCalendarMonth />}
        leftSectionPointerEvents="none"
        label="Assessment Entry Date"
        placeholder="Select a date"
        {...form.getInputProps("entryDate")}
      />
      <Select
        styles={labelStyles}
        label="Is the patient still in the baseline treatment"
        placeholder="Select an answer"
        data={["Type 1", "Type 2", "Type 3", "Type 4"]}
        {...form.getInputProps("baselineTreatment")}
      />
      <Select
        styles={labelStyles}
        label="Why not?"
        placeholder="Select an answer"
        data={["Type 1", "Type 2", "Type 3", "Type 4"]}
        {...form.getInputProps("whyNot")}
      />
    </Flex>
  );
};

export default AddNewVisitDataStep;
