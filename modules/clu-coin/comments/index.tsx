import React from 'react';
// constants
import { commentsState } from '@md-modules/clu-coin/comments/constants';
// components
import CommentsSlider from '@md-modules/clu-coin/comments/components/slider';
// views
import { SliderWrapper, SubTitle, Title, Wrapper } from '@md-modules/clu-coin/comments/views';

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
