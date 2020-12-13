import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "./ThemeProvider";
import ToggleApp from "./toggle-app";

function App() {
  return (
    <>
      <ThemeProvider>
        <ToggleApp />
      </ThemeProvider>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
