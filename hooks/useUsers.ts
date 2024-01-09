import { useState, useEffect, ChangeEvent } from "react";
import { User } from "@lilly/types";
import { UserTypesEnum } from "@lilly/constants/user-types";
import { UserStatusesEnum } from "@lilly/constants/user-statuses";

const usersList: User[] = [
  {
    userId: "133453",
    email: "john.doe@fujitsu.com",
    userType: UserTypesEnum.HCP,
    startDate: "30/12/23",
    endDate: "30/12/24",
    status: UserStatusesEnum.Inactive,
    hasWarnings: false,
  },
  {
    userId: "243242",
    email: "mail@address.com",
    userType: UserTypesEnum.Patient,
    startDate: "30/12/23",
    endDate: "30/12/24",
    status: UserStatusesEnum.Inactive,
    hasWarnings: false,
  },
  {
    userId: "345344",
    email: "papa.lu@fujitsu.com",
    userType: UserTypesEnum.Patient,
    startDate: "30/12/23",
    endDate: "30/12/24",
    status: UserStatusesEnum.Created,
    hasWarnings: false,
  },
  {
    userId: "456545",
    email: "mail@address.com",
    userType: UserTypesEnum.LillyAdmin,
    startDate: "30/12/23",
    endDate: "30/12/24",
    status: UserStatusesEnum.Created,
    hasWarnings: false,
  },
  {
    userId: "434343",
    email: "mia.dan@fujitsu.com",
    userType: UserTypesEnum.LillyCore,
    startDate: "30/12/23",
    endDate: "30/12/24",
    status: UserStatusesEnum.Active,
    hasWarnings: false,
  },
  {
    userId: "555555",
    email: "mail@address.com",
    userType: UserTypesEnum.Patient,
    startDate: "30/12/23",
    endDate: "30/12/24",
    status: UserStatusesEnum.Active,
    hasWarnings: false,
  },
  {
    userId: "666666",
    email: "mail@address.com",
    userType: UserTypesEnum.Patient,
    startDate: "30/12/23",
    endDate: "30/12/24",
    status: UserStatusesEnum.Active,
    hasWarnings: true,
  },
  {
    userId: "777777",
    email: "mail@address.com",
    userType: UserTypesEnum.Patient,
    startDate: "30/12/23",
    endDate: "30/12/24",
    status: UserStatusesEnum.Active,
    hasWarnings: true,
  },
  {
    userId: "888888",
    email: "mail@address.com",
    userType: UserTypesEnum.Patient,
    startDate: "30/12/23",
    endDate: "30/12/24",
    status: UserStatusesEnum.Active,
    hasWarnings: true,
  },
  {
    userId: "900000",
    email: "mail@address.com",
    userType: UserTypesEnum.HCP,
    startDate: "30/12/23",
    endDate: "30/12/24",
    status: UserStatusesEnum.Active,
    hasWarnings: true,
  },
  {
    userId: "910000",
    email: "mail@address.com",
    userType: UserTypesEnum.HCP,
    startDate: "30/12/23",
    endDate: "30/12/24",
    status: UserStatusesEnum.Active,
    hasWarnings: false,
  },
  {
    userId: "920000",
    email: "mail@address.com",
    userType: UserTypesEnum.HCP,
    startDate: "30/12/23",
    endDate: "30/12/24",
    status: UserStatusesEnum.Active,
    hasWarnings: false,
  },
  {
    userId: "930000",
    email: "mail@address.com",
    userType: UserTypesEnum.HCP,
    startDate: "30/12/23",
    endDate: "30/12/24",
    status: UserStatusesEnum.Active,
    hasWarnings: false,
  },
  {
    userId: "940000",
    email: "mail@address.com",
    userType: UserTypesEnum.HCP,
    startDate: "30/12/23",
    endDate: "30/12/24",
    status: UserStatusesEnum.Active,
    hasWarnings: false,
  },
  {
    userId: "950000",
    email: "mail@address.com",
    userType: UserTypesEnum.HCP,
    startDate: "30/12/23",
    endDate: "30/12/24",
    status: UserStatusesEnum.Active,
    hasWarnings: false,
  },
  {
    userId: "960000",
    email: "mail@address.com",
    userType: UserTypesEnum.HCP,
    startDate: "30/12/23",
    endDate: "30/12/24",
    status: UserStatusesEnum.Active,
    hasWarnings: false,
  },
];

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadUsers = async (): Promise<User[]> => {
    return new Promise<User[]>((resolve) => {
      setTimeout(() => {
        resolve(usersList);
      }, 1000);
    });
  };

  const filterUsers = (query: string | null): void => {
    setUsers(() =>
      usersList.filter(({ email, userId }) =>
        !!query
          ? email.indexOf(query) !== -1 || userId.indexOf(query) !== -1
          : true
      )
    );
  };

  const filterByType = (type: string | null): void => {
    setUsers(() =>
      usersList.filter(({ userType }) => (!!type ? userType === type : true))
    );
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const users = await loadUsers();
        setUsers(users);
      } catch {
        console.error("Oups! Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    users,
    isLoading,
    filterUsers,
    filterByType,
  };
};

export default useUsers;
