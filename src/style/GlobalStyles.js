import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
${reset}
body {
  font-size : 16px;
}
`;
