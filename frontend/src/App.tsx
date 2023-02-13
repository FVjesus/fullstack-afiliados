import React from "react";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "./App.css";
import { Router } from "./views/Router";

const themes = {
  dark: `${process.env.PUBLIC_URL}/css/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/css/light-theme.css`
};

function App(): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeSwitcherProvider
        themeMap={themes}
        defaultTheme={"light"}
        insertionPoint="styles-insertion-point"
      >
        <Router />
      </ThemeSwitcherProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
