import { Grid } from "@mantine/core";

import {
  DeliverablesWidget,
  ExecutionWidget,
  PatientStatusWidget,
  CountryStatusWidget,
  StudyProtocolWidget,
} from "@lilly/components/CoreTeamDashboard/components";

export default function CoreTeamDashboard() {
  return (
    <Grid className="w-100" gutter={20} align="stretch">
      <Grid.Col span={{ md: 6, lg: 4 }}>
        <PatientStatusWidget />
      </Grid.Col>
      <Grid.Col span={{ md: 6, lg: 4 }}>
        <CountryStatusWidget />
      </Grid.Col>
      <Grid.Col p={0} span={{ md: 0, lg: 4 }}></Grid.Col>
      <Grid.Col span={{ md: 6, lg: 4 }}>
        <StudyProtocolWidget />
      </Grid.Col>
      <Grid.Col span={{ md: 6, lg: 4 }}>
        <ExecutionWidget />
      </Grid.Col>
      <Grid.Col span={{ md: 6, lg: 4 }}>
        <DeliverablesWidget />
      </Grid.Col>
    </Grid>
  );
}
