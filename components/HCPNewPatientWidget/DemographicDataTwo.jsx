import { TextInput } from "@mantine/core";
import { FormWrapperWidget } from "../FormWrapperWidget";
import { DatePickerInput } from "@mantine/dates";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { useEffect } from "react";
import { YES_NO } from "./HCPNewPatientWidget";
import calculateYearsFromNow from "@lilly/utils/calculateYearsFromNow";
import { EducationStatuses, Genders, SmokingStatuses } from "@lilly/constants";
import { SelectWidget } from "../SelectWidget";

export default function DemographicDataTwo({ form }) {
  const { diagnosisDate } = form.values;

  useEffect(() => {
    form.setValues({
      diseaseEvolution: diagnosisDate
        ? calculateYearsFromNow(diagnosisDate)
        : "",
    });
  }, [diagnosisDate]);

  return (
    <FormWrapperWidget title="Demographic Data - Part 2/2">
      <SelectWidget
        label="Sex"
        placeholder="Select a sex"
        data={Genders.List}
        {...form.getInputProps("sex")}
      />
      <SelectWidget
        label="Primary Employment"
        placeholder="Are you employed at the moment"
        data={YES_NO}
        {...form.getInputProps("primaryEmployment")}
      />
      <SelectWidget
        label="Education Status"
        placeholder="Select an education status"
        data={EducationStatuses.List}
        {...form.getInputProps("educationStatus")}
      />
      <SelectWidget
        label="Smoking Status"
        placeholder="Select a smoking status"
        data={SmokingStatuses.List}
        {...form.getInputProps("smokingStatus")}
      />
      <DatePickerInput
        label="Disease Diagnosis Date"
        placeholder="Select a date"
        valueFormat="DD/MM/YYYY"
        clearable
        leftSection={<MdOutlineCalendarMonth height={20} width={20} />}
        leftSectionPointerEvents="none"
        maxDate={new Date()}
        {...form.getInputProps("diagnosisDate")}
      />
      <TextInput
        label="Years of Disease Evolution"
        {...form.getInputProps("diseaseEvolution")}
        disabled
      />
    </FormWrapperWidget>
  );
}
