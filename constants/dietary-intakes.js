const intakesEnum = {
  High: "high",
  Moderate: "moderate",
  LowToModerate: "lowToModerate",
  Low: "low",
};

const list = [
  { value: intakesEnum.High, label: "High intake" },
  { value: intakesEnum.Moderate, label: "Moderate intake" },
  { value: intakesEnum.LowToModerate, label: "Low-to-moderate intake" },
  { value: intakesEnum.Low, label: "Low intake" },
];

const DietaryIntakes = {
  Enum: intakesEnum,
  List: list,
};

export default DietaryIntakes;
