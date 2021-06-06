import React from 'react';
// components
import { Button } from '@md-ui/button/main';
// views
import { Title, Wrapper, PinkTitle, ButtonWrapper } from '@md-ui/card/purchase-card/views';

const PurchaseCard: React.FC = () => {
  return (
    <Wrapper>
      <Title>Download COIN DeX</Title>
      <PinkTitle>Available on Pancakeswap</PinkTitle>

      <ButtonWrapper>
        <Button>Download</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default PurchaseCard;
