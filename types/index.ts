import { UserTypesEnum } from "@lilly/constants/user-types";
import { UserStatusesEnum } from "@lilly/constants/user-statuses";

import { ReactNode, Ref } from "react";

type Position = "left" | "right" | "bottom" | "top";

export type MantineForm = {
  values: object;
  getInputProps: (path: string) => object;
  validateField: (path: string) => {
    hasError: boolean;
    error: string;
  };
};

export type DrawerFormRef = {
  open: () => void;
  close: () => void;
};

export type DrawerFormProps = {
  children: ReactNode;
  title: string;
  position?: Position;
  ref: Ref<DrawerFormRef>;
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
