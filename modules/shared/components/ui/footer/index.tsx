import React from 'react';
// components
import { Logo } from '@md-ui/logos/main';
import IconButton from '@md-ui/button/icon-button';
// views
import { Container, IBWrapper, IconsWrapper, IconWrapper, LogoWrapper, MIWrapper, Wrapper } from '@md-ui/footer/views';
import { MenuItem } from '@md-ui/menu-items/main';
import { footerMenuItems } from '@md-ui/headers/main/constants';

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
              <MenuItem preset='small' key={l} href={h} label={l} />
            ))}
          </MIWrapper>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Footer;
