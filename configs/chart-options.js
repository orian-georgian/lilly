const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: {
        alignment: "end",
        font: {
          size: 8,
        },
      },
    },
    y: {
      ticks: {
        alignment: "end",
        font: {
          size: 8,
        },
      },
    },
  },
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: {
          size: 8,
        },
      },
    },
    title: {
      display: true,
      align: "start",
      text: "",
      font: {
        size: 18,
        weight: "normal",
      },
    },
  },
};

export default chartOptions;
