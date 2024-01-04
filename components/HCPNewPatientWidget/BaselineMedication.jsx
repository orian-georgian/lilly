import {
  Flex,
  Button,
  Paper,
  Text,
  ActionIcon,
} from "@mantine/core";
import { FormWrapperWidget } from "../FormWrapperWidget";
import { DatePickerInput } from "@mantine/dates";
import { MdOutlineDelete } from "react-icons/md";
import { randomId } from "@mantine/hooks";
import { Treatments } from "@lilly/constants";
import { SelectWidget } from "../SelectWidget";

export default function BaselineMedication({ form }) {
  return (
    <FormWrapperWidget title="Baseline Medication">
      <SelectWidget
        isMulti
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
        {...form.getInputProps("csDMARDBaseline")}
      />
      <SelectWidget
        isMulti
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
        {...form.getInputProps("corticosteroidBaseline")}
      />
      <Flex direction="row" wrap="wrap" justify="space-between" gap={8}>
        <Text>b/tsDMARD at baseline</Text>
        <Button
          variant="outline"
          onClick={() =>
            form.insertListItem("btsDMARDBaseline", {
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
      {form.values.btsDMARDBaseline.map((item, index) => (
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
                onClick={() => form.removeListItem("btsDMARDBaseline", index)}
              >
                <MdOutlineDelete width={20} height={20} color="red" />
              </ActionIcon>
            </Flex>
            <SelectWidget
              isMulti
              label="Treatment"
              placeholder="Select a treatment"
              data={Treatments.List}
              {...form.getInputProps(`btsDMARDBaseline.${index}.treatment`)}
            />
            <DatePickerInput
              label="Start date"
              placeholder="Select a date"
              valueFormat="DD/MM/YYYY"
              maxDate={new Date()}
              clearable
              {...form.getInputProps(`btsDMARDBaseline.${index}.start`)}
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
              {...form.getInputProps(`btsDMARDBaseline.${index}.end`)}
            />
          </Flex>
        </Paper>
      ))}
    </FormWrapperWidget>
  );
}
