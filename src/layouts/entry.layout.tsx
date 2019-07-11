import React from 'react';
import { connect } from 'dva';
import { ConnectState, Dispatch } from '@/models/connect';
import { IMenuProps } from '@/models/session';
import { actions } from '@/store/Session/actions';
import { RouteComponentProps } from 'react-router';
import { IUser } from '@/store/Session/user.model';
import LoginLayout from './login.layout';
import MainLayout from './main.layout';

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
  return (
    <MainLayout
      user={props.user}
      menu={props.menu}
      onChangeLanguage={props.onChangeLanguage}
      onChangeSelectedMenu={props.onChangeSelectedMenu}
    >
      {props.children}
    </MainLayout>
  );
};

export default React.memo(
  connect(
    ({ session }: ConnectState) => ({
      menu: session.menu,
      language: session.language,
      user: session.user,
    }),
    (dispatch: Dispatch) => ({
      onChangeSelectedMenu: (menu: IMenuProps) => dispatch(actions.onChangeMenuSelected({ menu })),
      onChangeLanguage: (language: string) => dispatch(actions.onChangeLanguage({ language })),
    }),
  )(BasicLayout),
);
