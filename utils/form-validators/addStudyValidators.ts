import { isNotEmpty, hasLength, matches } from "@mantine/form";

const addStudyValidators = {
  step1: {
    code: isNotEmpty("Enter a study code"),
    title: isNotEmpty("Enter a study title"),
    disease: isNotEmpty("Select a disease"),
    startDate: isNotEmpty("Select a date"),
    endDate: isNotEmpty("Select a date"),
    patientsTotal: matches(/^[1-9]\d*$/, "Enter a valid number"),
    papers: isNotEmpty("Enter papers information"),
  },
  step2: {
    projectManager: isNotEmpty("Enter a person"),
    valueLead: isNotEmpty("Enter a person"),
    medicalLead: isNotEmpty("Enter a person"),
    dataManager: isNotEmpty("Enter a person"),
  },
  step3: {
    locations: hasLength({ min: 1 }, "Add at least one location"),
  },
  step4: {
    hcpQuestionnaires: {
      questionnaire: isNotEmpty("Select a questionnaire"),
      recurrencePattern: isNotEmpty("Select a recurrence pattern"),
      frequency: isNotEmpty("Select a frequency"),
      occurrencesAmount: matches(/^[1-9]\d*$/, "Enter a valid number"),
      numberOfDays: matches(/^[1-9]\d*$/, "Enter a valid number"),
    },
  },
  step5: {
    patientQuestionnaires: {
      questionnaire: isNotEmpty("Select a questionnaire"),
      recurrencePattern: isNotEmpty("Select a recurrence pattern"),
      frequency: isNotEmpty("Select a frequency"),
      occurrencesAmount: matches(/^[1-9]\d*$/, "Enter a valid number"),
      numberOfDays: matches(/^[1-9]\d*$/, "Enter a valid number"),
      mandatory: isNotEmpty("Select an answer"),
    },
  },
};

export default addStudyValidators;
