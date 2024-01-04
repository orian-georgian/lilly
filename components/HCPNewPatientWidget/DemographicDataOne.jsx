import {
  TextInput,
  rem,
  Grid,
  NumberInput,
  SegmentedControl,
} from "@mantine/core";
import { FormWrapperWidget } from "../FormWrapperWidget";
import { DatePickerInput } from "@mantine/dates";
import { MdOutlineCalendarMonth } from "react-icons/md";
import calculateAge from "@lilly/utils/calculateAge";
import calculateBMI from "@lilly/utils/calculateBMI";
import { useEffect } from "react";
import { Null } from "./HCPNewPatientWidget";
import { Units, Countries } from "@lilly/constants";
import { SelectWidget } from "../SelectWidget";

export default function DemographicDataOne({ form }) {
  const { dob, weight, weightUnit, height, heightUnit } = form.values;

  useEffect(() => form.setValues({ age: dob ? calculateAge(dob) : "" }), [dob]);

  useEffect(() => {
    const { bmi, bmiCategory } = calculateBMI(
      weight,
      weightUnit,
      height,
      heightUnit
    );

    form.setValues({ bmi, bmiCategory });
  }, [weight, weightUnit, height, heightUnit]);

  return (
    <FormWrapperWidget title="Demographic Data - Part 1/2">
      <TextInput
        label="ID"
        placeholder="id"
        {...form.getInputProps("id")}
        disabled
      />
      <TextInput
        label="E-Mail Address"
        placeholder="Fill in the e-mail address"
        {...form.getInputProps("email")}
      />
      <SelectWidget
        label="Nationality"
        placeholder="Select a nationality"
        data={Countries.Nationality}
        {...form.getInputProps("nationality")}
      />
      <SelectWidget
        label="Language"
        placeholder="Select a language"
        data={Countries.Language}
        {...form.getInputProps("language")}
      />
      <Grid>
        <Grid.Col span={{ base: 12, md: 9, lg: 9 }}>
          <DatePickerInput
            label="Date of Birth"
            placeholder="Select a date"
            valueFormat="DD/MM/YYYY"
            clearable
            leftSection={
              <MdOutlineCalendarMonth height={rem(20)} width={rem(20)} />
            }
            leftSectionPointerEvents="none"
            maxDate={new Date()}
            {...form.getInputProps("dob")}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 3, lg: 3 }}>
          <NumberInput
            label="Age"
            disabled
            {...form.getInputProps("age")}
            rightSection={<Null />}
          />
        </Grid.Col>
      </Grid>
      <NumberInput
        label="Weight"
        placeholder="weight"
        {...form.getInputProps("weight")}
        styles={{ section: { width: "auto", right: 0 } }}
        rightSection={
          <SegmentedControl
            className="lilly-segmentedControl"
            color={`var(--mantine-color-lilly-red-7)`}
            bg="white"
            data={Units.Weight}
            {...form.getInputProps("weightUnit")}
          />
        }
      />
      <NumberInput
        label="Height"
        placeholder="height"
        {...form.getInputProps("height")}
        styles={{ section: { width: "auto", right: 0 } }}
        rightSection={
          <SegmentedControl
            className="lilly-segmentedControl"
            color={`var(--mantine-color-lilly-red-7)`}
            bg="white"
            data={Units.Height}
            {...form.getInputProps("heightUnit")}
          />
        }
      />
      <Grid>
        <Grid.Col span={{ base: 12, md: 3, lg: 3 }}>
          <NumberInput
            label="BMI"
            disabled
            {...form.getInputProps("bmi")}
            rightSection={<Null />}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 9, lg: 9 }}>
          <TextInput
            label="BMI Category"
            {...form.getInputProps("bmiCategory")}
            disabled
          />
        </Grid.Col>
      </Grid>
    </FormWrapperWidget>
  );
}
