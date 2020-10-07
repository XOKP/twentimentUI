import Placeholder from "../Placeholder";

function DataVisualizer({ pending, tweets, cumulative }) {
  return !tweets ? <Placeholder pending={pending} size={10} /> : "data...";
}

export default DataVisualizer;
