import React from 'react';
// components
import { Logo } from '@md-ui/logos/main';
// views
import {
  Container,
  CopyrightMenuWrapper,
  CopyrightWrapper,
  IBWrapper,
  IWrapper,
  LogoWrapper,
  MenuItemWrapper,
  MIWrapper,
  Wrapper
} from '@md-ui/footer/views';
import { MenuItem } from '@md-ui/menu-items/main';
import { copyrightMenuItems, footerMenuItems } from '@md-ui/headers/main/constants';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <IBWrapper>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </IBWrapper>

        <div>
          <MIWrapper>
            {footerMenuItems.map(({ l, h }) => (
              <IWrapper key={l}>
                <MenuItem preset='small' href={h} label={l} />
              </IWrapper>
            ))}
          </MIWrapper>
        </div>

        <CopyrightWrapper>
          <div>© CluCoin Inc - All Rights Reserved 2020</div>

          <CopyrightMenuWrapper>
            {copyrightMenuItems.map(({ l, h }) => (
              <MenuItemWrapper key={l}>
                <MenuItem preset='small' href={h} label={l} />
              </MenuItemWrapper>
            ))}
          </CopyrightMenuWrapper>
        </CopyrightWrapper>
      </Container>
    </Wrapper>
  );
};

export default Footer;
