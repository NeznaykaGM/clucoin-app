import * as React from 'react';
// hooks
import { useRouter } from 'next/router';
// constants
import { menuItems } from './constants';
// view components
import { Button } from '@md-ui/button/main';
import { Logo } from '@md-ui/logos/main';
import { MenuItem } from '@md-ui/menu-items/main';
// views
import { IWrapper, LWrapper, RWrapper, Wrapper } from './views';

const BUTTON_STYLES = { ml: 30 };

const Header = () => {
  const { pathname } = useRouter();
  const [isScroll, setIsScroll] = React.useState(false);

  React.useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 20) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const isRouteActive = (route: string) => {
    const isHome = route === '/' && route === pathname;

    if (isHome) {
      return true;
    } else if (route !== '/') {
      return pathname.replace(/[/]/g, ' ').includes(route.replace(/[/]/g, ' '));
    }
    return false;
  };

  return (
    <Wrapper isScroll={isScroll}>
      <IWrapper>
        <LWrapper>
          <Logo />
        </LWrapper>
        <RWrapper>
          {menuItems.map(({ l, h }) => (
            <MenuItem key={l} href={h} active={isRouteActive(h)} label={l} />
          ))}
          <Button buttonStyle={BUTTON_STYLES}>Buy Now</Button>
        </RWrapper>
      </IWrapper>
    </Wrapper>
  );
};

export { Header };
