import React from 'react';
// constants
import { commentsState } from '@md-modules/coin-dex/comments/constants';
// components
import CommentsSlider from '@md-modules/coin-dex/comments/components/slider';
// views
import { SliderWrapper, SubTitle, Title, Wrapper } from '@md-modules/coin-dex/comments/views';

const Comments = () => {
  return (
    <Wrapper>
      <Title>Reviews about us</Title>
      <SubTitle>
        We have a very diverse and large base of people who purchase our product. Here are a couple of testimonials from
        people who have already tried our product.
      </SubTitle>
      <SliderWrapper>
        <CommentsSlider comments={commentsState} />
      </SliderWrapper>
    </Wrapper>
  );
};

export default Comments;
