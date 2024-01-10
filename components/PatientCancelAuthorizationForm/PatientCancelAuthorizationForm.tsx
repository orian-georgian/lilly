import { Grid, TextInput, Flex, Divider, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FunctionComponent } from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { DatePickerInput } from "@mantine/dates";

const classNames = {
  label: "input-label-normal",
};

export const Null = () => null;

const formValues = {
  id: 11111,
  dateOfCancellation: new Date(),
};

const handleSubmit = (data: object) => {
  console.log(data);
};

const handleSubmitErrors = (errors: object) => {
  console.error(errors);
};

interface PatientCancelAuthorizationFormProps {
  onClose: () => void;
}

const PatientCancelAuthorizationForm: FunctionComponent<
  PatientCancelAuthorizationFormProps
> = ({ onClose }) => {
  const form: any = useForm({
    initialValues: formValues,
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
              label="Date of cancellation"
              placeholder="Select a date"
              valueFormat="DD/MM/YYYY"
              withAsterisk
              clearable
              disabled
              leftSection={<MdOutlineCalendarMonth height={20} width={20} />}
              leftSectionPointerEvents="none"
              maxDate={new Date()}
              {...form.getInputProps("dateOfCancellation")}
            />
          </Grid.Col>
        </Grid>
        <Divider w="100%" my="sm" />
        <Flex align="center" justify="space-between">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="filled" type="submit">
            Confirm
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default PatientCancelAuthorizationForm;
