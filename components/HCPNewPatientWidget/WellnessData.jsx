import {
  SegmentedControl,
  Flex,
  Text,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";
import { FormWrapperWidget } from "../FormWrapperWidget";
import { MdOutlineInfo } from "react-icons/md";
import { YES_NO } from "./HCPNewPatientWidget";
import { DietaryIntakes, Exercises } from "@lilly/constants";
import { SelectWidget } from "../SelectWidget";
import { randomId } from "@mantine/hooks";

export default function WellnessData({ form }) {
  return (
    <FormWrapperWidget title="Wellness Data">
      <Flex gap={10} direction="column">
        <Text>Exercise</Text>
        {Exercises.List.map(({ value, label, description }) => (
          <Flex gap={8} align="center" justify="space-between" key={value}>
            <Flex gap={10} align="center">
              <Tooltip
                multiline
                maw={402}
                px={16}
                py={8}
                arrowOffset={25}
                arrowSize={8}
                label={description}
                withArrow
                position="top-start"
                bg={`var(--mantine-color-lilly-red-10)`}
                styles={{
                  tooltip: {
                    color: `var(--mantine-color-primary-dark-9)`,
                  },
                }}
              >
                <UnstyledButton h={24}>
                  <MdOutlineInfo
                    color={`var(--mantine-color-lilly-red-7)`}
                    size={24}
                  />
                </UnstyledButton>
              </Tooltip>
              <Text>{label}</Text>
            </Flex>
            <SegmentedControl
              className="lilly-segmentedControl"
              {...form.getInputProps(`exercise.${value}`)}
              data={YES_NO}
            />
          </Flex>
        ))}
      </Flex>
      <SelectWidget
        label="Dietary"
        placeholder="Select dietary intake"
        data={DietaryIntakes.List}
        {...form.getInputProps(`exercise.dietaryIntake`)}
      />
    </FormWrapperWidget>
  );
}
