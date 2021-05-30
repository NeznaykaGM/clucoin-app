import React from 'react';
// components
import { Button } from '@md-ui/button/main';
import ProgressBar from '@md-ui/progress-bar';
// views
import { Title, Wrapper, PinkTitle, ButtonWrapper } from '@md-ui/card/purchase-card/views';

interface Props {
  count?: string;
}

const PurchaseCard: React.FC<Props> = ({ count }) => {
  return (
    <Wrapper>
      <Title>Purchase CluCoin</Title>
      <PinkTitle>Available on Pancakeswap</PinkTitle>

      <ButtonWrapper>
        <Button>Buy Now</Button>
      </ButtonWrapper>
      <ProgressBar
        percent={50}
        title={
          <>
            10<sup>15</sup> shares
          </>
        }
        count={count}
      />
    </Wrapper>
  );
};

export default PurchaseCard;
