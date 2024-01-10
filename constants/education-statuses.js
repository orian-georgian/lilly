const statusesEnum = {
  NoFormal: "23",
  MinMandatory: "38",
  MoreThanMinMandatory: "44",
  University: "26",
};

const list = [
  { value: statusesEnum.NoFormal, label: "No formal education" },
  {
    value: statusesEnum.MinMandatory,
    label: "Minimum Mandatory required level of education",
  },
  {
    value: statusesEnum.MoreThanMinMandatory,
    label:
      "More than minimum mandatory required but less than university education",
  },
  { value: statusesEnum.University, label: "University Education" },
];

const EducationStatuses = {
  Enum: statusesEnum,
  List: list,
};

export default EducationStatuses;
