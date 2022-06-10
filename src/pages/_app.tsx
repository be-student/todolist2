import "../styles/reset.css";
import "../styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import type { AppProps } from "next/app";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { useState } from "react";
const theme: DefaultTheme = {
  colors: {
    primary: "#F0F2F5",
    blue: "#1877F2",
    white: "#FFFFFF",
    black: "#000000",
  },
  backgroundColors: {
    primary: "#F0F2F5",
    white: "#FFFFFF",
    blue: "#1877F2",
    black: "#000000",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const [filterTag, setFilterTag] = useState<string>("");
  const [tasks, setTasks] = useState();
  const [tags, setTags] = useState();
  return (
    <ThemeProvider theme={theme}>
      <Component
        {...pageProps}
        filterTag={filterTag}
        setFilterTag={setFilterTag}
      />
    </ThemeProvider>
  );
}

export default MyApp;
