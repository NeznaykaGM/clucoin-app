import React from 'react';
// constants
import { menuItems } from '@md-ui/headers/main/constants';
// components
import { MenuItem } from '@md-ui/menu-items/main';
// views
import { IWrapper, Wrapper } from '@md-ui/headers/main/back-drop/views';

interface Props {
  onClick?: () => void;
}

const Backdrop: React.FC<Props> = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      {menuItems.map(({ l, h }) => (
        <IWrapper key={l}>
          <MenuItem key={l} href={h} label={l} />
        </IWrapper>
      ))}
    </Wrapper>
  );
};

export default Backdrop;
