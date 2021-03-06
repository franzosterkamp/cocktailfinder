import React from "react";
import { Global, css } from "@emotion/core";
import { useTheme } from "emotion-theming";

export default function GlobalStyles() {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          transition: background 0.5s, color 0.5s;
        }
        body {
          margin: 0;
          background: ${theme.background};
          color: #eaead5;
          font-family: "Kanit", sans-serif;
        }
      `}
    />
  );
}

// /* Color Theme Swatches in Hex */
// .Yellows-1-hex { color: #FFFF55; }
// .Yellows-2-hex { color: #FCEF87; }
// .Yellows-3-hex { color: #F5C342; }
// .Yellows-4-hex { color: #F5BD42; }
// .Yellows-5-hex { color: #F9DB49; }
