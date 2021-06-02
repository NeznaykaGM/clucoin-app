import { css } from 'styled-components';

export const linkButtonPresets = {
  default: css`
    font-weight: 700;
    text-transform: uppercase;
    font-size: 16px;

    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -6px;
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.colors.pink300};

      transition: width 0.3s;
    }

    &:hover::after {
      width: 100%;
    }

    a {
      text-decoration: none;
      transition: all 0.3s ease-in-out;

      &:hover {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.pink300};
      }
    }
  `,
  small: css`
    font-size: 14px;

    a {
      text-decoration: none;
      transition: all 0.3s ease-in-out;

      &:hover {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.pink300};
      }
    }
  `
};

export type LinkButtonPresets = keyof typeof linkButtonPresets;
