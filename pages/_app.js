import { CacheProvider } from "@emotion/core";
// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from "emotion";
import { globalStyles } from "../styled-components/global";
import "tailwindcss/dist/base.min.css";

const App = ({ Component, pageProps }) => (
  <CacheProvider value={cache}>
    {globalStyles}
    <Component {...pageProps} />
  </CacheProvider>
);

export default App;
