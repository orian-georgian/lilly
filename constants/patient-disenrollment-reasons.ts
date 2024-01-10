const reasonEnums = {
  MedicalDecision: "medical-decision",
  PatientDecision: "patient-decision",
};

const list = [
  { value: reasonEnums.MedicalDecision, label: "MedicalDecision" },
  { value: reasonEnums.PatientDecision, label: "Patient Decision" },
];

const PatientDisEnrollmentReasons = {
  Enum: reasonEnums,
  List: list,
};

export default PatientDisEnrollmentReasons;
