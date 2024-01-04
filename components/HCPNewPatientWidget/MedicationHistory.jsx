import { Flex, Button, Paper, Text, ActionIcon } from "@mantine/core";
import { FormWrapperWidget } from "../FormWrapperWidget";
import { MonthPickerInput } from "@mantine/dates";
import { MdOutlineDelete } from "react-icons/md";
import { randomId } from "@mantine/hooks";
import { Treatments } from "@lilly/constants";
import { SelectWidget } from "../SelectWidget";

export default function MedicationHistory({ form }) {
  return (
    <FormWrapperWidget title="Medication History">
      <SelectWidget
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
        isMulti
        {...form.getInputProps("csDMARDUsed")}
      />
      <Flex direction="row" wrap="wrap" justify="space-between" gap={8}>
        <Text>b/tsDMARD previously used</Text>
        <Button
          variant="outline"
          onClick={() =>
            form.insertListItem("btsDMARDUsed", {
              treatment: [],
              start: null,
              end: null,
              key: randomId(),
            })
          }
        >
          Add a b/tsDMARD
        </Button>
      </Flex>
      {form.values.btsDMARDUsed.map((item, index) => (
        <Paper
          shadow="lg"
          pl="lg"
          pr="lg"
          pt="xs"
          pb="xs"
          radius="lg"
          withBorder
          key={item.key}
        >
          <Flex direction="column" gap={20}>
            <Flex align="center" justify="space-between">
              <Text fw={500}>b/tsDMARD {index + 1}</Text>
              <ActionIcon
                variant="transparent"
                onClick={() => form.removeListItem("btsDMARDUsed", index)}
              >
                <MdOutlineDelete width={20} height={20} color="red" />
              </ActionIcon>
            </Flex>
            <SelectWidget
              label="Treatment"
              placeholder="Select a treatment"
              data={Treatments.List}
              isMulti
              {...form.getInputProps(`btsDMARDUsed.${index}.treatment`)}
            />
            <MonthPickerInput
              label="Start month/year"
              placeholder="Select a date"
              valueFormat="MM/YYYY"
              maxDate={new Date()}
              clearable
              {...form.getInputProps(`btsDMARDUsed.${index}.start`)}
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
              {...form.getInputProps(`btsDMARDUsed.${index}.end`)}
            />
          </Flex>
        </Paper>
      ))}
    </FormWrapperWidget>
  );
}
