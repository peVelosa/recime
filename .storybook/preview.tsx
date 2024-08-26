import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/styles/theme";
import type { Preview } from "@storybook/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={inter.className}>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
};

export default preview;
