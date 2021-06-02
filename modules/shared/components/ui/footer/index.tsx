import React from 'react';
// components
import { Logo } from '@md-ui/logos/main';
import IconButton from '@md-ui/button/icon-button';
// views
import {
  Container,
  CopyrightMenuWrapper,
  CopyrightWrapper,
  IBWrapper,
  IconsWrapper,
  IconWrapper,
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

          <IconsWrapper>
            <IconWrapper>
              <IconButton src='/static/images/telegram.svg' />
            </IconWrapper>
            <IconWrapper>
              <IconButton src='/static/images/telegram.svg' />
            </IconWrapper>
            <IconWrapper>
              <IconButton src='/static/images/telegram.svg' />
            </IconWrapper>
            <IconWrapper>
              <IconButton src='/static/images/telegram.svg' />
            </IconWrapper>
          </IconsWrapper>
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
          <div>© CluCoin Inc - All Rights Reserved</div>

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
