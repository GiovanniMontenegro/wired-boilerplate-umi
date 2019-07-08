import React from 'react';
import { connect } from 'dva';
import { Layout, Row, Col } from 'antd';
import MenuHeader from './Header';
import { ConnectState, Dispatch } from '@/models/connect';
import { MenuProps } from '@/models/global';
import { actions } from '@/store/Global/actions';
import { RouteComponentProps } from 'react-router';
const { Content } = Layout;
export interface BasicLayoutProps extends RouteComponentProps {
  menu: MenuProps;
  onChangeSelectedMenu: (menu: string) => void;
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  if (props.location.pathname === '/login') {
    return <div>{props.children}</div>;
  }

  return (
    <Layout className="layout">
      <Row className="animate slideInDown header-layout">
        <Col>
          <MenuHeader menu={props.menu} onChange={props.onChangeSelectedMenu} />
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

export default connect(
  ({ global }: ConnectState) => ({
    menu: global.menu,
  }),
  (dispatch: Dispatch) => ({
    onChangeSelectedMenu: (menu: string) => dispatch(actions.onChangeMenuSelected(menu)),
  }),
)(BasicLayout);
