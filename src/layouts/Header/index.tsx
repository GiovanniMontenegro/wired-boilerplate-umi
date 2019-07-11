import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { IMenuProps } from '@/models/session';
import { ClickParam } from 'antd/lib/menu';
import router from 'umi/router';
import { FormattedMessage } from 'umi-plugin-locale';
import LocaleSwitcher from '../LocaleSwitcher';

const { Header } = Layout;

export interface MenuHeaderProps {
  menu: IMenuProps;
  onChange: (menu: IMenuProps) => void;
  onChangeLanguage: (language: string) => void;
}

const MenuHeader: React.FC<MenuHeaderProps> = props => {
  const onChangeMenu = (selected: ClickParam) => {
    props.onChange({
      collapsed: props.menu.collapsed,
      selected: selected.key,
    });
    router.push(`${selected.key}`);
  };
  return (
    <Header>
      <Row>
        <Col span="20">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[props.menu.selected]}
            style={{ lineHeight: '64px' }}
            onSelect={onChangeMenu}
          >
            <Menu.Item key="/">
              <FormattedMessage id="menu.home" />
            </Menu.Item>
            <Menu.Item key="/settings">
              <FormattedMessage id="menu.settings" />
            </Menu.Item>
          </Menu>
        </Col>
        <Col span="4">
          <Row type="flex" justify="end">
            <LocaleSwitcher onChangeLanguage={props.onChangeLanguage} />
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default MenuHeader;
