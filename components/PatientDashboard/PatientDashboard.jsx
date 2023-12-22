import { Grid } from "@mantine/core";
import {
  LineChartWidget,
  QuestionnaireStatisticsWidget,
  RelatedDocumentationWidget,
  StudyWidget,
} from "@lilly/components";

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
      {
        label: "Cut-Off",
        data: [1.1, 1.4, 0.4, 1.7, 2.3, 2.4, 1.2, 0.1, 2, 1.7],
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
      {
        label: "Cut-Off",
        data: [1.9, 2.4, 0.4, 1.7, 3.3, 1.4, 0.2, 2.1, 2, 0.7],
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
      {
        label: "Cut-Off",
        data: [1.1, 1.4, 1.4, 1.7, 2.3, 2.4, 2.2, 2.1, 2, 1.7],
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
      {
        label: "Cut-Off",
        data: [3.1, 1.8, 1.4, 1.7, 1.3, 1.4, 2.2, 0.1, 0.2, 0.7],
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
      {
        label: "Cut-Off",
        data: [1.1, 1.4, 0.4, 1.7, 2.3, 2.4, 1.2, 0.1, 2, 1.7],
      },
    ],
  },
];

export default function PatientDashboard() {
  return (
    <Grid className="w-100" gutter={20}>
      <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
        <StudyWidget />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
        <QuestionnaireStatisticsWidget />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
        <RelatedDocumentationWidget />
      </Grid.Col>
      {chartsData?.map(({ title, labels, datasets }) => (
        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
          <LineChartWidget title={title} labels={labels} datasets={datasets} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
