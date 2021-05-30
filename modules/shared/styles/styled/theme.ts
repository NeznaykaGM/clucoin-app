import { DefaultTheme, css } from 'styled-components';

export const colors = {
  // blue
  blue500: '#5D19DA',
  blue600: '#5D19DB',
  // gray
  gray400: '#343A40',
  gary800: '#0A0A0A',
  // pink
  pink100: '#ff62c2',
  pink300: '#D0458D',
  pink400: '#FF1493',
  // other
  white: '#fff',
  black: '#000'
};

export const templates = {
  absolute: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `,
  centerContent: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  centerItems: css`
    display: flex;
    align-items: center;
  `
};

export const dimensions = {
  pageMaxWidth: 1071
};

export const theme: DefaultTheme = {
  colors,
  templates,
  dimensions
};
