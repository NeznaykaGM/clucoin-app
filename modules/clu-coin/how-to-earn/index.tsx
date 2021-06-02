import React from 'react';
// components
import TokenInfo from '@md-modules/clu-coin/how-to-earn/components/token-info';
// views
import { Wrapper } from '@md-modules/clu-coin/how-to-earn/views';
import TokenDescription from '@md-modules/clu-coin/how-to-earn/components/token-description';

const HowToBuy = () => {
  return (
    <Wrapper>
      <TokenInfo />
      <TokenDescription />
    </Wrapper>
  );
};

export default HowToBuy;
