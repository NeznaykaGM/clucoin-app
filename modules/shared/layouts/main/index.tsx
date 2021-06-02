import * as React from 'react';
// hooks
import { useRouter } from 'next/router';
// view components
import Footer from '@md-ui/footer';
import { Header } from '@md-ui/headers/main';
// views
import { HeaderBanner, Wrapper } from './views';

const MainLayout: React.FC = ({ children }) => {
  const { pathname } = useRouter();

  const [expanded, setExpanded] = React.useState(false);

  const toggleMenu = () => setExpanded((prevState) => !prevState);

  return (
    <>
      {pathname !== '/' && <HeaderBanner />}
      <Wrapper>
        <Header expanded={expanded} toggleMenu={toggleMenu} />

        {children}
        <Footer />
      </Wrapper>
    </>
  );
};

export { MainLayout };
