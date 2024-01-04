import { Text } from "@mantine/core";
import { FormWrapperWidget } from "../FormWrapperWidget";
import { SleepDisturbances } from "@lilly/constants";
import { SelectWidget } from "../SelectWidget";

export default function SleepDisturbance({ form }) {
  return (
    <FormWrapperWidget title="Sleep Disturbance">
      <Text>How often per month do you:</Text>
      <SelectWidget
        label="Have trouble falling asleep?"
        placeholder="Select sleep disturbance"
        data={SleepDisturbances.List}
        {...form.getInputProps("sleepTrouble")}
      />
      <SelectWidget
        label="Wake up several times per night?"
        placeholder="Select sleep disturbance"
        data={SleepDisturbances.List}
        {...form.getInputProps("nightWakeUp")}
      />
      <SelectWidget
        label="Have trouble staying asleep (including waking far away too early)?"
        placeholder="Select sleep disturbance"
        data={SleepDisturbances.List}
        {...form.getInputProps("troubleStayingSleep")}
      />
      <SelectWidget
        label="Wake up after your usual amount of sleep feeling tired and worn out?"
        placeholder="Select sleep disturbance"
        data={SleepDisturbances.List}
        {...form.getInputProps("feelingTired")}
      />
    </FormWrapperWidget>
  );
}
