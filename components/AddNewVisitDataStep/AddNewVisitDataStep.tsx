import { FunctionComponent } from "react";
import { DatePickerInput } from "@mantine/dates";
import { Flex, Select, Text } from "@mantine/core";
import { MantineForm } from "types";

import { MdOutlineCalendarMonth } from "react-icons/md";

interface AddNewVisitDataStepProps {
  form: MantineForm;
}

const labelStyles = {
  label: {
    fontWeight: 400,
  },
};

const visitTypes = ["Type 1", "Type 2", "Type 3", "Type 4"];
const baselineTreatmentAnswers = [
  "This is the first answer",
  "This is the second answer",
  "This is the third answer",
  "This is the fourth answer",
];
const whyNotAnswers = [
  "Because of this",
  "Because of that",
  "Because why not",
  "Final answer",
];

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
        {...form.getInputProps("step1.visitDate")}
      />
      <Select
        styles={labelStyles}
        label="Visit Type"
        placeholder="Select a visit type"
        withAsterisk
        data={visitTypes}
        {...form.getInputProps("step1.visitType")}
      />
      <DatePickerInput
        styles={labelStyles}
        leftSection={<MdOutlineCalendarMonth />}
        leftSectionPointerEvents="none"
        label="Disease Activity Assessment Date"
        placeholder="Select a date"
        {...form.getInputProps("step1.assessmentDate")}
      />
      <DatePickerInput
        styles={labelStyles}
        leftSection={<MdOutlineCalendarMonth />}
        leftSectionPointerEvents="none"
        label="Assessment Entry Date"
        placeholder="Select a date"
        {...form.getInputProps("step1.entryDate")}
      />
      <Select
        styles={labelStyles}
        label="Is the patient still in the baseline treatment"
        placeholder="Select an answer"
        data={baselineTreatmentAnswers}
        {...form.getInputProps("step1.baselineTreatment")}
      />
      <Select
        styles={labelStyles}
        label="Why not?"
        placeholder="Select an answer"
        data={whyNotAnswers}
        {...form.getInputProps("step1.whyNot")}
      />
    </Flex>
  );
};

export default AddNewVisitDataStep;
