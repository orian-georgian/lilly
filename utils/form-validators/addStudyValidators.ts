import { isNotEmpty } from "@mantine/form";

const addStudyValidators = {
  step1: {
    code: isNotEmpty("Enter a study code"),
    title: isNotEmpty("Enter a study title"),
    disease: isNotEmpty("Select a disease"),
    startDate: isNotEmpty("Select a date"),
    endDate: isNotEmpty("Select a date"),
    patientsTotal: isNotEmpty("Enter the total number of patients"),
    papers: isNotEmpty("Enter papers information"),
  },
};

export default addStudyValidators;
