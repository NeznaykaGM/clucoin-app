import React from 'react';
// libs
import styled from 'styled-components';
// components
import Welcome from '@md-modules/coin-dex/home/components/pages/welcome';
import AboutUs from '@md-modules/coin-dex/home/components/pages/about-us';
import OurPartners from '@md-modules/coin-dex/home/components/pages/our-partners';
import Statistics from '@md-modules/coin-dex/home/components/pages/statistics';
import Interface from '@md-modules/coin-dex/home/components/pages/interface';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Home = () => {
  return (
    <Wrapper>
      <Welcome />
      <AboutUs />
      <Statistics />
      <Interface />
      <OurPartners />
    </Wrapper>
  );
};

export default Home;
