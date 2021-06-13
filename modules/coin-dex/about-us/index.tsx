import React from 'react';
import { SubTitle, Title, Wrapper } from '@md-modules/coin-dex/about-us/views';
import ImagesSlider from '@md-modules/coin-dex/about-us/components/slider';
import { imagesState } from '@md-modules/coin-dex/about-us/constants';

const AboutUs = () => {
  return (
    <Wrapper>
      <Title>About Us</Title>

      <ImagesSlider images={imagesState} />

      <SubTitle>
        We are mining enthusiast which history for BTC mining have started form 2012, But in 2016 when our crypto mining
        farm showed us that our systems is not able to have good competitiveness for a long time, and we have 2 ways of
        solutions- or unstoppable investments for new ASIC and other crypto farms, or we must create something new.
        After 2016, after KNC miners bankruptcy we decided to close our farm because we didn`t have any competititve
        chance to Chinese mining farms. Due next years we have created alternative systems for alternative cloud mining-
        mining in advertisement watching, mining for bounty programs, mining for traffic-advertisments solutions.
        Throughout 2020 we have created universal software made according to the principle “Plug in and play”
      </SubTitle>
    </Wrapper>
  );
};

export default AboutUs;
