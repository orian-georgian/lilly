import { ColorsEnum, PatientDataStatuses } from "@lilly/constants";

const getColorByPatientDataStatus = (status) => {
  let color = null;

  switch (status) {
    case PatientDataStatuses.Enum.NoIssues:
      color = ColorsEnum.Green;
      break;
    case PatientDataStatuses.Enum.MissingData:
      color = ColorsEnum.LillyRed;
      break;
    case PatientDataStatuses.Enum.DelayInData:
      color = ColorsEnum.Yellow;
      break;
    default:
      color = ColorsEnum.Gray;
  }

  return color;
};

export default getColorByPatientDataStatus;
