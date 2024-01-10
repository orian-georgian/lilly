const unitsEnum = {
  // units for weight
  KG: "kg",
  POUND: "pound",

  // units for height
  CM: "cm",
  INCH: "inch",
};

const weightUnitsList = [
  { label: unitsEnum.KG, value: unitsEnum.KG },
  { label: unitsEnum.POUND, value: unitsEnum.POUND },
];

const heightUnitList = [
  { value: unitsEnum.CM, label: unitsEnum.CM },
  { value: unitsEnum.INCH, label: "Inch" },
];

const Units = {
  Enum: unitsEnum,
  Weight: weightUnitsList,
  Height: heightUnitList,
};

export default Units;
