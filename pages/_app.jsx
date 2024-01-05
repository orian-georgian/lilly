import { MantineProvider, AppShell } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import Head from "next/head";

import { Header, SideBar } from "@lilly/components";
import mantineTheme from "@lilly/configs/mantine-theme";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "mantine-datatable/styles.layer.css";
import "@lilly/styles/global.scss";

function MyApp({ Component, pageProps }) {
  const [opened, { toggle }] = useDisclosure();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <MantineProvider theme={mantineTheme}>
      <Head>
        <title>Lilly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell
        header={{ height: 98, collapsed: !isMobile }}
        navbar={{
          width: 230,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding={{ base: 10, sm: 20, md: 40 }}
      >
        {isMobile && (
          <AppShell.Header
            withBorder={false}
            styles={{
              header: {
                boxShadow: "var(--mantine-shadow-sm)",
              },
            }}
          >
            <Header opened={opened} onToggleSidebar={toggle} />
          </AppShell.Header>
        )}
        <AppShell.Navbar>
          <SideBar />
        </AppShell.Navbar>
        <AppShell.Main>
          <Component {...pageProps} />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default MyApp;
