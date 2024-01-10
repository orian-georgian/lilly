const enums = {
  Yes: "Y",
  No: "N",
};

const list = [
  { value: enums.Yes, label: "Yes" },
  { value: enums.No, label: "No" },
];

const YesNo = {
  Enum: enums,
  List: list,
};

export default YesNo;
