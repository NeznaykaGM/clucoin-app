import * as React from 'react';
// components
import { ErrorMessage } from '@md-shared/components/form/error-message';
// views
import { TextInput, Wrapper, Label, InputStyle } from './views';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorText?: string;
  inputStyle?: InputStyle;
  label?: string;
  height?: number;
}

const Input: React.FC<InputProps> = ({ errorText, label, height, placeholder, ...rest }) => {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <TextInput height={height} placeholder={placeholder} isValid={!errorText} {...rest} />
      <ErrorMessage errorText={errorText} />
    </Wrapper>
  );
};

export { Input };
