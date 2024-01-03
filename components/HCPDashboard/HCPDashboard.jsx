import { Grid } from "@mantine/core";

import {
  WarningsWidget,
  HCPStudiesWidget,
  HCPPatientsWidget,
  LineChartWidget,
} from "@lilly/components";

const warnings = [
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  "At officiis, quae tempore necessitatibus placeat saepe.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Quos qui quas esse quia voluptates aspernatur ex ea obcaecati cum rem.",
  "Minima dolores architecto rerum velit dignissimos ab odio?",
];

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const chartsData = [
  {
    labels,
    title: "HAQ-DI",
    datasets: [
      {
        label: "Patient Data",
        data: [2.3, 1.1, 0.3, 2.2, 3, 2, 2.1, 2.3, 1.9, 0.9],
      },
    ],
  },
  {
    labels,
    title: "EQ-5D",
    datasets: [
      {
        label: "Patient Data",
        data: [1.3, 3.1, 0.3, 2.2, 1.3, 0.2, 2.1, 2.8, 2.9, 1.9],
      },
    ],
  },
  {
    labels,
    title: "WHO-5",
    datasets: [
      {
        label: "Patient Data",
        data: [1.3, 1.1, 0.3, 1.2, 1, 1, 2.1, 2.3, 1.9, 0.9],
      },
    ],
  },
  {
    labels,
    title: "VAS-Pain",
    datasets: [
      {
        label: "Patient Data",
        data: [2.9, 2.1, 2.3, 2.2, 3, 2, 2.9, 3.3, 3.9, 2.9],
      },
    ],
  },
  {
    labels,
    title: "BASDAI",
    datasets: [
      {
        label: "Patient Data",
        data: [2.3, 1.1, 0.3, 2.2, 3, 2, 2.1, 2.3, 1.9, 0.9],
      },
    ],
  },
];

export default function HCPDashboard() {
  return (
    <Grid className="w-100" gutter={20}>
      <Grid.Col span={{ base: 12, md: 6, lg: 5 }}>
        <WarningsWidget messages={warnings} />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
        <HCPStudiesWidget />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
        <HCPPatientsWidget />
      </Grid.Col>
      {chartsData?.map(({ title, labels, datasets }) => (
        <Grid.Col key={title} span={{ base: 12, md: 4, lg: 4 }}>
          <LineChartWidget title={title} labels={labels} datasets={datasets} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
