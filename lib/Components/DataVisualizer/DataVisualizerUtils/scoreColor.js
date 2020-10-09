export const scoreColor = ({ theme, _color, index }) =>
  theme.color[_color] ? theme.color[_color][index || 1] : theme.color._light[3];
