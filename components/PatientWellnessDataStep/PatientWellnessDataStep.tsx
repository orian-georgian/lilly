import {
  Flex,
  SegmentedControl,
  Select,
  Text,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";
import { FunctionComponent } from "react";
import { MdOutlineInfo } from "react-icons/md";
import { UseFormReturnType } from "@mantine/form";
import { DietaryIntakes, Exercises, YesNo } from "@lilly/constants";
import { Exercise } from "@lilly/types/index";

interface PatientWellnessDataStepProps {
  form: UseFormReturnType<any>;
}

const classNames = {
  label: "input-label-normal",
};

const PatientWellnessDataStep: FunctionComponent<
  PatientWellnessDataStepProps
> = ({ form }) => {
  return (
    <Flex direction="column" gap="lg">
      <Text fw={500}>Wellness Data</Text>
      <Flex gap={10} direction="column">
        <Text>Exercise</Text>
        {Exercises.List.map(({ value, label, description }: Exercise) => (
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
                bg={`var(--mantine-color-primary-dark-1)`}
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
            <Flex direction="column">
              <SegmentedControl
                className="lilly-segmentedControl"
                {...form.getInputProps(`step8.${value}`)}
                data={YesNo.List}
              />
              {form.errors[`step8.${value}`] && (
                <Text className="custom-error">
                  {form.errors[`step8.${value}`]}
                </Text>
              )}
            </Flex>
          </Flex>
        ))}
      </Flex>
      <Select
        classNames={classNames}
        clearable
        label="Dietary"
        placeholder="Select dietary intake"
        data={DietaryIntakes.List}
        {...form.getInputProps(`step8.dietaryIntake`)}
      />
    </Flex>
  );
};

export default PatientWellnessDataStep;
