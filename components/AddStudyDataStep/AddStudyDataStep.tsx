import { FunctionComponent } from "react";
import { DatePickerInput } from "@mantine/dates";
import { Flex, Select, Text, TextInput, Textarea } from "@mantine/core";
import { MantineForm } from "types";

import { MdOutlineCalendarMonth } from "react-icons/md";

interface AddStudyDataStepProps {
  form: MantineForm;
}

const labelStyles = {
  label: {
    fontWeight: 400,
  },
};

const diseases = ["exSpA", "RA", "PsA", "LSD"];

const AddStudyDataStep: FunctionComponent<AddStudyDataStepProps> = ({
  form,
}) => {
  return (
    <Flex direction="column" gap="lg">
      <Text fw={500}>Study Data</Text>
      <TextInput
        styles={labelStyles}
        label="Code"
        withAsterisk
        placeholder="Fill in the code of the study"
        {...form.getInputProps("step1.code")}
      />
      <TextInput
        styles={labelStyles}
        label="Title"
        withAsterisk
        placeholder="Fill in the name of the study"
        {...form.getInputProps("step1.title")}
      />
      <Textarea
        styles={labelStyles}
        label="Description"
        placeholder="Fill in a description of the study"
        {...form.getInputProps("step1.description")}
      />
      <Select
        styles={labelStyles}
        label="Disease"
        withAsterisk
        placeholder="Please select a disease"
        data={diseases}
        {...form.getInputProps("step1.disease")}
      />
      <DatePickerInput
        styles={labelStyles}
        leftSection={<MdOutlineCalendarMonth />}
        leftSectionPointerEvents="none"
        withAsterisk
        label="Start Date"
        placeholder="Select a date"
        {...form.getInputProps("step1.startDate")}
      />
      <DatePickerInput
        styles={labelStyles}
        leftSection={<MdOutlineCalendarMonth />}
        leftSectionPointerEvents="none"
        withAsterisk
        label="End Date"
        placeholder="Select a date"
        {...form.getInputProps("step1.endDate")}
      />
      <TextInput
        styles={labelStyles}
        label="Total number of patients"
        withAsterisk
        placeholder="Fill in the total number of patients"
        {...form.getInputProps("step1.patientsTotal")}
      />
      <Textarea
        styles={labelStyles}
        label="Papers"
        withAsterisk
        placeholder="Fill in the code of used papers"
        {...form.getInputProps("step1.papers")}
      />
    </Flex>
  );
};

export default AddStudyDataStep;
