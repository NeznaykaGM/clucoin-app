import React from 'react';
// views
import { Wrapper, Image, Text, Star, UserWrapper, RatingWrapper, Rating } from './views';

interface Props {
  src: string;
  name: string;
  rating: string;
}

const UserInfo: React.FC<Props> = ({ src, name, rating }) => {
  return (
    <Wrapper>
      <UserWrapper>
        <Image src={src} alt='img' />
        <Text>{name}</Text>
      </UserWrapper>
      <RatingWrapper>
        <Star src='/static/icons/star.svg' alt='star' />
        <Rating>{rating}</Rating>
      </RatingWrapper>
    </Wrapper>
  );
};

export default UserInfo;
