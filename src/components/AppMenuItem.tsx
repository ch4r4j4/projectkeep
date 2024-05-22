// AppMenuItem.tsx
import React from 'react';
import { ListItem, ListItemText, ListItemIcon , Collapse } from '@mui/material';
import { NavLink } from 'react-router-dom';

interface AppMenuItemProps {
  item: {
    id: string;
    label: string;
    link?: string;
    submenu?: AppMenuItemProps[];
  };
}

const AppMenuItem: React.FC<AppMenuItemProps> = ({ item }) => {
  return (
    <ListItem button={true}>
      <ListItemIcon>#</ListItemIcon>
      <ListItemText primary={item.label} />
      {item.submenu && (
        <Collapse in={true}>
          {item.submenu.map((subitem) => (
            <AppMenuItem key={subitem.id} item={subitem} />
          ))}
        </Collapse>
      )}
      {item.link && (
        <NavLink to={item.link}>
          <ListItem button={true}>{item.label}</ListItem>
        </NavLink>
      )}
    </ListItem>
  );
};

export default AppMenuItem;