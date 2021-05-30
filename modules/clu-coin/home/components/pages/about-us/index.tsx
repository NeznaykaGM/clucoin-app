import React from 'react';
// libs
import { Waypoint } from 'react-waypoint';
// views
import {
  Wrapper,
  Title,
  MTitle,
  SubTitle,
  PinkTitle,
  RightSectionWrapper,
  Image,
  LeftSectionWrapper
} from '@md-modules/clu-coin/home/components/pages/about-us/views';

const AboutUs = () => {
  const [isUserSee, setIsUserSee] = React.useState(false);

  return (
    <Wrapper>
      <LeftSectionWrapper isUserSee={isUserSee}>
        <Waypoint onEnter={() => setIsUserSee(true)}>
          <Image src='/static/images/rocket6x.png' />
        </Waypoint>
      </LeftSectionWrapper>

      <RightSectionWrapper isUserSee={isUserSee}>
        <Title>
          About <PinkTitle>CLU</PinkTitle>
        </Title>
        <MTitle>Why choose CluCoin?</MTitle>

        <SubTitle>
          Our model rewards holders and saves money for charity each time someone sells. Our tokenomics include a CLU
          wallet with 1T, which is part of the distribution pool. CLU shareholders share 5% of each sell action. This is
          done to discourage selling and reward holders.
        </SubTitle>
      </RightSectionWrapper>
    </Wrapper>
  );
};

export default AboutUs;
