import { CacheProvider } from "@emotion/core";
// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from "emotion";
import { globalStyles } from "../styled-components/global";
import "tailwindcss/dist/base.min.css";
import { BreakpointProvider } from "../utils/breakpoint";

const queries = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  or: "(orientation: portrait)", // we can check orientation also
};

const App = ({ Component, pageProps }) => (
  <BreakpointProvider queries={queries}>
    <CacheProvider value={cache}>
      {globalStyles}
      <Component {...pageProps} />
    </CacheProvider>
  </BreakpointProvider>
);

export default App;
