import Image from "next/image";
import Link from "next/link";
import {
  Flex,
  NavLink,
  Avatar,
  Indicator,
  UnstyledButton,
} from "@mantine/core";
import {
  MdOutlineSpaceDashboard,
  MdOutlineSupervisorAccount,
  MdOutlineSettings,
  MdLogout,
  MdOutlineMenu,
  MdOutlineQuestionAnswer,
} from "react-icons/md";
import { LiaHospital } from "react-icons/lia";
import { UserTypesEnum } from "@lilly/constants/user-types";
import { useRouter } from "next/router";
import { useAuth } from "react-oidc-context";

const navList = [
  {
    label: "Dashboard",
    path: "/",
    Icon: MdOutlineSpaceDashboard,
    userTypes: [UserTypesEnum.HCP, UserTypesEnum.Patient],
  },
  {
    label: "Disease Management",
    path: "/disease-management",
    Icon: MdOutlineMenu,
    userTypes: [UserTypesEnum.LillyAdmin],
  },
  {
    label: "Questionnaire Management",
    path: "/questionnaire-management",
    Icon: MdOutlineQuestionAnswer,
    userTypes: [UserTypesEnum.LillyAdmin],
  },
  {
    label: "User Management",
    path: "/user-management",
    Icon: MdOutlineSupervisorAccount,
    userTypes: [UserTypesEnum.LillyAdmin],
  },
  {
    label: "Study Management",
    path: "/study-management",
    Icon: MdOutlineMenu,
    userTypes: [UserTypesEnum.LillyAdmin],
  },
  {
    label: "Parameter Management",
    path: "/parameter-management",
    Icon: MdOutlineMenu,
    userTypes: [UserTypesEnum.LillyAdmin],
  },
];

export default function SideBar() {
  const { pathname } = useRouter();

  const { signoutRedirect, user } = useAuth();

  const navListForUser = navList.filter(({ userTypes }) =>
    userTypes.includes(user?.profile?.userType)
  );

  return (
    <Flex
      className="lilly-sidebar h-100 overflow-auto"
      direction="column"
      gap={24}
    >
      <Flex
        className="hidden-on-mobile"
        justify="center"
        pt="lg"
        pl="lg"
        pr="lg"
      >
        <Image
          width={120}
          height={50}
          src="/images/logo.png"
          alt="Lilly logo"
        />
      </Flex>
      <Flex direction="column" align="center" gap={8} pl="lg" pr="lg">
        {navListForUser.map(({ label, path, Icon }) => (
          <Link
            className="w-100"
            key={path}
            href={path}
            passHref
            legacyBehavior
          >
            <NavLink
              className={`lilly-nav-link ${
                pathname === path ? "selected" : "unselected"
              }`}
              label={label}
              active={pathname === path}
              color="lilly-red"
              leftSection={<Icon size={17} />}
            />
          </Link>
        ))}
      </Flex>
      <Flex
        className="m-t-auto lilly-sidebar__user-section"
        direction="column"
        gap={8}
        p="lg"
      >
        <Link
          className="w-100"
          key="/settings"
          href="/settings"
          passHref
          legacyBehavior
        >
          <NavLink
            className={`lilly-nav-link ${
              pathname === "/settings" ? "selected" : "unselected"
            }`}
            label="Settings"
            active={pathname === "/settings"}
            color="lilly-red"
            leftSection={<MdOutlineSettings size={17} />}
          />
        </Link>
        <Link
          className="w-100"
          key="/profile"
          href="/profile"
          passHref
          legacyBehavior
        >
          <Flex align="center" gap={10}>
            <NavLink
              className={`lilly-nav-link ${
                pathname === "/profile" ? "selected" : "unselected"
              }`}
              label="Logged in as"
              description={user?.profile?.name}
              active={pathname === "/profile"}
              color="lilly-red"
              p="xs"
              leftSection={
                <Indicator
                  color="green"
                  position="bottom-end"
                  size={12}
                  offset={5}
                  withBorder
                >
                  <Avatar w={40} h={40} src="images/avatar.png" />
                </Indicator>
              }
            />
            <UnstyledButton className="m-l-auto" onClick={signoutRedirect}>
              <MdLogout />
            </UnstyledButton>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
}
