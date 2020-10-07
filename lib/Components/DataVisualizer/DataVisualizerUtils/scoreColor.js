export const scoreColor = ({ theme, _color, index }) =>
  theme.color[_color] ? theme.color[_color][index || 0] : theme.color._light[1];
