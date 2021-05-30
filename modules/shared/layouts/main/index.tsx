import * as React from 'react';
// view components
import Footer from '@md-ui/footer';
import { Header } from '@md-ui/headers/main';
// views
import { Wrapper } from './views';

const MainLayout: React.FC = ({ children }) => {
  const [expanded, setExpanded] = React.useState(false);

  const toggleMenu = () => setExpanded((prevState) => !prevState);

  return (
    <Wrapper>
      <Header expanded={expanded} toggleMenu={toggleMenu} />
      {children}
      <Footer />
    </Wrapper>
  );
};

export { MainLayout };
