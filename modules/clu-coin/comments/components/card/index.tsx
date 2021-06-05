import React from 'react';
import { TextWrapper, Wrapper } from './views';

interface Props {
  text: string;
}

const Card: React.FC<Props> = ({ text }) => {
  return (
    <Wrapper>
      <TextWrapper>{text}</TextWrapper>
    </Wrapper>
  );
};

export default Card;
