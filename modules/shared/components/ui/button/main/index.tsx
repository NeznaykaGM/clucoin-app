import * as React from 'react';
// components
import { Loader } from '@md-ui/loaders/loader';
// views
import { ButtonStyle, InnerWrapper, LoaderWrapper, Wrapper } from './views';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: ButtonStyle;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, isLoading = false, ...rest }) => (
  <Wrapper isLoading={isLoading} {...rest}>
    <InnerWrapper>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        children
      )}
    </InnerWrapper>
  </Wrapper>
);

export { Button };
