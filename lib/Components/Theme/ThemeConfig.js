const ThemeConfig = (themeMode) => {
  const boxShadow = [
    null,
    "0 1px 1px 0 rgba(65, 69, 73, 0.3),0 1px 3px 1px rgba(65, 69, 73, 0.15)",
    "0 3px 6px rgba(0, 0, 0, .16), 0 1px 2px rgba(0, 0, 0, .23)",
    " 0 1px 5px 0 rgba(0, 0, 0, 0.1)",
  ];

  const colorPaletteLight = [null, "#fff", "#f6f7fb", "#eee", "#e0e0e0"];

  const colorPaletteDark = [
    null,
    "#010101",
    "#212121",
    "#757575",
    "#000",
    "rgba(0, 0, 0, 0.87)",
  ];

  const colorPalettePositive = [null, "#00ff0052", "#4caf50", "#b0e6cd"];

  const colorPaletteNegative = [null, "#0000ff1f", "#2196f3", "#b0e0e6"];

  const standardPalette = {
    _light: colorPaletteLight,
    _dark: colorPaletteDark,
    positive: colorPalettePositive,
    negative: colorPaletteNegative,
  };

  const colorTheme = {
    light: {
      light: colorPaletteLight,
      dark: colorPaletteDark,
      ...standardPalette,
    },
    dark: {
      light: colorPaletteDark,
      dark: colorPaletteLight,
      ...standardPalette,
    },
  };

  const fontFamily = "Roboto, Helvetica, Arial, sans-serif";

  const fontSize = {
    xxs: "10px",
    xs: "12px",
    s: "14px",
    m: "16px",
    l: "18px",
    xl: "20px",
    xxl: "22px",
    xxxl: "24px",
  };

  const preset = {
    header: {
      top: "5px",
      side: "20px",
    },
  };

  const zIndex = {
    mainContentContainer: 1,
    mainContentChildren: 2,
    mainContentEmoji: 3,
    header: 4,
    themeButton: 5,
  };

  return {
    boxShadow,
    color: colorTheme[themeMode] || colorTheme.light,
    fontFamily,
    fontSize,
    preset,
    zIndex,
  };
};

export default ThemeConfig;
