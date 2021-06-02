import React from 'react';
// components
import TokenInfo from '@md-modules/clu-coin/home/how-to-buy/components/token-info';
// views
import { Wrapper } from '@md-modules/clu-coin/home/how-to-buy/views';
import TokenDescription from '@md-modules/clu-coin/home/how-to-buy/components/token-description';

const HowToBuy = () => {
  return (
    <Wrapper>
      <TokenInfo />
      <TokenDescription />
    </Wrapper>
  );
};

export default HowToBuy;
