import { ColorsEnum } from "@lilly/constants";

const getColorByPercentage = (value: number): string => {
  if (value <= 20) {
    return ColorsEnum.LillyRed;
  } else if (value > 20 && value < 70) {
    return ColorsEnum.Yellow;
  } else if (value >= 70) {
    return ColorsEnum.Green;
  }

  return ColorsEnum.Gray;
};

export default getColorByPercentage;
