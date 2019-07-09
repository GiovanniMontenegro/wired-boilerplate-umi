import React from 'react';
import { connect } from 'dva';
import { Layout, Row, Col } from 'antd';
import MenuHeader from './Header';
import { ConnectState, Dispatch } from '@/models/connect';
import { IMenuProps } from '@/models/global';
import { actions } from '@/store/Global/actions';
import { RouteComponentProps } from 'react-router';
import User, { IUser } from '@/class/User';
import Redirect from 'umi/redirect';
import LoginLayout from './LoginLayout';
const { Content } = Layout;
export interface BasicLayoutProps extends RouteComponentProps {
  menu: IMenuProps;
  language: string;
  user: IUser;
  onChangeSelectedMenu: (menu: IMenuProps) => void;
  onChangeLanguage: (language: string) => void;
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  if (props.location.pathname === '/login') {
    return <LoginLayout>{props.children}</LoginLayout>;
  }
  const user = new User(props.user);
  return (
    <Layout className="layout unselectable">
      <Row className="animate slideInDown header-layout">
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
      {!user.isAuthenticated() && <Redirect to="/login" />}
    </Layout>
  );
};

export default connect(
  ({ global }: ConnectState) => ({
    menu: global.menu,
    language: global.language,
    user: global.user,
  }),
  (dispatch: Dispatch) => ({
    onChangeSelectedMenu: (menu: IMenuProps) => dispatch(actions.onChangeMenuSelected({ menu })),
    onChangeLanguage: (language: string) => dispatch(actions.onChangeLanguage({ language })),
  }),
)(BasicLayout);
