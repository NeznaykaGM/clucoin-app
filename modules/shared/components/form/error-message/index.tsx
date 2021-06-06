import * as React from 'react';
import styled from 'styled-components';

const ErrorText = styled.div`
  bottom: -20px;
  color: ${({ theme }) => theme.colors.pink400};
  font-size: 0.75rem;
  margin-top: 4px;
  position: absolute;
  text-align: left;
`;

interface Props {
  errorText: string | undefined;
}

const ErrorMessage: React.FC<Props> = ({ errorText }) => {
  if (!errorText) return null;

  return <ErrorText>{errorText}</ErrorText>;
};

export { ErrorMessage };
