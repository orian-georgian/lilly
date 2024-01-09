import { UserTypesEnum } from "@lilly/constants/user-types";
import { UserStatusesEnum } from "@lilly/constants/user-statuses";

export type MantineForm = {
  values: object;
  getInputProps: (path: string) => object;
  validateField: (path: string) => {
    hasError: boolean;
    error: string;
  };
};

export type User = {
  userId: string;
  email: string;
  userType: UserTypesEnum;
  startDate: string | Date;
  endDate: string | Date;
  status: UserStatusesEnum;
  hasWarnings: boolean;
};
