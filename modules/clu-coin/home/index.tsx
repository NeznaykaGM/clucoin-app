import React from 'react';
// libs
import styled from 'styled-components';
// components
import Welcome from '@md-modules/clu-coin/home/components/pages/welcome';
import AboutUs from '@md-modules/clu-coin/home/components/pages/about-us';
import KeyFeatures from '@md-modules/clu-coin/home/components/pages/key-features';
import Statistics from '@md-modules/clu-coin/home/components/pages/statistics';
import Interface from '@md-modules/clu-coin/home/components/pages/interface';

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
      <KeyFeatures />
    </Wrapper>
  );
};

export default Home;
