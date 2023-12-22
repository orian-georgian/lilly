import {
  Flex,
  Image,
  NavLink,
  Avatar,
  Indicator,
  UnstyledButton,
} from "@mantine/core";
import {
  MdOutlineSpaceDashboard,
  MdOutlineSettings,
  MdLogout,
} from "react-icons/md";
import { useRouter } from "next/router";

const navList = [
  {
    label: "Dashboard",
    path: "/",
    Icon: MdOutlineSpaceDashboard,
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
        <Image src="images/logo.png" alt="Lilly logo" w={120} />
      </Flex>
      <Flex direction="column" align="center" gap={8} pl="lg" pr="lg">
        {navList.map(({ label, path, Icon }) => (
          <NavLink
            className={`${pathname === path ? "lilly-nav-link" : ""}`}
            key={path}
            href={path}
            label={label}
            active={pathname === path}
            color="lilly-red"
            leftSection={<Icon size={17} />}
          />
        ))}
      </Flex>
      <Flex
        className="m-t-auto lilly-sidebar__user-section"
        direction="column"
        gap={8}
        p="lg"
      >
        <NavLink
          className={`${pathname === "/settings" ? "lilly-nav-link" : ""}`}
          href="/settings"
          label="Settings"
          active={pathname === "/settings"}
          color="lilly-red"
          leftSection={<MdOutlineSettings size={17} />}
        />
        <NavLink
          className={`${pathname === "/profile" ? "lilly-nav-link" : ""}`}
          href="/profile"
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
      </Flex>
    </Flex>
  );
}
