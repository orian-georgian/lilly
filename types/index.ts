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

export type BtsDMARDUsed = {
  key: string;
  treatment: Array<string | number>;
  start: Date;
  end: Date;
};

export type Exercise = {
  value: string;
  label: string;
  description: string;
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
