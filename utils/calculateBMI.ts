import { BmiCategories, Units } from "../constants";

interface BMICalculator {
  bmi: string | number;
  bmiCategory: string;
}

const calculateBMI = (
  weight: number,
  weightUnit: string,
  height: number,
  heightUnit: string
): BMICalculator => {
  let bmi: string | number = "";
  let bmiCategory: string = "";

  if (!weight || !weightUnit || !height || !heightUnit)
    return { bmi, bmiCategory };

  let weightInKg: number | string = weight;

  if (weightUnit === Units.Enum.POUND) {
    weightInKg = parseFloat((weight * 0.454).toFixed(2));
  }

  let heightInMeters = height / 100;

  if (heightUnit === Units.Enum.INCH) {
    heightInMeters = parseFloat((height * 0.0254).toFixed(2));
  }

  bmi = parseFloat((weightInKg / heightInMeters ** 2).toFixed(2));

  if (bmi < 18.5) {
    bmiCategory = BmiCategories.Enum.Under;
  } else if (bmi >= 18.5 && bmi < 25) {
    bmiCategory = BmiCategories.Enum.Healthy;
  } else if (bmi >= 25 && bmi < 30) {
    bmiCategory = BmiCategories.Enum.Over;
  } else {
    bmiCategory = BmiCategories.Enum.Obese;
  }

  return {
    bmi,
    bmiCategory:
      BmiCategories.List.find(({ value }) => value === bmiCategory)?.label ??
      "",
  };
};

export default calculateBMI;
