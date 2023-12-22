const statusesEnum = {
  Active: "active",
  Created: "created",
  Inactive: "inactive",
};

const list = [
  {
    value: statusesEnum.Active,
    label: "Active",
  },
  {
    value: statusesEnum.Created,
    label: "Created",
  },
  {
    value: statusesEnum.Inactive,
    label: "Inactive",
  },
];

const PatientStatuses = {
  Enum: statusesEnum,
  List: list,
};

export default PatientStatuses;
