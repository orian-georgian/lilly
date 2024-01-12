import { FunctionComponent, useEffect } from "react";
import { DatePickerInput } from "@mantine/dates";
import { Flex, Select, Text, TextInput, Textarea } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { useId } from "@mantine/hooks";
import { MdOutlineCalendarMonth } from "react-icons/md";

import { UserTypes } from "@lilly/constants";

interface AddUserDataStepProps {
  form: UseFormReturnType<any>;
}

const labelStyles = {
  label: {
    fontWeight: 400,
  },
};

const AddUserDataStep: FunctionComponent<AddUserDataStepProps> = ({ form }) => {
  const id = useId();

  useEffect(() => {
    form.setFieldValue("step1.userId", id);
  }, []);

  return (
    <Flex direction="column" gap="lg">
      <Text fw={500}>Study Data</Text>
      <Select
        styles={labelStyles}
        label="User Type"
        withAsterisk
        placeholder="Please select a user type"
        data={UserTypes.List}
        {...form.getInputProps("step1.userType")}
      />
      <TextInput
        styles={labelStyles}
        disabled
        label="ID"
        {...form.getInputProps("step1.userId")}
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

      <DatePickerInput
        styles={labelStyles}
        leftSection={<MdOutlineCalendarMonth />}
        leftSectionPointerEvents="none"
        withAsterisk
        valueFormat="DD/MM/YYYY"
        label="Start Date"
        placeholder="Select a date"
        {...form.getInputProps("step1.startDate")}
      />
      <DatePickerInput
        styles={labelStyles}
        leftSection={<MdOutlineCalendarMonth />}
        leftSectionPointerEvents="none"
        withAsterisk
        valueFormat="DD/MM/YYYY"
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

export default AddUserDataStep;
