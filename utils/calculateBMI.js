const calculateBMI = (weight, weightUnit, height, heightUnit) => {
  let bmi = "";
  let bmiCategory = "";

  if (!weight || !weightUnit || !height || !heightUnit)
    return { bmi, bmiCategory };

  let weightInKg = weight;

  if (weightUnit === "pound") {
    weightInKg = (weight * 0.454).toFixed(2);
  }

  let heightInMeters = height / 100;

  if (heightUnit === "inch") {
    heightInMeters = (height * 0.0254).toFixed(2);
  }

  bmi = (weightInKg / heightInMeters ** 2).toFixed(2);

  if (bmi < 18.5) {
    bmiCategory = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    bmiCategory = "Healthy Weight";
  } else if (bmi >= 25 && bmi < 30) {
    bmiCategory = "Overweight";
  } else {
    bmiCategory = "Obese";
  }

  return { bmi, bmiCategory };
};

export default calculateBMI;
