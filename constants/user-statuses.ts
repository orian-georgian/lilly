export enum UserStatusesEnum {
  Active = "active",
  Created = "created",
  Inactive = "inactive",
}

export const UserStatusesList = [
  {
    value: UserStatusesEnum.Active,
    label: "Active",
  },
  {
    value: UserStatusesEnum.Created,
    label: "Created",
  },
  {
    value: UserStatusesEnum.Inactive,
    label: "Inactive",
  },
];

const UserStatuses = {
  Enum: UserStatusesEnum,
  List: UserStatusesList,
};

export default UserStatuses;
