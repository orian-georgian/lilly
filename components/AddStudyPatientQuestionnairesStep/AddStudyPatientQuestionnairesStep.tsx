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

import {
  RecurrencePatterns,
  QuestionnaireFrequencies,
  YesNo,
} from "@lilly/constants";
import { RecurrencePattern } from "@lilly/constants/recurrence-patterns";
import { QuestionnaireFrequency } from "@lilly/constants/questionnaire-frequencies";
import { StudyQuestionnaireForm } from "@lilly/types";

interface AddStudyPatientQuestionnairesStepProps {
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

const AddStudyPatientQuestionnairesStep: FunctionComponent<
  AddStudyPatientQuestionnairesStepProps
> = ({ form }) => {
  const { patientQuestionnaires } = form.values.step5;

  const handleAddQuestionnaire = (): void => {
    form.insertListItem("step5.patientQuestionnaires", {
      questionnaire: null,
      recurrencePattern: RecurrencePattern.Weekly,
      frequency: QuestionnaireFrequency.EveryFourWeeks,
      occurrencesAmount: null,
      numberOfDays: null,
    });
  };

  const handleRemoveQuestionnaire = (index: number) => (): void => {
    form.removeListItem("step5.patientQuestionnaires", index);
  };

  return (
    <Flex direction="column" gap="lg">
      <Flex gap="md" align="center" justify="space-between">
        <Text fw={500}>Patient Questionnaires</Text>
        <Button
          variant="outline"
          color="lilly-red"
          onClick={handleAddQuestionnaire}
        >
          Add a questionnaire
        </Button>
      </Flex>
      {patientQuestionnaires.map(
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
                {patientQuestionnaires.length > 1 && (
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
                  `step5.patientQuestionnaires.${index}.questionnaire`
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
                  `step5.patientQuestionnaires.${index}.recurrencePattern`
                )}
              />
              <Select
                styles={labelStyles}
                label="Frequency"
                placeholder="Select a Frequency"
                withAsterisk
                data={QuestionnaireFrequencies}
                {...form.getInputProps(
                  `step5.patientQuestionnaires.${index}.frequency`
                )}
              />
              <TextInput
                styles={labelStyles}
                label="Amount of occurrences"
                placeholder="Fill in the amount of occurrences"
                withAsterisk
                {...form.getInputProps(
                  `step5.patientQuestionnaires.${index}.occurrencesAmount`
                )}
              />
              <TextInput
                styles={labelStyles}
                label="Days to collect data"
                placeholder="Fill the number of days"
                withAsterisk
                {...form.getInputProps(
                  `step5.patientQuestionnaires.${index}.numberOfDays`
                )}
              />
              <Select
                styles={labelStyles}
                label="Mandatory"
                placeholder="Is the questionnaire mandatory"
                withAsterisk
                data={YesNo.List}
                {...form.getInputProps(
                  `step5.patientQuestionnaires.${index}.mandatory`
                )}
              />
            </Flex>
          </Paper>
        )
      )}
    </Flex>
  );
};

export default AddStudyPatientQuestionnairesStep;
