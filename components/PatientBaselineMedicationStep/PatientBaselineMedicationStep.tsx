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
import { MdOutlineDelete } from "react-icons/md";
import { UseFormReturnType } from "@mantine/form";
import { Treatments } from "@lilly/constants";
import { randomId } from "@mantine/hooks";
import { BtsDMARDUsed } from "@lilly/types/index";

interface PatientBaselineMedicationStepProps {
  form: UseFormReturnType<any>;
}

export const Null = () => null;

const PatientBaselineMedicationStep: FunctionComponent<
  PatientBaselineMedicationStepProps
> = ({ form }) => {
  console.log(form.values.step5);
  return (
    <Flex direction="column" gap="lg">
      <Text fw={500}>Baseline Medication</Text>
      <MultiSelect
        clearable
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
        clearable
        label="Concomitant Costicosteroid at baseline"
        placeholder="Select concomitant Costicosteroid at baseline"
        data={[
          "methotrexate (Rheumatrex, Trexall, other)",
          "leflunomide",
          "sulfasalazine",
          "cyclosporin A – (oral)",
          "chloroquine",
          "hydroxychloroquine",
          "sodium aurothiomalate: myocrisin",
        ]}
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
            key={randomId()}
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
                clearable
                label="Treatment"
                placeholder="Select a treatment"
                data={Treatments.List}
                {...form.getInputProps(
                  `step5.btsDMARDBaseline.${index}.treatment`
                )}
              />
              <DatePickerInput
                label="Start date"
                placeholder="Select a date"
                valueFormat="DD/MM/YYYY"
                maxDate={new Date()}
                clearable
                {...form.getInputProps(`step5.btsDMARDBaseline.${index}.start`)}
              />
              <DatePickerInput
                label="End date"
                placeholder={
                  !item.start ? "Select a start date first" : "Select a date"
                }
                valueFormat="DD/MM/YYYY"
                minDate={new Date(item.start)}
                maxDate={new Date()}
                disabled={!item.start}
                clearable
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
