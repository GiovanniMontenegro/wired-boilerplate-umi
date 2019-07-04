import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { MenuProps } from '@/models/global';
import { ClickParam } from 'antd/lib/menu';
import router from 'umi/router';
import { formatMessage, setLocale, getLocale, FormattedMessage } from 'umi-plugin-locale';
import LocaleSwitcher from '../LocaleSwitcher';

const { Header } = Layout;

export interface MenuHeaderProps {
  menu: MenuProps;
  onChange: (menu: string) => void;
}

const MenuHeader: React.FC<MenuHeaderProps> = props => {
  const onChangeMenu = (selected: ClickParam) => {
    props.onChange(selected.key);
    router.push(`/${selected.key}`);
  };
  return (
    <Header style={{ padding: '0' }}>
      <Row>
        <Col offset="1" span="20">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[props.menu.selected]}
            style={{ lineHeight: '64px' }}
            onSelect={onChangeMenu}
          >
            <Menu.Item key="home">
              <FormattedMessage id="menu.home" />
            </Menu.Item>
            <Menu.Item key="settings">
              <FormattedMessage id="menu.settings" />
            </Menu.Item>
          </Menu>
        </Col>
        <Col span="2">
          <Row type="flex" justify="end">
            <LocaleSwitcher />
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default MenuHeader;
