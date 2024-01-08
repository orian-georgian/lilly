import {
  Flex,
  Grid,
  NumberInput,
  SegmentedControl,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { FunctionComponent, useEffect } from "react";
import { DatePickerInput } from "@mantine/dates";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { UseFormReturnType } from "@mantine/form";
import { calculateBMI, calculateAge } from "@lilly/utils";
import { Units, Countries } from "@lilly/constants";

interface PatientDemographicDataFirstStepProps {
  form: UseFormReturnType<any>;
}

export const Null = () => null;

const PatientDemographicDataFirstStep: FunctionComponent<
  PatientDemographicDataFirstStepProps
> = ({ form }) => {
  const { dob, weight, weightUnit, height, heightUnit } = form.values.step2;

  useEffect(
    () =>
      form.setValues({
        step2: { ...form.values.step2, age: dob ? calculateAge(dob) : "" },
      }),
    [dob]
  );

  useEffect(() => {
    const { bmi, bmiCategory } = calculateBMI(
      weight,
      weightUnit,
      height,
      heightUnit
    );

    form.setValues({ step2: { ...form.values.step2, bmi, bmiCategory } });
  }, [weight, weightUnit, height, heightUnit]);

  return (
    <Flex direction="column" gap="lg">
      <Text fw={500}>Demographic Data - Part 1/2</Text>
      <TextInput
        label="ID"
        placeholder="id"
        {...form.getInputProps("step2.id")}
        disabled
      />
      <TextInput
        label="E-Mail Address"
        placeholder="Fill in the e-mail address"
        withAsterisk
        {...form.getInputProps("step2.email")}
      />
      <Select
        label="Nationality"
        placeholder="Select a nationality"
        data={Countries.Nationality}
        withAsterisk
        clearable
        {...form.getInputProps("step2.nationality")}
      />
      <Select
        label="Language"
        placeholder="Select a language"
        data={Countries.Language}
        withAsterisk
        clearable
        {...form.getInputProps("step2.language")}
      />
      <Grid>
        <Grid.Col span={{ base: 12, md: 9, lg: 9 }}>
          <DatePickerInput
            label="Date of Birth"
            placeholder="Select a date"
            valueFormat="DD/MM/YYYY"
            withAsterisk
            clearable
            leftSection={<MdOutlineCalendarMonth height={20} width={20} />}
            leftSectionPointerEvents="none"
            maxDate={new Date()}
            {...form.getInputProps("step2.dob")}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 3, lg: 3 }}>
          <NumberInput
            label="Age"
            disabled
            {...form.getInputProps("step2.age")}
            rightSection={<Null />}
          />
        </Grid.Col>
      </Grid>
      <NumberInput
        label="Weight"
        placeholder="weight"
        withAsterisk
        {...form.getInputProps("step2.weight")}
        styles={{ section: { width: "auto", right: 0 } }}
        rightSection={
          <SegmentedControl
            className="lilly-segmentedControl"
            color={`var(--mantine-color-lilly-red-7)`}
            bg="white"
            data={Units.Weight}
            {...form.getInputProps("step2.weightUnit")}
          />
        }
      />
      <NumberInput
        label="Height"
        placeholder="height"
        withAsterisk
        {...form.getInputProps("step2.height")}
        styles={{ section: { width: "auto", right: 0 } }}
        rightSection={
          <SegmentedControl
            className="lilly-segmentedControl"
            color={`var(--mantine-color-lilly-red-7)`}
            bg="white"
            data={Units.Height}
            {...form.getInputProps("step2.heightUnit")}
          />
        }
      />
      <Grid>
        <Grid.Col span={{ base: 12, md: 3, lg: 3 }}>
          <NumberInput
            label="BMI"
            disabled
            {...form.getInputProps("step2.bmi")}
            rightSection={<Null />}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 9, lg: 9 }}>
          <TextInput
            label="BMI Category"
            {...form.getInputProps("step2.bmiCategory")}
            disabled
          />
        </Grid.Col>
      </Grid>
    </Flex>
  );
};

export default PatientDemographicDataFirstStep;
