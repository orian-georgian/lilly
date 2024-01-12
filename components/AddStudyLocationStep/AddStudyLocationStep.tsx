import { FunctionComponent, MouseEvent } from "react";
import {
  Flex,
  Text,
  Paper,
  ActionIcon,
  Select,
  TextInput,
  Button,
} from "@mantine/core";
import { UseFormReturnType, useForm } from "@mantine/form";
import { DataTable } from "mantine-datatable";
import { DatePickerInput } from "@mantine/dates";
import { useId } from "@mantine/hooks";

import { locationValidators } from "@lilly/utils/form-validators";
import { Countries } from "@lilly/constants";

import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineCalendarMonth } from "react-icons/md";

interface AddStudyLocationStepProps {
  form: UseFormReturnType<any>;
}

const labelStyles = {
  label: {
    fontWeight: 400,
  },
};

const initialValues = {
  location: null,
  region: null,
  site: null,
  approvalDate: new Date(),
  patientsTotal: "",
};

const AddStudyLocationStep: FunctionComponent<AddStudyLocationStepProps> = ({
  form,
}) => {
  const { locations } = form.values?.step3;
  const id = useId();
  const locationForm: any = useForm({
    initialValues,
    validate: locationValidators,
  });

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    const { hasErrors } = locationForm.validate();

    if (!hasErrors) {
      form.insertListItem("step3.locations", {
        ...locationForm.values,
        approvalDate:
          locationForm.values.approvalDate.toLocaleDateString("en-GB"),
        id,
      });
      form.clearFieldError("step3.locations");
      locationForm.reset();
    }
  };

  return (
    <Flex direction="column" gap="lg">
      <Text fw={500}>Country/Region/Site</Text>
      <Paper shadow="lg" p="lg" radius="lg" pos="relative" withBorder>
        <Flex direction="column" gap="md">
          <Select
            styles={labelStyles}
            label="Country"
            placeholder="Select a country"
            withAsterisk
            data={Countries.Nationality}
            {...locationForm.getInputProps("location")}
          />
          <Select
            styles={labelStyles}
            label="Region"
            placeholder="Select a country first"
            withAsterisk
            data={Countries.Nationality}
            disabled={!locationForm.values.location}
            {...locationForm.getInputProps("region")}
          />
          <Select
            styles={labelStyles}
            label="Site"
            placeholder="Select a region first"
            withAsterisk
            data={Countries.Nationality}
            disabled={!locationForm.values.region}
            {...locationForm.getInputProps("site")}
          />
          <DatePickerInput
            styles={labelStyles}
            leftSection={<MdOutlineCalendarMonth />}
            leftSectionPointerEvents="none"
            valueFormat="DD/MM/YYYY"
            label="Ethical committee approval date"
            placeholder="Select a date"
            {...locationForm.getInputProps("approvalDate")}
          />
          <TextInput
            styles={labelStyles}
            label="Total Number of patients"
            placeholder="Fill in the total number of patients"
            withAsterisk
            {...locationForm.getInputProps("patientsTotal")}
          />
          <Button
            variant="outline"
            type="submit"
            fullWidth
            onClick={handleSubmit}
          >
            Add
          </Button>
        </Flex>
      </Paper>
      <Paper shadow="lg" p="lg" radius="lg" pos="relative" withBorder>
        <DataTable
          records={locations ?? []}
          minHeight={200}
          height={250}
          columns={[
            {
              accessor: "location",
              title: "Location",
              sortable: true,
              render: ({ location }) =>
                Countries.Nationality.find(({ value }) => value === location)
                  ?.label,
            },
            {
              accessor: "patientsTotal",
              title: "# of Patients",
            },
            {
              accessor: "approvalDate",
              title: "Approval Date",
            },

            {
              accessor: "actions",
              title: "Delete",
              width: "0%",
              textAlign: "center",
              render: (_, index) => (
                <ActionIcon
                  size="md"
                  variant="subtle"
                  color="lilly-red"
                  onClick={() => form.removeListItem("step3.locations", index)}
                >
                  <AiOutlineDelete size={20} />
                </ActionIcon>
              ),
            },
          ]}
        />
      </Paper>
      {!!form.errors["step3.locations"] && (
        <Text size="xs" c="red">
          {form.errors["step3.locations"]}
        </Text>
      )}
    </Flex>
  );
};

export default AddStudyLocationStep;
