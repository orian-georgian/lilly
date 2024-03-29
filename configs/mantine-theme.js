import {
  createTheme,
  AppShell,
  NavLink,
  Badge,
  Button,
  Alert,
  Table,
  Title,
  Drawer,
  List,
  Text,
  LoadingOverlay,
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
  radius: {
    md: "6px",
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
        root: {
          zIndex: 200,
        },
      },
    }),
    LoadingOverlay: LoadingOverlay.extend({
      styles: {
        root: {
          zIndex: 100,
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
            padding: `1px 8px`,
            height: 22,
          },
          label: {
            textTransform: "none",
            fontSize: 16,
            fontWeight: 400,
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
    Title: Title.extend({
      styles: {
        root: {
          color: `var(--mantine-color-primary-dark-9)`,
        },
      },
    }),
    List: List.extend({
      styles: {
        itemWrapper: {
          width: "100%",
        },
        itemLabel: {
          width: "100%",
        },
      },
    }),
    Text: Text.extend({
      styles: {
        root: {
          color: "var(--mantine-color-primary-dark-9)",
        },
      },
    }),
    Button: Button.extend({
      styles: {
        label: {
          fontWeight: 500,
          fontSize: 16,
        },
      },
    }),
  },
});

export default mantineTheme;
