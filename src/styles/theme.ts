import "styled-components";

export const theme = {
  "light-gray": "#f9f9f9",
  white: "#ffffff",
  blue: "#006cff",
  black: "#000000",
  gray: "#c0c0c0",
};

export type ColorFamily = keyof typeof theme;
type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
