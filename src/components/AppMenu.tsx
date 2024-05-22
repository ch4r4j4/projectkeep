// AppMenu.tsx
import React from 'react';
import { Drawer, List, ListItem } from '@mui/material';
import AppMenuItem from './AppMenuItem';

interface MenuItem {
  id: number;
  label: string;
  link: string;
}

const menuItems: MenuItem[] = [
  { id: 1, label: 'Menu Item 1', link: '/menu-item-1' },
  { id: 2, label: 'Menu Item 2', link: '/menu-item-2' },
  { id: 3, label: 'Menu Item 3', link: '/menu-item-3' },
  // Add more menu items here
];

const AppMenu = () => {
  return (
    <Drawer anchor="left" open={true}>
      <List>
        {menuItems.map((item) => (
          <AppMenuItem key={item.id} item={item} />
        ))}
      </List>
    </Drawer>
  );
};

export default AppMenu;