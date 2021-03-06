import styled, { css } from 'styled-components';
// local
import { Margin } from '@md-shared/types/css';
import { getMarginStyle } from '@md-shared/helpers/styled';

export interface WrapperStyle {
  height?: string;
  width?: string;
}

export type ButtonStyle = WrapperStyle & Margin;

export const Wrapper = styled.button<{
  buttonStyle?: ButtonStyle;
  isLoading: boolean;
}>`
  position: relative;

  color: #fff;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.pink400};
  border: 1px solid ${({ theme }) => theme.colors.pink400};
  border-color: ${({ theme }) => theme.colors.pink400};
  padding: 9px 30px;

  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transform: translateY(0px);
  border-radius: 50px;

  text-align: center;
  user-select: none;
  font-size: 1rem;
  line-height: 1.5;

  transition: all 0.4s ease 0s;

  &:hover {
    transform: translateY(-5px);

    @media screen and (max-width: 768px) {
      transform: translateY(0px);
    }
  }

  :active {
    opacity: 0.9;
  }

  ${({ buttonStyle }) =>
    buttonStyle?.width &&
    css`
      width: ${buttonStyle.width};
    `};

  ${({ buttonStyle }) =>
    buttonStyle?.height &&
    css`
      height: ${buttonStyle.height};
    `};

  ${({ theme }) => theme.templates.centerContent};
  ${({ buttonStyle }) => buttonStyle && getMarginStyle('buttonStyle')};

  ${({ isLoading }) =>
    isLoading &&
    css`
      :hover {
        background-color: ${({ theme }) => theme.colors.gray400};
      }
    `}
`;

export const InnerWrapper = styled.div`
  align-content: center;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const LoaderWrapper = styled.div`
  max-width: 24px;
  max-height: 24px;
`;
