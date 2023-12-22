import { ColorsEnum, PatientStatuses } from "@lilly/constants";

const getColorByPatientStatus = (status) => {
  let color = null;

  switch (status) {
    case PatientStatuses.Enum.Active:
      color = ColorsEnum.Green;
      break;
    case PatientStatuses.Enum.Inactive:
      color = ColorsEnum.LillyRed;
      break;
    case PatientStatuses.Enum.Created:
      color = ColorsEnum.Yellow;
      break;
    default:
      color = ColorsEnum.Gray;
  }

  return color;
};

export default getColorByPatientStatus;
