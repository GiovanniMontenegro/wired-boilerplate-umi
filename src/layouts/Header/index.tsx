import React from 'react';
import { Layout, Menu } from 'antd';
import { MenuProps } from '@/models/global';

const { Header } = Layout;

export interface MenuHeaderProps {
  menu: MenuProps;
}

const MenuHeader: React.FC<MenuHeaderProps> = props => {
  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[props.menu.selected]}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Home</Menu.Item>
      </Menu>
    </Header>
  );
};

export default MenuHeader;
