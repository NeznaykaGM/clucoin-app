import React from 'react';
// libs

// components
import UserInfo from '@md-modules/clu-coin/comments/components/user-info';
// views
import { CWrapper, Wrapper } from './views';

interface Props {
  text: string;
  src: string;
  name: string;
  rating: string;
}

const Card: React.FC<Props> = ({ text, name, src, rating }) => {
  return (
    <Wrapper>
      <CWrapper>
        <UserInfo rating={rating} name={name} src={src} />
        {text}
      </CWrapper>
    </Wrapper>
  );
};

export default Card;
