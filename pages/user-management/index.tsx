import { Grid } from "@mantine/core";
import { FunctionComponent } from "react";

import { WarningsWidget, UsersWidget } from "@lilly/components";

const warnings = [
  "There are 2 patients that requested for their data to be deleted.",
  "There are 2 HCP’s that requested for their data to be deleted.",
];

const UserManagement: FunctionComponent = () => {
  return (
    <Grid className="w-100" gutter={20}>
      <Grid.Col span={{ base: 12, md: 6, lg: 5 }}>
        <WarningsWidget messages={warnings} />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
        <UsersWidget />
      </Grid.Col>
    </Grid>
  );
};

export default UserManagement;
