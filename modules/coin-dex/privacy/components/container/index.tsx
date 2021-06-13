import React from 'react';
// views
import { Wrapper, Title } from '@md-modules/coin-dex/privacy/components/container/views';

interface Props {
  title: string;
  largeTitle?: boolean;
}

const Container: React.FC<Props> = ({ title, children, largeTitle }) => {
  return (
    <Wrapper>
      <Title largeTitle={largeTitle}>{title}</Title>
      {children}
    </Wrapper>
  );
};

export default Container;
