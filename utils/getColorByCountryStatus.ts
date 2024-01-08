import { CountryStatuses } from "@lilly/constants";

const getColorByCountryStatus = (status: string): string => {
  let color = null;

  switch (status) {
    case CountryStatuses.Enum.Enrolling:
      color = "green";
      break;
    default:
      color = "gray";
  }

  return color;
};

export default getColorByCountryStatus;
