import React from 'react';
import { connect } from 'dva';
import { ThemeProvider, theme } from '@/theme';
import { Layout, Row, Col } from 'antd';
import MenuHeader from './Header';
import { ConnectState, Dispatch } from '@/models/connect';
import { MenuProps } from '@/models/global';
import { actions } from '@/store/Global/actions';

export interface BasicLayoutProps {
  menu: MenuProps;
  onChangeSelectedMenu: (menu: string) => void;
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Row>
          <Col>
            <MenuHeader menu={props.menu} onChange={props.onChangeSelectedMenu} />
          </Col>
        </Row>
        <Row>
          <Layout>{props.children}</Layout>
        </Row>
      </Layout>
    </ThemeProvider>
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
