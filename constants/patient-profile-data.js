const profileDataEnum = {
  DemographicData: "demographicData",
  Email: "email",
  Nationality: "nationality",
  Language: "language",
  DateOfBirth: "dateOfBirth",
  Gender: "gender",
  Weight: "weight",
  Height: "height",
  BMI: "bmi",
  PrimaryEmployment: "primaryEmployment",
  EducationStatus: "educationStatus",
  SmokingStatus: "smokingStatus",
  DiagnosisDate: "diagnosisDate",
  StudyData: "studyData",
  Study: "study",
  Disease: "disease",
  TreatmentPrescribesDate: "treatmentPrescribesDate",
  Country: "country",
  MedicationHistory: "medicationHistory",
  BtsdmardUsed: "btsDMARDUsed",
  CsdmardUsed: "csDMARDUsed",
  BaselineMedication: "baselineMedication",
  BtsdmardBaseline: "btsDMARDBaseline",
  CsdmardBaseline: "csDMARDBaseline",
  CorticosteroidBaseline: "corticosteroidBaseline",
  WellnessData: "wellnessData",
  Walking: "walking",
  Stretching: "stretching",
  FlowingMovements: "flowingMovements",
  WorkingOutInWater: "workingOutInWater",
  Cycling: "cycling",
  StrengthTraining: "strengthTraining",
  HandExercise: "handExercise",
  Dietary: "dietary",
  SleepTrouble: "sleepTrouble",
  NightWakeUp: "nightWakeUp",
  TroubleStayingSleep: "troubleStayingSleep",
  FeelingTired: "feelingTired",
};

const list = [
  {
    value: profileDataEnum.DemographicData,
    label: "Demographic Data",
  },
  {
    value: profileDataEnum.Email,
    label: "E-Mail Address",
  },
  {
    value: profileDataEnum.Nationality,
    label: "Nationality",
  },
  {
    value: profileDataEnum.Language,
    label: "Language",
  },
  {
    value: profileDataEnum.DateOfBirth,
    label: "Date of Birth",
  },
  {
    value: profileDataEnum.Gender,
    label: "Gender",
  },
  {
    value: profileDataEnum.Weight,
    label: "Weight",
  },
  {
    value: profileDataEnum.Height,
    label: "Height",
  },
  {
    value: profileDataEnum.BMI,
    label: "BMI",
  },
  {
    value: profileDataEnum.PrimaryEmployment,
    label: "Primary Employment",
  },
  {
    value: profileDataEnum.EducationStatus,
    label: "Education Status",
  },
  {
    value: profileDataEnum.SmokingStatus,
    label: "Smoking Status",
  },
  {
    value: profileDataEnum.DiagnosisDate,
    label: "Disease Diagnosis Date",
  },
  {
    value: profileDataEnum.StudyData,
    label: "Study Data",
  },
  {
    value: profileDataEnum.Study,
    label: "Study",
  },
  {
    value: profileDataEnum.Disease,
    label: "Disease",
  },
  {
    value: profileDataEnum.TreatmentPrescribesDate,
    label: "Treatment Prescribes Date",
  },
  {
    value: profileDataEnum.Country,
    label: "Country/Region/Site",
  },
  {
    value: profileDataEnum.MedicationHistory,
    label: "Medication History",
  },
  {
    value: profileDataEnum.BtsdmardUsed,
    label: "b/tsDMARD previously used",
  },
  {
    value: profileDataEnum.CsdmardUsed,
    label: "csDMARD previously used",
  },
  {
    value: profileDataEnum.BaselineMedication,
    label: "Baseline Medication",
  },
  {
    value: profileDataEnum.BtsdmardBaseline,
    label: "b/tsDMARD at Baseline",
  },
  {
    value: profileDataEnum.CsdmardBaseline,
    label: "csDMARD at Baseline",
  },
  {
    value: profileDataEnum.CorticosteroidBaseline,
    label: "Corticosteroid at Baseline",
  },
  {
    value: profileDataEnum.WellnessData,
    label: "Wellness Data",
  },
  {
    value: profileDataEnum.Walking,
    label: "Walking",
  },
  {
    value: profileDataEnum.Stretching,
    label: "Stretching",
  },
  {
    value: profileDataEnum.FlowingMovements,
    label: "Flowing Movements",
  },
  {
    value: profileDataEnum.WorkingOutInWater,
    label: "Working out in Water",
  },
  {
    value: profileDataEnum.Cycling,
    label: "Cycling",
  },
  {
    value: profileDataEnum.StrengthTraining,
    label: "Strength Training",
  },
  {
    value: profileDataEnum.HandExercise,
    label: "Hand Exercise",
  },
  {
    value: profileDataEnum.Dietary,
    label: "Dietary",
  },
  {
    value: profileDataEnum.SleepTrouble,
    label: "Have trouble falling asleep?",
  },
  {
    value: profileDataEnum.NightWakeUp,
    label: "Wake up several times per night?",
  },
  {
    value: profileDataEnum.TroubleStayingSleep,
    label: "Have trouble staying asleep (including waking far away too early)?",
  },
  {
    value: profileDataEnum.FeelingTired,
    label:
      "Wake up after your usual amount of sleep feeling tired and worn out?",
  },
];

const PatientProfileData = {
  Enum: profileDataEnum,
  List: list,
};

export default PatientProfileData;
