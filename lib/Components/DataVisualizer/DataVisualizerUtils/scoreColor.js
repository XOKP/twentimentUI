export const scoreColor = ({ theme, _color, index }) =>
  _color === "negative"
    ? theme.color.blue[index || 2]
    : theme.color.green[index || 2];
