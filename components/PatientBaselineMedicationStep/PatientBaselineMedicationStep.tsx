import {
  ActionIcon,
  Button,
  Flex,
  MultiSelect,
  Paper,
  Text,
} from "@mantine/core";
import { FunctionComponent } from "react";
import { DatePickerInput } from "@mantine/dates";
import { MdOutlineDelete, MdOutlineCalendarMonth } from "react-icons/md";
import { UseFormReturnType } from "@mantine/form";
import { Corticosteroids, Treatments } from "@lilly/constants";
import { randomId } from "@mantine/hooks";
import { BtsDMARDUsed } from "@lilly/types/index";

interface PatientBaselineMedicationStepProps {
  form: UseFormReturnType<any>;
}

export const Null = () => null;

const classNames = {
  label: "input-label-normal",
};

const PatientBaselineMedicationStep: FunctionComponent<
  PatientBaselineMedicationStepProps
> = ({ form }) => {
  return (
    <Flex direction="column" gap="lg">
      <Text fw={500}>Baseline Medication</Text>
      <MultiSelect
        classNames={classNames}
        clearable
        withAsterisk
        label="Concomitant csDMARD at baseline"
        placeholder="Select concomitant csDMARD at baseline"
        data={[
          "methotrexate (Rheumatrex, Trexall, other)",
          "leflunomide",
          "sulfasalazine",
          "cyclosporin A – (oral)",
          "chloroquine",
          "hydroxychloroquine",
          "sodium aurothiomalate: myocrisin",
        ]}
        {...form.getInputProps("step5.csDMARDBaseline")}
      />
      <MultiSelect
        classNames={classNames}
        clearable
        withAsterisk
        label="Concomitant Costicosteroid at baseline"
        placeholder="Select concomitant Costicosteroid at baseline"
        data={Corticosteroids.List}
        {...form.getInputProps("step5.corticosteroidBaseline")}
      />
      <Flex direction="row" wrap="wrap" justify="space-between" gap={8}>
        <Text>b/tsDMARD at baseline</Text>
        <Button
          variant="outline"
          onClick={() =>
            form.insertListItem("step5.btsDMARDBaseline", {
              treatment: [],
              start: null,
              end: null,
            })
          }
        >
          Add a b/tsDMARD
        </Button>
      </Flex>
      {form.values.step5.btsDMARDBaseline.map(
        (item: BtsDMARDUsed, index: number) => (
          <Paper
            shadow="lg"
            pl="lg"
            pr="lg"
            pt="xs"
            pb="xs"
            radius="lg"
            withBorder
            //key={randomId()}
          >
            <Flex direction="column" gap={20}>
              <Flex align="center" justify="space-between">
                <Text fw={500}>b/tsDMARD {index + 1}</Text>
                <ActionIcon
                  variant="transparent"
                  onClick={() =>
                    form.removeListItem("step5.btsDMARDBaseline", index)
                  }
                >
                  <MdOutlineDelete width={20} height={20} color="red" />
                </ActionIcon>
              </Flex>
              <MultiSelect
                classNames={classNames}
                clearable
                withAsterisk
                label="Treatment"
                placeholder="Select a treatment"
                data={Treatments.List}
                {...form.getInputProps(
                  `step5.btsDMARDBaseline.${index}.treatment`
                )}
              />
              <DatePickerInput
                classNames={classNames}
                label="Start date"
                placeholder="Select a date"
                valueFormat="DD/MM/YYYY"
                maxDate={new Date()}
                clearable
                withAsterisk
                leftSection={<MdOutlineCalendarMonth height={20} width={20} />}
                {...form.getInputProps(`step5.btsDMARDBaseline.${index}.start`)}
              />
              <DatePickerInput
                classNames={{
                  label: "input-label-normal",
                }}
                label="End date"
                placeholder={
                  !item.start ? "Select a start date first" : "Select a date"
                }
                valueFormat="DD/MM/YYYY"
                minDate={new Date(item.start)}
                maxDate={new Date()}
                disabled={!item.start}
                clearable
                withAsterisk
                leftSection={<MdOutlineCalendarMonth height={20} width={20} />}
                {...form.getInputProps(`step5.btsDMARDBaseline.${index}.end`)}
              />
            </Flex>
          </Paper>
        )
      )}
    </Flex>
  );
};

export default PatientBaselineMedicationStep;
