import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Paper } from "@mantine/core";

import chartOptions from "@lilly/configs/chart-options";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors
);

console.log(Colors);

export default function LineChartWidget({ title, labels, datasets }) {
  const options = {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      title: {
        ...chartOptions.plugins.title,
        text: title,
      },
    },
  };

  const data = {
    labels,
    datasets: datasets?.map(({ label, data }) => ({
      label,
      data,
      borderWidth: 2,
      pointRadius: 2,
    })),
  };

  return (
    <Paper shadow="lg" pl="lg" pr="lg" pt="xs" pb="xs" radius="lg" withBorder>
      <Line width="100%" height={210} options={options} data={data} />
    </Paper>
  );
}
