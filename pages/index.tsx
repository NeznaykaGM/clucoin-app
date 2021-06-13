import * as React from 'react';
import { MainLayout } from '@md-modules/shared/layouts/main';
import Home from '@md-modules/coin-dex/home';

const HomePage = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
};

export default HomePage;
