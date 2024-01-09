import {
  Paper,
  Flex,
  Text,
  Grid,
  TextInput,
  Select,
  Badge,
  Button,
  Divider,
  ActionIcon,
  LoadingOverlay,
} from "@mantine/core";
import { DataTable } from "mantine-datatable";

import { FunctionComponent, ReactNode, ChangeEvent } from "react";
import { IoIosSearch } from "react-icons/io";
import { SlPencil } from "react-icons/sl";
import { AiOutlineDelete } from "react-icons/ai";
import { VscSend } from "react-icons/vsc";
import { CiCircleCheck } from "react-icons/ci";
import { LiaBanSolid } from "react-icons/lia";
import { MdInfo } from "react-icons/md";

import { useUsers } from "@lilly/hooks";
import { getColorByUserStatus, debounce } from "@lilly/utils";
import {
  UserStatusesList,
  UserStatusesEnum,
} from "@lilly/constants/user-statuses";
import { UserTypesList } from "@lilly/constants/user-types";

import { User } from "@lilly/types";

interface UsersWidgetProps {}

const UsersWidget: FunctionComponent<UsersWidgetProps> = () => {
  const { users, isLoading, filterByType, filterUsers } = useUsers();

  const handleTypeChange = (value: string | null): void => {
    if (filterByType) {
      filterByType(value);
    }
  };

  const handleFilterUsers = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    if (filterUsers) {
      filterUsers(value);
    }
  };

  const debouncedHandleFilterUsers = debounce(handleFilterUsers, 300);

  const renderStatus = ({ status }: User): ReactNode => {
    if (status === UserStatusesEnum.Inactive) {
      return (
        <ActionIcon size="md" variant="subtle" color="green">
          <CiCircleCheck size={20} />
        </ActionIcon>
      );
    }
    return (
      <ActionIcon
        size="md"
        variant="subtle"
        color={
          status === UserStatusesEnum.Active
            ? "lilly-red"
            : "var(--mantine-color-gray-4)"
        }
      >
        <LiaBanSolid size={20} />
      </ActionIcon>
    );
  };

  const renderCurrentStatus = ({ status }: User): ReactNode => (
    <Badge
      variant="outline"
      color={getColorByUserStatus(status)}
      size="md"
      radius="sm"
      fullWidth
    >
      {UserStatusesList?.find((uStatus) => uStatus.value === status)?.label}
    </Badge>
  );

  const renderUserId = ({ userId, hasWarnings }: User): ReactNode => (
    <Flex align="center" gap="xs">
      {hasWarnings && (
        <MdInfo size={20} color={`var(--mantine-color-lilly-red-7)`} />
      )}
      <Text>{userId}</Text>
    </Flex>
  );

  return (
    <Paper shadow="lg" p="lg" radius="lg" pos="relative" withBorder>
      <LoadingOverlay
        visible={isLoading}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 1 }}
        loaderProps={{ color: "lilly-red" }}
      />
      <Grid align="flex-end">
        <Grid.Col className="align-self-center" span="auto">
          <Text fw={500}>{`${users.length} ${
            users.length === 1 ? "User" : "Users"
          }`}</Text>
        </Grid.Col>
        <Grid.Col
          span={{ xs: 12, sm: 6, md: 3, lg: 3 }}
          order={{ base: 2, xs: 3, sm: 3 }}
        >
          <Select
            styles={{
              label: {
                fontWeight: 400,
              },
            }}
            clearable
            label="Filter User Type"
            placeholder="Select a user type"
            data={UserTypesList}
            onChange={handleTypeChange}
          />
        </Grid.Col>
        <Grid.Col
          span={{ xs: 12, sm: 6, md: 3, lg: 3 }}
          order={{ base: 3, xs: 4, sm: 4 }}
        >
          <TextInput
            placeholder="Search User"
            leftSection={<IoIosSearch size={20} />}
            onChange={debouncedHandleFilterUsers}
          />
        </Grid.Col>
        <Grid.Col
          className="align-self-end text-align-end"
          span="content"
          order={{ base: 4, xs: 2, sm: 2, md: 4, lg: 4 }}
        >
          <Button w={{ xs: "100%" }} variant="outline">
            Add User
          </Button>
        </Grid.Col>
      </Grid>

      <Divider my="xs" color="var(--mantine-color-red-2)" />
      <DataTable
        records={users}
        minHeight={200}
        columns={[
          {
            accessor: "userId",
            title: "User ID",
            sortable: true,
            render: renderUserId,
          },
          {
            accessor: "email",
            title: "E-Mail Address",
            sortable: true,
          },
          {
            accessor: "userType",
            title: "User Type",
            sortable: true,
            render: ({ userType }) =>
              UserTypesList?.find((uType) => uType.value === userType)?.label,
          },
          {
            accessor: "startDate",
            title: "Start Date",
          },
          {
            accessor: "endDate",
            title: "End Date",
          },
          {
            accessor: "status",
            title: "Current Status",
            render: renderCurrentStatus,
          },
          {
            accessor: "st",
            title: "Status",
            textAlign: "center",
            render: renderStatus,
          },
          {
            accessor: "del",
            title: "Delete",
            width: "0%",
            textAlign: "center",
            render: () => (
              <ActionIcon size="md" variant="subtle" color="lilly-red">
                <AiOutlineDelete size={20} />
              </ActionIcon>
            ),
          },
          {
            accessor: "inv",
            title: "Invite",
            width: "0%",
            textAlign: "center",
            render: () => (
              <ActionIcon size="md" variant="subtle" color="lilly-red">
                <VscSend size={20} />
              </ActionIcon>
            ),
          },
          {
            accessor: "ed",
            title: "Edit",
            width: "0%",
            textAlign: "center",
            render: () => (
              <ActionIcon size="md" variant="subtle" color="lilly-red">
                <SlPencil size={16} />
              </ActionIcon>
            ),
          },
        ]}
      />
    </Paper>
  );
};

export default UsersWidget;
