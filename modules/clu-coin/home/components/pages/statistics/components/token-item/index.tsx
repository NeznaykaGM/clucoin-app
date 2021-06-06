import React from 'react';
import { Wrapper } from './views';

interface Props {
  title: string;
  subTitle: string;
}

const TokenItem: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <Wrapper>
      <label>{title}</label>
      <span>{subTitle}</span>
    </Wrapper>
  );
};

export default TokenItem;
