import React from 'react';
import { Layout, Row, Col } from 'antd';
import MenuHeader from './Header';
import { IMenuProps } from '@/models/session';
import User, { IUser } from '@/store/Session/user.model';
import Redirect from 'umi/redirect';
const { Content } = Layout;

export interface MainLayoutProps {
  menu: IMenuProps;
  user: IUser;
  onChangeSelectedMenu: (menu: IMenuProps) => void;
  onChangeLanguage: (language: string) => void;
}

const MainLayout: React.FC<MainLayoutProps> = props => {
  const user: User = new User(props.user);
  console.log('Props: ', props, user.isAuthenticated());
  return (
    <Layout className="layout unselectable">
      {!user.isAuthenticated() && <Redirect to="/login" />}
      <Row className="slide-in-top header-layout">
        <Col>
          <MenuHeader
            menu={props.menu}
            onChange={props.onChangeSelectedMenu}
            onChangeLanguage={props.onChangeLanguage}
          />
        </Col>
      </Row>
      <Row type="flex">
        <Col style={{ padding: '0px 50px' }} span="24">
          <Content className="content-layout">{props.children}</Content>
        </Col>
      </Row>
    </Layout>
  );
};

export default MainLayout;
