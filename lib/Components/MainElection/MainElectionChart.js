import { useMemo } from "react";
import { Chart } from "react-charts";

function MainElectionChart({ initialData }) {
  const data = useMemo(
    () =>
      initialData.map((candidate) => ({
        label: candidate.name,
        data: candidate.data.map((i) => ({
          x: new Date(i.date),
          y: i.data.cumulative ? i.data.cumulative.score : 0,
        })),
      })),
    []
  );

  const series = useMemo(
    () => ({
      showPoints: true,
      step: 1,
    }),
    []
  );

  const axes = useMemo(
    () => [
      {
        primary: true,
        type: "time",
        position: "bottom",
      },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Chart data={data} series={series} axes={axes} tooltip />
    </div>
  );
}

export default MainElectionChart;
