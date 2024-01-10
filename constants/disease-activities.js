const activitiesEnum = {
  TenderJointCount: "jttnct",
  SwollenJointCount: "jtswct",
  PatientGlobal: "patientGlobal",
  HcpGlobal: "hcpGlobal",
  PatientPainVas: "patientPainVas",
  PatientGlobalDiseaseVas: "patientGlobalDiseaseVas",
  EvaluatorGlobalDiseaseVas: "evaluatorGlobalDiseaseVas",
};

const list = [
  { value: activitiesEnum.TenderJointCount, label: "Tender Joint Count" },
  { value: activitiesEnum.SwollenJointCount, label: "Swollen Joint Count" },
  { value: activitiesEnum.PatientGlobal, label: "PatientGlobal" },
  { value: activitiesEnum.HcpGlobal, label: "HCP Global" },
  {
    value: activitiesEnum.PatientPainVas,
    label: "Patient Pain Visual Analog Scale",
  },
  {
    value: activitiesEnum.PatientGlobalDiseaseVas,
    label: "Patient Global Disease Activity VAS",
  },
  {
    value: activitiesEnum.EvaluatorGlobalDiseaseVas,
    label: "Evaluator Global Disease Activity VAS",
  },
];

const DiseaseActivities = {
  Enum: activitiesEnum,
  List: list,
};

export default DiseaseActivities;
