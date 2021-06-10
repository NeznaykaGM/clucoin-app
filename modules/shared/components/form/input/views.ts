import styled from 'styled-components';

export interface InputStyle {
  fs?: number;
}

export const TextInput = styled.input<{
  isValid?: boolean;
  height?: number;
  inputStyle?: InputStyle;
}>`
  width: 100%;
  height: ${({ height }) => height || 52}px;
  padding: 16px;
  font-size: 16px;
  color: ${({ theme, isValid }) => (isValid ? theme.colors.gray400 : theme.colors.pink400)};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 4px;
  border-color: ${({ isValid, theme }) => (isValid ? theme.colors.gray400 : theme.colors.pink400)};
  outline: none;
`;

export const Wrapper = styled.div`
  flex: 1;
  position: relative;
  margin-bottom: 16px;
`;

export const Label = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;
