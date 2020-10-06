import { useState } from "react";
import { ThemeProvider } from "styled-components";
import ThemeConfig from "./ThemeConfig";
import ThemeGlobalStyle from "./ThemeGlobalStyle";
import ThemeButton from "./ThemeButton";

function Theme({ children }) {
  const [themeMode, setThemeMode] = useState("light");
  return (
    <ThemeProvider theme={ThemeConfig(themeMode)}>
      <ThemeGlobalStyle />
      <ThemeButton themeMode={themeMode} setThemeMode={setThemeMode} />
      {children}
    </ThemeProvider>
  );
}

export default Theme;
