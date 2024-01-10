const statusesEnum = {
  Never: "1",
  Current: "2",
  Former: "3",
};

const list = [
  { value: statusesEnum.Never, label: "Never" },
  { value: statusesEnum.Current, label: "Current" },
  { value: statusesEnum.Former, label: "Former" },
];

const SmokingStatuses = { 
  Enum: statusesEnum,
  List: list,
};

export default SmokingStatuses;
