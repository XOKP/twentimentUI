import PageviewIcon from "@material-ui/icons/Pageview";
import InfoIcon from "@material-ui/icons/Info";
import { DataVisualizer } from "../DataVisualizer";
import MainAbout from "../MainAbout";
import MainElection2016 from "../MainElection2016";
import { dateString } from "../../utils";

const MainConfigs = ({ query }) => [
  {
    value: "search",
    title: (query && query.search) || "Search Results",
    subtitle: query.search
      ? "Showing twentiment results for " + query.search + "."
      : "Search for something (anything) and see how people are feeling about it.",
    subSubtitle:
      query.from || query.until
        ? query.from && query.until
          ? dateString(query.from) + " - " + dateString(query.until)
          : query.from
          ? dateString(query.from) + " - Now"
          : query.until
          ? dateString(query.until)
          : null
        : null,
    label: (query && query.search) || "Search Results",
    altLabel: <PageviewIcon />,
    Component: ({ pending, data }) => (
      <DataVisualizer pending={pending} {...data} />
    ),
  },
  {
    value: "election2020",
    title: "Election 2020",
    subtitle:
      "Track daily twentiment results for the the 2020 Presidential Election.",
    label: "Election 2020",
    altLabel: "🇺🇸 2020",
    Component: () => "TODO: election2020...",
  },
  {
    value: "election2016",
    title: "Election 2016",
    subtitle:
      "Retrospective daily twentiment tracker for the 2016 Presidential Election.",
    label: "Election 2016 Retro",
    altLabel: "🇺🇸 2016",
    Component: () => <MainElection2016 />,
  },
  {
    value: "about",
    title: "Twentiment",
    subtitle: "Learn what it is and why it's so neat.",
    label: "About",
    altLabel: <InfoIcon />,
    Component: () => <MainAbout />,
  },
];

export default MainConfigs;
