import * as React from 'react';
// constants
import { menuItems } from './constants';
// view components
import { Button } from '@md-ui/button/main';
import { Logo } from '@md-ui/logos/main';
import { MenuItem } from '@md-ui/menu-items/main';
// views
import { IWrapper, LWrapper, RWrapper, Wrapper } from './views';

const Header = () => {
  return (
    <Wrapper>
      <IWrapper>
        <LWrapper>
          <Logo />
        </LWrapper>
        <RWrapper>
          {menuItems.map(({ l, h }) => (
            <MenuItem key={l} href={h} label={l} />
          ))}
          <Button>Buy Now</Button>
        </RWrapper>
      </IWrapper>
    </Wrapper>
  );
};

export { Header };
