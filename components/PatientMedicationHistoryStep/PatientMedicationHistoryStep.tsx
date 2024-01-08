import {
  ActionIcon,
  Button,
  Flex,
  MultiSelect,
  Paper,
  Text,
} from "@mantine/core";
import { FunctionComponent } from "react";
import { MonthPickerInput } from "@mantine/dates";
import { MdOutlineDelete, MdOutlineCalendarMonth } from "react-icons/md";
import { UseFormReturnType } from "@mantine/form";
import { Treatments } from "@lilly/constants";
import { randomId } from "@mantine/hooks";
import { BtsDMARDUsed } from "@lilly/types/index";

interface PatientMedicationHistoryStepProps {
  form: UseFormReturnType<any>;
}

export const Null = () => null;

const PatientMedicationHistoryStep: FunctionComponent<
  PatientMedicationHistoryStepProps
> = ({ form }) => {
  return (
    <Flex direction="column" gap="lg">
      <Text fw={500}>Medication History</Text>
      <MultiSelect
        clearable
        withAsterisk
        label="csDMARD previously used"
        placeholder="Select previously used medication"
        data={[
          "methotrexate (Rheumatrex, Trexall, other)",
          "leflunomide",
          "sulfasalazine",
          "cyclosporin A – (oral)",
          "chloroquine",
          "hydroxychloroquine",
          "sodium aurothiomalate: myocrisin",
        ]}
        {...form.getInputProps("step4.csDMARDUsed")}
      />
      <Flex direction="row" wrap="wrap" justify="space-between" gap={8}>
        <Text>b/tsDMARD previously used</Text>
        <Button
          variant="outline"
          onClick={() =>
            form.insertListItem("step4.btsDMARDUsed", {
              treatment: [],
              start: null,
              end: null,
            })
          }
        >
          Add a b/tsDMARD
        </Button>
      </Flex>
      {form.values.step4.btsDMARDUsed.map(
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
                    form.removeListItem("step4.btsDMARDUsed", index)
                  }
                >
                  <MdOutlineDelete width={20} height={20} color="red" />
                </ActionIcon>
              </Flex>
              <MultiSelect
                clearable
                withAsterisk
                label="Treatment"
                placeholder="Select a treatment"
                data={Treatments.List}
                {...form.getInputProps(`step4.btsDMARDUsed.${index}.treatment`)}
              />
              <MonthPickerInput
                label="Start month/year"
                placeholder="Select a date"
                valueFormat="MM/YYYY"
                maxDate={new Date()}
                clearable
                withAsterisk
                leftSection={<MdOutlineCalendarMonth height={20} width={20} />}
                {...form.getInputProps(`step4.btsDMARDUsed.${index}.start`)}
              />
              <MonthPickerInput
                label="End month/year"
                placeholder={
                  !item.start ? "Select a start date first" : "Select a date"
                }
                valueFormat="MM/YYYY"
                minDate={new Date(item.start)}
                maxDate={new Date()}
                disabled={!item.start}
                clearable
                withAsterisk
                leftSection={<MdOutlineCalendarMonth height={20} width={20} />}
                {...form.getInputProps(`step4.btsDMARDUsed.${index}.end`)}
              />
            </Flex>
          </Paper>
        )
      )}
    </Flex>
  );
};

export default PatientMedicationHistoryStep;
