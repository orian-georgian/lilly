import { UserTypesEnum } from "@lilly/constants/user-types";
import { UserStatusesEnum } from "@lilly/constants/user-statuses";
import { RecurrencePattern } from "@lilly/constants/recurrence-patterns";
import { QuestionnaireFrequency } from "@lilly/constants/questionnaire-frequencies";

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
  loading?: boolean;
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

export type StudyQuestionnaireForm = {
  //To be change to the actual questionnaire type when available
  questionnaire: any;
  recurrencePattern: RecurrencePattern;
  frequency: QuestionnaireFrequency;
  occurrencesAmount: string | null;
  numberOfDays: string | null;
  mandatory?: string | null;
};

export type User = {
  userId: string;
  email: string;
  userType: UserTypesEnum;
  startDate: string;
  endDate: string;
  status: UserStatusesEnum;
  hasWarnings: boolean;
  studies?: Array<any>;
};

export type Study = {
  id: string;
  code: string;
  title: string;
  description: string;
  disease: string;
  startDate: string;
  endDate: string;
  patientsTotal: string;
  papers: string;
  projectManager: string;
  valueLead: string;
  medicalLead: string;
  dataManager: string;
  locations: Array<any>;
  hcpQuestionnaires: Array<StudyQuestionnaireForm>;
  patientQuestionnaires: Array<StudyQuestionnaireForm>;
};
