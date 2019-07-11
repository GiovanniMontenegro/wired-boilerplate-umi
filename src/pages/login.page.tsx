import React, { SyntheticEvent } from 'react';
import { Row, Col, Form, Input, Icon, Button } from 'antd';
import { connect } from 'react-redux';
import { actions } from '@/store/Session/actions';
import { WrappedFormInternalProps } from 'antd/lib/form/Form';
import { Dispatch, ConnectState, Loading } from '@/models/connect';
import { isEmpty, has } from 'lodash';
import { ILoginRequest } from '../services/login.service';
import { FormattedMessage } from 'umi-plugin-locale';

export interface LoginProps extends WrappedFormInternalProps {
  onLogin: (loginRQ: ILoginRequest) => void;
  loading: Loading;
}

const isLoginLoading = (effects: { [key: string]: boolean | undefined }) => {
  if (effects && !isEmpty(effects) && has(effects, 'session/login')) {
    return effects['session/login'];
  }
  return false;
};

const Login: React.FC<LoginProps> = props => {
  const { getFieldDecorator } = props.form;

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e);
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('LoginRQ: ', values);
        props.onLogin(values);
      }
    });
  };
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
                <FormattedMessage id="login.title.form" />
              </Col>
            </Row>
            <Row type="flex" justify="center" className="login-form">
              <Col span="22">
                <Form onSubmit={onSubmit} className="login-form">
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
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      loading={isLoginLoading(props.loading.effects)}
                    >
                      <FormattedMessage id="login.button.login" />
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

export default connect(
  ({ session, loading }: ConnectState) => ({
    menu: session.menu,
    language: session.language,
    user: session.user,
    loading: loading,
  }),
  (dispatch: Dispatch) => ({
    onLogin: (loginRQ: ILoginRequest) => dispatch(actions.onLogin(loginRQ)),
  }),
)(Form.create()(Login));
