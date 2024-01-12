import { FunctionComponent } from "react";
import {
  Flex,
  Text,
  Paper,
  ActionIcon,
  Select,
  TextInput,
  Button,
  Divider,
} from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { AiOutlineDelete } from "react-icons/ai";

import { RecurrencePatterns, QuestionnaireFrequencies } from "@lilly/constants";
import { RecurrencePattern } from "@lilly/constants/recurrence-patterns";
import { QuestionnaireFrequency } from "@lilly/constants/questionnaire-frequencies";
import { StudyQuestionnaireForm } from "@lilly/types";

interface AddStudyHCPQuestionnairesStepProps {
  form: UseFormReturnType<any>;
}

const labelStyles = {
  label: {
    fontWeight: 400,
  },
};

const questionnaires = [
  "Questionnaire number 1",
  "Questionnaire number 2",
  "Questionnaire number 3",
  "Questionnaire number 4",
  "Questionnaire number 5",
];

const AddStudyHCPQuestionnairesStep: FunctionComponent<
  AddStudyHCPQuestionnairesStepProps
> = ({ form }) => {
  const { hcpQuestionnaires } = form.values.step4;

  const handleAddQuestionnaire = (): void => {
    form.insertListItem("step4.hcpQuestionnaires", {
      questionnaire: null,
      recurrencePattern: RecurrencePattern.Weekly,
      frequency: QuestionnaireFrequency.EveryFourWeeks,
      occurrencesAmount: null,
      numberOfDays: null,
    });
  };

  const handleRemoveQuestionnaire = (index: number) => (): void => {
    form.removeListItem("step4.hcpQuestionnaires", index);
  };

  return (
    <Flex direction="column" gap="lg">
      <Flex gap="md" align="center" justify="space-between">
        <Text fw={500}>HCP Questionnaires</Text>
        <Button
          variant="outline"
          color="lilly-red"
          onClick={handleAddQuestionnaire}
        >
          Add a questionnaire
        </Button>
      </Flex>
      {hcpQuestionnaires.map(
        ({ questionnaire }: StudyQuestionnaireForm, index: number) => (
          <Paper
            key={questionnaire}
            shadow="lg"
            p="lg"
            radius="lg"
            pos="relative"
            withBorder
          >
            <Flex direction="column" gap="xs">
              <Flex align="center" justify="space-between">
                <Text fw={500}>Questionnaire {index + 1}</Text>
                {hcpQuestionnaires.length > 1 && (
                  <ActionIcon
                    size="md"
                    variant="subtle"
                    onClick={handleRemoveQuestionnaire(index)}
                  >
                    <AiOutlineDelete size={20} />
                  </ActionIcon>
                )}
              </Flex>

              <Select
                styles={labelStyles}
                label="Questionnaire"
                placeholder="Select a Questionnaire"
                withAsterisk
                data={questionnaires}
                {...form.getInputProps(
                  `step4.hcpQuestionnaires.${index}.questionnaire`
                )}
              />
              <Divider color="var(--mantine-color-red-2)" />
              <Select
                styles={labelStyles}
                label="Recurrence Pattern"
                placeholder="Select a Recurrence Pattern"
                withAsterisk
                readOnly
                data={RecurrencePatterns}
                {...form.getInputProps(
                  `step4.hcpQuestionnaires.${index}.recurrencePattern`
                )}
              />
              <Select
                styles={labelStyles}
                label="Frequency"
                placeholder="Select a Frequency"
                withAsterisk
                data={QuestionnaireFrequencies}
                {...form.getInputProps(
                  `step4.hcpQuestionnaires.${index}.frequency`
                )}
              />
              <TextInput
                styles={labelStyles}
                label="Amount of occurrences"
                placeholder="Fill in the amount of occurrences"
                withAsterisk
                {...form.getInputProps(
                  `step4.hcpQuestionnaires.${index}.occurrencesAmount`
                )}
              />
              <TextInput
                styles={labelStyles}
                label="Days to collect data"
                placeholder="Fill the number of days"
                withAsterisk
                {...form.getInputProps(
                  `step4.hcpQuestionnaires.${index}.numberOfDays`
                )}
              />
            </Flex>
          </Paper>
        )
      )}
    </Flex>
  );
};

export default AddStudyHCPQuestionnairesStep;
