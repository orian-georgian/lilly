import { isNotEmpty, hasLength } from "@mantine/form";

const addVisitValidators = {
  step1: {
    visitType: isNotEmpty("Select a visit type"),
    baselineTreatment: isNotEmpty("Select an answer"),
    whyNot: isNotEmpty("Select an answer"),
  },
  step2: {
    diseaseActivities: hasLength({ min: 2 }, "Add a least 3 items"),
  },
};

export default addVisitValidators;
