import { Flex, Select, Text, TextInput } from "@mantine/core";
import { FunctionComponent, useEffect } from "react";
import { DatePickerInput } from "@mantine/dates";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { UseFormReturnType } from "@mantine/form";
import { calculateYearsFromNow } from "@lilly/utils";
import { EducationStatuses, Genders, SmokingStatuses } from "@lilly/constants";

export const YES_NO = [
  { value: "Y", label: "Yes" },
  { value: "N", label: "No" },
];

interface PatientDemographicDataSecondStepProps {
  form: UseFormReturnType<any>;
}

export const Null = () => null;

const classNames = {
  label: "input-label-normal",
};

const PatientDemographicDataSecondStep: FunctionComponent<
  PatientDemographicDataSecondStepProps
> = ({ form }) => {
  const { diagnosisDate } = form.values.step3;

  useEffect(() => {
    form.setValues({
      step3: {
        ...form.values.step3,
        diseaseEvolution: diagnosisDate
          ? calculateYearsFromNow(diagnosisDate)
          : "",
      },
    });
  }, [diagnosisDate]);

  return (
    <Flex direction="column" gap="lg">
      <Text fw={500}>Demographic Data - Part 2/2</Text>
      <Select
        classNames={classNames}
        clearable
        label="Sex"
        placeholder="Select a sex"
        withAsterisk
        data={Genders.List}
        {...form.getInputProps("step3.sex")}
      />
      <Select
        classNames={classNames}
        clearable
        label="Primary Employment"
        placeholder="Are you employed at the moment"
        data={YES_NO}
        withAsterisk
        {...form.getInputProps("step3.primaryEmployment")}
      />
      <Select
        classNames={classNames}
        clearable
        label="Education Status"
        placeholder="Select an education status"
        data={EducationStatuses.List}
        withAsterisk
        {...form.getInputProps("step3.educationStatus")}
      />
      <Select
        classNames={classNames}
        clearable
        label="Smoking Status"
        placeholder="Select a smoking status"
        data={SmokingStatuses.List}
        withAsterisk
        {...form.getInputProps("step3.smokingStatus")}
      />
      <DatePickerInput
        classNames={classNames}
        label="Disease Diagnosis Date"
        placeholder="Select a date"
        valueFormat="DD/MM/YYYY"
        clearable
        withAsterisk
        leftSection={<MdOutlineCalendarMonth height={20} width={20} />}
        leftSectionPointerEvents="none"
        maxDate={new Date()}
        {...form.getInputProps("step3.diagnosisDate")}
      />
      <TextInput
        classNames={classNames}
        label="Years of Disease Evolution"
        {...form.getInputProps("step3.diseaseEvolution")}
        disabled
      />
    </Flex>
  );
};

export default PatientDemographicDataSecondStep;
