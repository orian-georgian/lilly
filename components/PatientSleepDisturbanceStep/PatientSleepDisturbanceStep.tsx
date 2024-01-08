import { Flex, Select, Text } from "@mantine/core";
import { FunctionComponent } from "react";
import { UseFormReturnType } from "@mantine/form";
import { SleepDisturbances } from "@lilly/constants";

interface PatientSleepDisturbanceStepProps {
  form: UseFormReturnType<any>;
}

const PatientSleepDisturbanceStep: FunctionComponent<
  PatientSleepDisturbanceStepProps
> = ({ form }) => {
  return (
    <Flex direction="column" gap="lg">
      <Text fw={500}>Sleep Disturbance</Text>
      <Text>How often per month do you:</Text>
      <Select
        withAsterisk
        clearable
        label="Have trouble falling asleep?"
        placeholder="Select sleep disturbance"
        data={SleepDisturbances.List}
        {...form.getInputProps("step9.sleepTrouble")}
      />
      <Select
        withAsterisk
        clearable
        label="Wake up several times per night?"
        placeholder="Select sleep disturbance"
        data={SleepDisturbances.List}
        {...form.getInputProps("step9.nightWakeUp")}
      />
      <Select
        withAsterisk
        clearable
        label="Have trouble staying asleep (including waking far away too early)?"
        placeholder="Select sleep disturbance"
        data={SleepDisturbances.List}
        {...form.getInputProps("step9.troubleStayingSleep")}
      />
      <Select
        withAsterisk
        clearable
        label="Wake up after your usual amount of sleep feeling tired and worn out?"
        placeholder="Select sleep disturbance"
        data={SleepDisturbances.List}
        {...form.getInputProps("step9.feelingTired")}
      />
    </Flex>
  );
};

export default PatientSleepDisturbanceStep;
