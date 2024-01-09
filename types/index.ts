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

export type Study = {
  code: string;
  title: string;
  disease: string;
  medicalLead: string;
  numberOfLocations: number;
  startDate: string | Date;
  endDate: string | Date;
  totalPatients: number;
  papers: number;
  hpcQuestionnaires: number;
  patientQuestionnaires: number;
};
