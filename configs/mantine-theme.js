import {
  createTheme,
  AppShell,
  NavLink,
  Badge,
  Alert,
  Table,
  Drawer,
} from "@mantine/core";

const lillyRed = [
  "#ffebea",
  "#fcd7d4",
  "#f3ada8",
  "#eb8179",
  "#e45b4f",
  "#e04335",
  "#e03629",
  "#d52b1e",
  "#b22117",
  "#9c1710",
];

const primaryDark = [
  "#f5f5f5",
  "#e7e7e7",
  "#cdcdcd",
  "#b2b2b2",
  "#9a9a9a",
  "#8b8b8b",
  "#848484",
  "#717171",
  "#656565",
  "#222222",
];

const positive = [
  "#ecfeeb",
  "#d6fcd4",
  "#a7faa5",
  "#76f872",
  "#52f749",
  "#3ff632",
  "#35f527",
  "#2ada1e",
  "#1fc116",
  "#078505",
];

const mantineTheme = createTheme({
  primaryColor: "lilly-red",
  fontFamily: "'Roboto', sans-serif",
  shadows: {
    sm: "0px 4px 16px 0px #0000001A",
    lg: "0px 8px 32px 0px #0000000D",
  },
  colors: {
    "lilly-red": lillyRed,
    "primary-dark": primaryDark,
    positive,
  },
  components: {
    AppShell: AppShell.Navbar.extend({
      styles: {
        navbar: {
          borderColor: "var(--mantine-color-lilly-red-light)",
        },
      },
    }),
    Drawer: Drawer.extend({
      styles: {
        header: {
          padding: "30px 40px",
        },
        title: {
          fontSize: 32,
          fontWeight: 700,
        },
      },
    }),
    NavLink: NavLink.extend({
      styles: {
        label: {
          fontSize: 13,
          fontWeight: 500,
        },
        root: {
          padding: 14,
          color: "var(--mantine-color-primary-dark-9)",
        },
      },
    }),
    Badge: Badge.extend({
      styles: (_, { color }) => {
        return {
          root: {
            backgroundColor: `var(--mantine-color-${color}-light)`,
          },
          label: {
            textTransform: "none",
          },
        };
      },
    }),
    Alert: Alert.extend({
      styles: (_, { color }) => {
        return {
          root: {
            backgroundColor: `var(--mantine-color-${color}-light)`,
          },
        };
      },
    }),
    Table: Table.extend({
      styles: {
        th: {
          fontWeight: "500",
        },
      },
    }),
  },
});

export default mantineTheme;
