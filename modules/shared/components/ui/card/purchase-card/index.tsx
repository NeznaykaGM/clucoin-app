import React from 'react';
// components
import { Button } from '@md-ui/button/main';
// views
import { Title, Wrapper, ButtonWrapper } from '@md-ui/card/purchase-card/views';

const PurchaseCard: React.FC = () => {
  return (
    <Wrapper>
      <Title>Download COIN DeX</Title>

      <ButtonWrapper>
        <Button>Download</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default PurchaseCard;
