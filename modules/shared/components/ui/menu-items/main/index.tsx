import * as React from 'react';
// types
import { LinkButtonPresets } from '@md-ui/menu-items/main/presets';
// components
import Link from 'next/link';
// views
import { MenuI } from './views';

interface Props {
  href: string;
  label: string;
  active?: boolean;
  preset?: LinkButtonPresets;
}

const MenuItem: React.FC<Props> = ({ href, label, active = false, preset = 'default' }) => (
  <MenuI active={active} preset={preset}>
    <Link href={href} passHref>
      <a>{label}</a>
    </Link>
  </MenuI>
);

export { MenuItem };
