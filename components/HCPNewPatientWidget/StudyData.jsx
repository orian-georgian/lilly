import { FormWrapperWidget } from "../FormWrapperWidget";
import { DatePickerInput } from "@mantine/dates";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { useEffect } from "react";
import { Countries, Diseases } from "@lilly/constants";
import { SelectWidget } from "../SelectWidget";

export default function StudyData({ form }) {
  const { study } = form.values;

  useEffect(() => {
    if (!study) {
      form.setValues({ country: null, disease: null });
    }
  }, [study]);

  return (
    <FormWrapperWidget title="Study Data">
      <SelectWidget
        label="Study"
        placeholder="Select a study"
        data={["React", "Angular", "Vue", "Svelte"]}
        {...form.getInputProps("study")}
      />
      <SelectWidget
        label="Country/Region/Site"
        placeholder={study ? "Country/Region/Site" : "Select a study first"}
        data={Countries.Nationality}
        disabled={!study}
        {...form.getInputProps("country")}
      />
      <SelectWidget
        label="Disease"
        placeholder={study ? "Disease" : "Select a study first"}
        data={Diseases.List}
        disabled={!study}
        {...form.getInputProps("disease")}
      />
      <DatePickerInput
        label="Visit Date"
        placeholder="Visit Date"
        valueFormat="DD/MM/YYYY"
        {...form.getInputProps("visitedAt")}
        disabled
      />
      <DatePickerInput
        label="Treatment Prescribes Date"
        placeholder="Select a date"
        valueFormat="DD/MM/YYYY"
        clearable
        minDate={new Date()}
        leftSection={<MdOutlineCalendarMonth height={20} width={20} />}
        leftSectionPointerEvents="none"
        {...form.getInputProps("prescribedAt")}
      />
    </FormWrapperWidget>
  );
}
