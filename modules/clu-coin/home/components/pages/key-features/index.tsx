import React from 'react';
// views
import {
  Title,
  Wrapper,
  PinkTitle,
  SubTitle,
  ContentWrapper,
  CardsWrapper
} from '@md-modules/clu-coin/home/components/pages/key-features/views';
import InfoCard from '@md-modules/clu-coin/home/components/pages/key-features/components/card';

const KeyFeatures = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <PinkTitle>
          Key <Title>Features</Title>
        </PinkTitle>

        <SubTitle>
          CluCoin is the first token designed with the users and a charity system built straight into its core. We've
          built a system designed to protect against whales, encourage holding and help charities around the world.
        </SubTitle>
      </ContentWrapper>

      <CardsWrapper>
        <InfoCard
          src='static/images/safe.png'
          title='Safe Invest'
          subTitle='CluCoin holders are rewarded with 5% return each time someone sells. HOLD & EARN.'
        />
        <InfoCard
          src='static/images/present.png'
          title='Community'
          subTitle='Join our CLUmmunity and meet likeminded people who love helping others and having fun!!'
        />
        <InfoCard
          src='static/images/cash.png'
          title='Charity Focus'
          subTitle={"Part of CluCoin's mission is to help charities around the world."}
        />
      </CardsWrapper>
    </Wrapper>
  );
};

export default KeyFeatures;
