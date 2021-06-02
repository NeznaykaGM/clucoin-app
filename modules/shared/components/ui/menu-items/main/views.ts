import styled from 'styled-components';
import { linkButtonPresets, LinkButtonPresets } from '@md-ui/menu-items/main/presets';

export const MenuI = styled.div<{ active: boolean; preset?: LinkButtonPresets }>`
  position: relative;
  margin: 0px 25px;
  transition: 1s;

  a {
    text-shadow: ${({ theme, active }) => active && `0 0 20px ${theme.colors.pink100}`};

    color: ${({ theme, active }) => (active ? theme.colors.pink300 : theme.colors.white)};
  }

  ${({ preset }) => preset && linkButtonPresets[preset]};
`;
