import React from 'react';
// constants
import { menuItems } from '@md-ui/headers/main/constants';
// components
import { MenuItem } from '@md-ui/menu-items/main';
// views
import { ItemsWrapper, IWrapper, Wrapper } from '@md-ui/headers/main/back-drop/views';

interface Props {
  onClick?: () => void;
  expanded: boolean;
}

const Backdrop: React.FC<Props> = ({ onClick, expanded }) => {
  return (
    <Wrapper expanded={expanded} onClick={onClick}>
      <ItemsWrapper expanded={expanded}>
        {menuItems.map(({ l, h }) => (
          <IWrapper key={l}>
            <MenuItem preset='middle' key={l} href={h} label={l} />
          </IWrapper>
        ))}
      </ItemsWrapper>
    </Wrapper>
  );
};

export default Backdrop;
