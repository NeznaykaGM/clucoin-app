import React from 'react';
// libs
import { Waypoint } from 'react-waypoint';
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
  const [isUserSee, setIsUserSee] = React.useState(false);

  return (
    <Wrapper>
      <ContentWrapper isUserSee={isUserSee}>
        <PinkTitle>
          Key <Title>Features</Title>
        </PinkTitle>

        <SubTitle>
          CluCoin is the first token designed with the users and a charity system built straight into its core. We've
          built a system designed to protect against whales, encourage holding and help charities around the world.
        </SubTitle>
      </ContentWrapper>

      <Waypoint onEnter={() => setIsUserSee(true)}>
        <CardsWrapper isUserSee={isUserSee}>
          <InfoCard
            src='static/images/safe.png'
            frontEndTitle='Safe Invest'
            frontEndSubTitle='CluCoin holders are rewarded with 5% return each time someone sells. HOLD & EARN.'
          />
          <InfoCard
            src='static/images/present.png'
            frontEndTitle='Community'
            frontEndSubTitle='Join our CLUmmunity and meet likeminded people who love helping others and having fun!!'
          />
          <InfoCard
            src='static/images/cash.png'
            frontEndTitle='Charity Focus'
            frontEndSubTitle={"Part of CluCoin's mission is to help charities around the world."}
          />
        </CardsWrapper>
      </Waypoint>
    </Wrapper>
  );
};

export default KeyFeatures;
