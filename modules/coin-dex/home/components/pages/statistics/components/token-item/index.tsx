import React from 'react';
import { Wrapper, SubTitle } from './views';

interface Props {
  title: string;
  subTitle: string;
  subTitleFw?: number;
  subTitleColor?: string;
}

const TokenItem: React.FC<Props> = ({ title, subTitle, subTitleFw, subTitleColor }) => {
  return (
    <Wrapper>
      <label>{title}</label>
      <SubTitle fw={subTitleFw} color={subTitleColor}>
        {subTitle}
      </SubTitle>
    </Wrapper>
  );
};

export default TokenItem;
