import React from 'react';
import {
  DistributionProceedsWrapper,
  DistributionRightTitle,
  DistributionLeftTitle,
  DistributionWrapper,
  Title,
  TitleWrapper,
  TokeList,
  TokenInformationWrapper,
  TokensTitle,
  Wrapper
} from '@md-modules/clu-coin/home/components/pages/statistics/views';
import TokenItem from '@md-modules/clu-coin/home/components/pages/statistics/components/token-item';

const Statistics = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Distribution</Title>
      </TitleWrapper>

      <DistributionWrapper>
        <DistributionProceedsWrapper>
          <DistributionLeftTitle>Important!</DistributionLeftTitle>
          <TokeList style={{ textAlign: 'center' }}>
            <p>
              Due to high commissions and huge market volatility our payments are doing in stable coins only and 1 time
              per week.
            </p>
          </TokeList>
        </DistributionProceedsWrapper>

        <TokenInformationWrapper>
          <TokensTitle>Payments</TokensTitle>

          <TokenItem title='1-5 hour of game' subTitle='1.5$  per hour' />
          <TokenItem title='5-12 hour of game ' subTitle='5-12 hour of game' />
          <TokenItem title='12+ hour of game' subTitle='12+ hour of game' />
        </TokenInformationWrapper>

        <DistributionProceedsWrapper>
          <DistributionRightTitle>Referrals</DistributionRightTitle>
          <TokeList>
            <p>
              Also we can offer you our referral program. Invite your friends, play together or separately and earn
              0.15$ per every hour that Your friends are playing!
            </p>
          </TokeList>
        </DistributionProceedsWrapper>
      </DistributionWrapper>
    </Wrapper>
  );
};

export default Statistics;