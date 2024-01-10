import { isNotEmpty, isEmail } from "@mantine/form";

const newPatientValidators = {
  step1: {
    study: isNotEmpty("Select a study"),
    country: isNotEmpty("Select a country"),
    disease: isNotEmpty("Select a disease"),
    prescribedAt: isNotEmpty("Select a date"),
  },
  step2: {
    email: (value: string) =>
      isNotEmpty("Enter an email")(value) ??
      isEmail("Invalid Email Address")(value) ??
      null,
    nationality: isNotEmpty("Select a nationality"),
    language: isNotEmpty("Select a language"),
    dob: isNotEmpty("Select a date"),
    weight: isNotEmpty("Enter a weight"),
    height: isNotEmpty("Enter a height"),
  },
  step3: {
    sex: isNotEmpty("Select a sex"),
    primaryEmployment: isNotEmpty("Select a primary employment"),
    educationStatus: isNotEmpty("Select a education status"),
    smokingStatus: isNotEmpty("Select a smoking status"),
    diagnosisDate: isNotEmpty("Select a date"),
  },
  step4: {
    csDMARDUsed: isNotEmpty("Select at least one csDMARD"),
    btsDMARDUsed: {
      treatment: isNotEmpty("Select a treatment"),
      start: isNotEmpty("Select a date"),
      end: isNotEmpty("Select a date"),
    },
  },
  step5: {
    csDMARDBaseline: isNotEmpty("Select at least one baseline csDMARD"),
    corticosteroidBaseline: isNotEmpty(
      "Select at least one baseline corticosteroid"
    ),
    btsDMARDBaseline: {
      treatment: isNotEmpty("Select a treatment"),
      start: isNotEmpty("Select a date"),
      end: isNotEmpty("Select a date"),
    },
  },
  step6: {
    cdai: {
      score: isNotEmpty("Enter a score"),
    },
  },
  step7: {
    dapsa: {
      score: isNotEmpty("Enter a score"),
    },
  },
  step8: {
    walking: isNotEmpty("Select a choice"),
    stretching: isNotEmpty("Select a choice"),
    flowingMovements: isNotEmpty("Select a choice"),
    workingOutInWater: isNotEmpty("Select a choice"),
    cycling: isNotEmpty("Select a choice"),
    strengthTraining: isNotEmpty("Select a choice"),
    handExercise: isNotEmpty("Select a choice"),
    dietaryIntake: isNotEmpty("Select a dietary intake"),
  },
  step9: {
    sleepTrouble: isNotEmpty("Select a sleep disturbance"),
    nightWakeUp: isNotEmpty("Select a sleep disturbance"),
    troubleStayingSleep: isNotEmpty("Select a sleep disturbance"),
    feelingTired: isNotEmpty("Select a sleep disturbance"),
  },
};

export default newPatientValidators;
