import React from 'react';
import { Row, Col, Form, Input, Icon, Button } from 'antd';
import { FormProps } from 'antd/lib/form';

export interface LoginProps extends FormProps {}

const Login: React.FC<LoginProps> = props => {
  const { getFieldDecorator } = props.form;
  return (
    <Row className="login-container">
      <Col xs={24} xl={8}>
        <Row>{/*Insert something here*/}</Row>
      </Col>
      <Col xs={24} xl={16}>
        <Row type="flex">
          <Col
            xs={{ span: 22, offset: 1 }}
            lg={{ span: 12, offset: 6 }}
            xl={{ span: 10, offset: 12 }}
            xxl={{ span: 8 }}
            className="sign-up-container"
          >
            <Row type="flex" justify="center" className="sign-up-title">
              <Col xs="10" lg="6">
                Welcome
              </Col>
            </Row>
            <Row type="flex" justify="center" className="login-form">
              <Col span="22">
                <Form
                  onSubmit={() => {
                    console.log('ciao');
                  }}
                  className="login-form"
                >
                  <Form.Item>
                    {getFieldDecorator('username', {
                      rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                      <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        className="login-input"
                        placeholder="Username"
                      />,
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator('password', {
                      rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                      <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        className="login-input"
                        placeholder="Password"
                      />,
                    )}
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      Log in
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Form.create()(Login);
