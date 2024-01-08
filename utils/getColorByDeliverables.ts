import { ColorsEnum } from "@lilly/constants";

const getColorByDeliverables = (value: number): string => {
  if (value >= 4) {
    return ColorsEnum.Green;
  } else if (value === 3) {
    return ColorsEnum.Yellow;
  } else if (value === 1 || value === 2) {
    return ColorsEnum.LillyRed;
  }

  return ColorsEnum.Gray;
};

export default getColorByDeliverables;
