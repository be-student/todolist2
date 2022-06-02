import "../styles/reset.css";
import "../styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import type { AppProps } from "next/app";
import { DefaultTheme, ThemeProvider } from "styled-components";
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
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
