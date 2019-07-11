import React from 'react';
import { Layout, Row } from 'antd';

export interface LoginLayoutProps {}

const LoginLayout: React.FC<LoginLayoutProps> = props => {
  return (
    <Layout className="login-layout unselectable">
      <Row type="flex" align="middle" justify="center">
        {props.children}
      </Row>
    </Layout>
  );
};

export default LoginLayout;
