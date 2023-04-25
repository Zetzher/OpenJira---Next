import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "../themes";
import UIProvider from "@/context/ui/UIProvider";

function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  );
}

export default App;
