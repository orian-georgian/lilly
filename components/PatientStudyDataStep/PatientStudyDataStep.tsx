import { Flex, Select, Text } from "@mantine/core";
import { FunctionComponent, useEffect } from "react";
import { DatePickerInput } from "@mantine/dates";
import { Countries, Diseases } from "@lilly/constants";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { UseFormReturnType } from "@mantine/form";

interface PatientStudyDataStepProps {
  form: UseFormReturnType<any>;
}

const classNames = {
  label: "input-label-normal",
};

const PatientStudyDataStep: FunctionComponent<PatientStudyDataStepProps> = ({
  form,
}) => {
  const { study } = form.values.step1;

  useEffect(() => {
    if (!study) {
      form.setValues({
        step1: { ...form.values.step1, country: null, disease: null },
      });
    }
  }, [study]);

  return (
    <Flex direction="column" gap="lg">
      <Text fw={500}>Study Data</Text>
      <Select
        classNames={classNames}
        label="Study"
        placeholder="Select a study"
        data={["Study1", "Study2", "Study3", "Study4"]}
        clearable
        withAsterisk
        {...form.getInputProps("step1.study")}
      />
      <Select
        classNames={classNames}
        label="Country/Region/Site"
        placeholder={study ? "Country/Region/Site" : "Select a study first"}
        data={Countries.Nationality}
        disabled={!study}
        clearable
        withAsterisk
        {...form.getInputProps("step1.country")}
      />
      <Select
        classNames={classNames}
        label="Disease"
        placeholder={study ? "Disease" : "Select a study first"}
        data={Diseases.List}
        disabled={!study}
        clearable
        withAsterisk
        {...form.getInputProps("step1.disease")}
      />
      <DatePickerInput
        classNames={classNames}
        label="Visit Date"
        placeholder="Visit Date"
        valueFormat="DD/MM/YYYY"
        {...form.getInputProps("step1.visitedAt")}
        disabled
      />
      <DatePickerInput
        classNames={classNames}
        label="Treatment Prescribes Date"
        placeholder="Select a date"
        valueFormat="DD/MM/YYYY"
        clearable
        withAsterisk
        minDate={new Date()}
        leftSection={<MdOutlineCalendarMonth height={20} width={20} />}
        leftSectionPointerEvents="none"
        {...form.getInputProps("step1.prescribedAt")}
      />
    </Flex>
  );
};

export default PatientStudyDataStep;
