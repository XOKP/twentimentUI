import { useMemo, useEffect } from "react";
import { Chart } from "react-charts";
import { scroll } from "../../utils";

function MainElectionChart({ initialData, dayData, setDayData }) {
  useEffect(() => {
    initialData &&
      !dayData &&
      setDayData({ name: initialData[0].name, data: initialData[0].data[0] });
  }, [initialData]);

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
      {
        primary: true,
        type: "time",
        position: "bottom",
        hardMin: new Date(data[0].data[0].x).getTime(),
        hardMax: new Date(data[0].data[data[0].data.length - 1].x).getTime(),
      },
      { type: "linear", position: "left" },
    ],
    []
  );

  function onClick(point) {
    point &&
      setDayData({
        name: point.series.label,
        data: initialData.find((i) => i.name === point.series.label).data[
          point.index
        ],
      });
    point && setTimeout(() => scroll.toElectionDataVisualizer(), 200);
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
