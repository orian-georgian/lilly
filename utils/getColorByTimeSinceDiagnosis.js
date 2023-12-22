import { ColorsEnum } from "@lilly/constants";

const getColorByTimeSinceDiagnosis = (value) => {
  if (value <= 2) {
    return ColorsEnum.Green;
  } else if (value > 2 && value < 5) {
    return ColorsEnum.Yellow;
  } else if (value >= 5) {
    return ColorsEnum.LillyRed;
  }

  return ColorsEnum.Gray;
};

export default getColorByTimeSinceDiagnosis;
