import React from 'react';
import { connect } from 'dva';
import { ThemeProvider, theme } from '@/theme';
import { Layout } from 'antd';
import MenuHeader from './Header';
import { ConnectState, Dispatch } from '@/models/connect';
import { MenuProps } from '@/models/global';

export interface BasicLayoutProps {
  menu: MenuProps;
  dispatch: Dispatch;
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <MenuHeader menu={props.menu} />
        <Layout>{props.children}</Layout>
      </Layout>
    </ThemeProvider>
  );
};

export default connect(({ global }: ConnectState) => ({
  menu: global.menu,
}))(BasicLayout);
