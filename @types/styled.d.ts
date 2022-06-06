import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      white: string;
      blue: string;
      black: string;
    };
    backgroundColors: {
      primary: string;
      white: string;
      blue: string;
      black: string;
    };
  }
}
