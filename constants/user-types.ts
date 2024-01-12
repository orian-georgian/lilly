export enum UserTypesEnum {
  HCP = "HCP",
  Patient = "PATIENT",
  LillyCore = "LILLY_CORE",
  LillyAdmin = "PLATFORM_ADMIN",
}

export const UserTypesList = [
  {
    value: UserTypesEnum.HCP,
    label: "HCP",
  },
  {
    value: UserTypesEnum.Patient,
    label: "Patient",
  },
  {
    value: UserTypesEnum.LillyCore,
    label: "Lilly Core",
  },
  {
    value: UserTypesEnum.LillyAdmin,
    label: "Lilly Admin",
  },
];

const UserTypes = {
  Enum: UserTypesEnum,
  List: UserTypesList,
};

export default UserTypes;
