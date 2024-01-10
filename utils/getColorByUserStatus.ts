import { UserStatusesEnum } from "@lilly/constants/user-statuses";
import { ColorsEnum } from "@lilly/constants";

const getColorByUserStatus = (status: UserStatusesEnum): string => {
  let color: string;

  switch (status) {
    case UserStatusesEnum.Active:
      color = ColorsEnum.Green;
      break;
    case UserStatusesEnum.Inactive:
      color = ColorsEnum.LillyRed;
      break;
    case UserStatusesEnum.Created:
      color = ColorsEnum.Yellow;
      break;
    default:
      color = ColorsEnum.Gray;
  }

  return color;
};

export default getColorByUserStatus;
