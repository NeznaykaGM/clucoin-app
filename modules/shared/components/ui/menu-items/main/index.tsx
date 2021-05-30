import * as React from 'react';
// components
import Link from 'next/link';
// libs
import styled from 'styled-components';

interface Props {
  href: string;
  label: string;
  active: boolean;
}

const MenuI = styled.div<{ active: boolean }>`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 16px;
  position: relative;
  margin: 0px 26px;
  transition: 1s;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -6px;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.pink300};

    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }

  a {
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    text-shadow: ${({ theme, active }) => active && `0 0 20px ${theme.colors.pink100}`};

    color: ${({ theme, active }) => (active ? theme.colors.pink300 : theme.colors.white)};

    &:hover {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.pink300};
    }
  }
`;

const MenuItem: React.FC<Props> = ({ href, label, active = false }) => (
  <MenuI active={active}>
    <Link href={href} passHref>
      <a>{label}</a>
    </Link>
  </MenuI>
);

export { MenuItem };
