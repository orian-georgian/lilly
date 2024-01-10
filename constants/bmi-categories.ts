const categoriesEnum = {
  Under: "underWeight",
  Healthy: "healthyWeight",
  Over: "overWeight",
  Obese: "obese",
};

const list = [
  { value: categoriesEnum.Under, label: "Underweight" },
  { value: categoriesEnum.Healthy, label: "Healthy Weight" },
  { value: categoriesEnum.Over, label: "Overweight" },
  { value: categoriesEnum.Obese, label: "Obese" },
];

const BmiCategories = {
  Enum: categoriesEnum,
  List: list,
};

export default BmiCategories;
