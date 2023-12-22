const statusesEnum = {
  MissingData: "missing-data",
  DelayInData: "delay-in-data",
  NoIssues: "no-issues",
};

const list = [
  {
    value: statusesEnum.MissingData,
    label: "Missing Data",
  },
  {
    value: statusesEnum.DelayInData,
    label: "Delay in Data",
  },
  {
    value: statusesEnum.NoIssues,
    label: "No issues",
  },
];

const PatientDataStatuses = {
  Enum: statusesEnum,
  List: list,
};

export default PatientDataStatuses;
