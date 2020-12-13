import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "./ThemeProvider";

const Wrapper = styled("div")`
  background: ${(props) => props.theme.background};
  transition: color 0.2s ease-out, background 0.2s ease-out;
  width: 100vw;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 1rem;
  h1,
  p,
  h3,
  h2 {
    color: ${(props) => props.theme.body};
    margin-top: 88px;
    margin-right:80px
  }
`;

function ToggleApp() {
  const themeState = useTheme();
  return (
    <Wrapper>
      <h1>Title Example</h1>
      <h2>Hello welcome to the page </h2>
      <h3>Example title</h3>
      <div>
        <button onClick={() => themeState.toggle()}>
          Switch to {themeState.isDark ? "Light" : "Dark"} Mode
        </button>
      </div>
      <p>
        If you aren’t satisfied with the build tool and configuration choices,
        you can eject at any time. This command will remove the single build
        dependency from your project. Instead, it will copy all the
        configuration files and the transitive dependencies (Webpack, Babel,
        ESLint, etc) right into your project so you have full control over them.
        All of the commands except eject will still work, but they will point to
        the copied scripts so you can tweak them. At this point you’re on your
        own. You don’t have to ever use eject. The curated feature set is
        suitable for small and middle deployments, and you shouldn’t feel
        obligated to use this feature. However we understand that this tool
        wouldn’t be useful if you couldn’t customize it when you are ready for
        it.
      </p>
    </Wrapper>
  );
}

export default ToggleApp;
