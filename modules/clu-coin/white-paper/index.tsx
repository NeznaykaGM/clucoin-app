import React from 'react';
import { ButtonWrapper, SubTitle, Title, Wrapper } from '@md-modules/clu-coin/white-paper/views';
import { Button } from '@md-ui/button/main';

const WhitePaper = () => {
  return (
    <Wrapper>
      <Title>Whitepaper</Title>
      <SubTitle>
        Our whitepaper is designed to be easily readable for users who are new to crypto while also touching on the more
        technical pieces to help all users understand how they can benefit from investing in CluCoin and help people all
        over the world.
      </SubTitle>
      <ButtonWrapper>
        <Button>Read Whitepaper</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default WhitePaper;
