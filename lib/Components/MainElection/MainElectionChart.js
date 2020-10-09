import { useMemo } from "react";
import { Chart } from "react-charts";
import { scroll } from "../../utils";

function MainElectionChart({ initialData, setDayData }) {
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

  const series = useMemo(() => ({ showPoints: true }), []);

  const axes = useMemo(
    () => [
      { primary: true, type: "time", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  function onClick(point) {
    setDayData({
      name: point.series.label,
      data: initialData.find((i) => i.name === point.series.label).data[
        point.index
      ],
    });
    setTimeout(() => scroll.toElectionDataVisualizer(), 200);
  }

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Chart
        data={data}
        series={series}
        axes={axes}
        onClick={onClick}
        tooltip
      />
    </div>
  );
}

export default MainElectionChart;
