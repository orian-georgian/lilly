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
} from "react-icons/md";
import { LiaHospital } from "react-icons/lia";

import { useRouter } from "next/router";

const navList = [
  {
    label: "Dashboard",
    path: "/",
    Icon: MdOutlineSpaceDashboard,
  },
  {
    label: "User Management",
    path: "/user-management",
    Icon: MdOutlineSupervisorAccount,
  },
  {
    label: "Study Management",
    path: "/study-management",
    Icon: LiaHospital,
  },
];

export default function SideBar() {
  const { pathname } = useRouter();

  return (
    <Flex className="lilly-sidebar h-100" direction="column" gap={24}>
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
        {navList.map(({ label, path, Icon }) => (
          <Link className="w-100" key={path} href={path} passHref>
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
        <Link className="w-100" key="/settings" href="/settings" passHref>
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
        <Link className="w-100" key="/profile" href="/profile" passHref>
          <NavLink
            className={`lilly-nav-link ${
              pathname === "/profile" ? "selected" : "unselected"
            }`}
            label="Logged in as"
            description="John Doe"
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
            rightSection={
              <UnstyledButton className="m-l-auto">
                <MdLogout />
              </UnstyledButton>
            }
          />
        </Link>
      </Flex>
    </Flex>
  );
}
