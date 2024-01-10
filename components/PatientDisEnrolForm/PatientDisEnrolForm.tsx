import {
  Grid,
  TextInput,
  Select,
  Flex,
  Divider,
  Button,
  Checkbox,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { FunctionComponent } from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { DatePickerInput } from "@mantine/dates";
import { PatientDisEnrollmentReasons } from "@lilly/constants";

const classNames = {
  label: "input-label-normal",
};

export const Null = () => null;

const formValues = {
  id: 11111,
  dateOfDisEnrolling: new Date(),
  study: "Study 1",
  reason: "",
  cancelAuth: false,
};

const handleSubmit = (data: object) => {
  console.log(data);
};

const handleSubmitErrors = (errors: object) => {
  console.error(errors);
};

interface PatientDisEnrolFormProps {
  onClose: () => void;
}

const PatientDisEnrolForm: FunctionComponent<PatientDisEnrolFormProps> = ({
  onClose,
}) => {
  const form: any = useForm({
    initialValues: formValues,
    validate: {
      reason: isNotEmpty("Select a reason"),
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(handleSubmit, handleSubmitErrors)}
      noValidate
      className="w-100"
    >
      <Flex direction="column" gap={10} px="xl">
        <Divider w="100%" />
        <Grid>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <TextInput
              classNames={classNames}
              label="Patient ID"
              withAsterisk
              disabled
              {...form.getInputProps("id")}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <DatePickerInput
              classNames={classNames}
              label="Date of disenrolling"
              placeholder="Select a date"
              valueFormat="DD/MM/YYYY"
              withAsterisk
              clearable
              disabled
              leftSection={<MdOutlineCalendarMonth height={20} width={20} />}
              leftSectionPointerEvents="none"
              maxDate={new Date()}
              {...form.getInputProps("dateOfDisEnrolling")}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
            <TextInput
              classNames={classNames}
              label="Study to disenrol patient from"
              withAsterisk
              disabled
              {...form.getInputProps("study")}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
            <Select
              classNames={classNames}
              label="Reason for disenrolling patient"
              placeholder="Select a reason"
              data={PatientDisEnrollmentReasons.List}
              withAsterisk
              clearable
              {...form.getInputProps("reason")}
            />
          </Grid.Col>
          <Grid.Col>
            <Checkbox
              label="Cancel Authorization as well"
              {...form.getInputProps("cancelAuth", { type: "checkbox" })}
            />
          </Grid.Col>
        </Grid>
        <Divider w="100%" my="sm" />
        <Flex align="center" justify="space-between">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="filled" type="submit">Confirm</Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default PatientDisEnrolForm;
