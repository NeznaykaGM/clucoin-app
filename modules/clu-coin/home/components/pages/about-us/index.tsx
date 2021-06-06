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
  LeftSectionWrapper,
  PinkSubTitle
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
          About <PinkTitle>COIN DeX</PinkTitle>
        </Title>
        <MTitle>Why choose us?</MTitle>

        <SubTitle>
          <PinkSubTitle>Our team </PinkSubTitle> specialized on searching and creating opportunities for any varieties
          of cloud mining(advertisement mining, traffic mining etc…). We will use a very small amount of power of your
          PC for it, just turn on our software, after what you can go to any game from our partners which You will
          prefer, and start earning your money.
        </SubTitle>
        <SubTitle>
          <PinkSubTitle>We are</PinkSubTitle> first team who have created perfect opportunity “Play and Earn” without
          destroying the power of computer systems for crypto mining. We have created universal algorithm for
          alternative mining which doesn`t consummate huge amount of PC capacity.
        </SubTitle>
        <SubTitle>
          We guaranty that You will not have any lagging because of our software in time of your game experience!!!
        </SubTitle>
      </RightSectionWrapper>
    </Wrapper>
  );
};

export default AboutUs;
