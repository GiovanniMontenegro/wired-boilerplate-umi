import SessionActionTypes from './constants';
import { createAction } from 'typesafe-actions';
import { IMenuProps } from '@/models/session';
import { IUser } from '@/store/Session/user.model';
import { ILoginRequest } from '@/services/login.service';

/**
 * Action for session model
 */
export const actions = {
  /**
   * Session actions
   */
  onLayoutChange: createAction(SessionActionTypes.CHANGE_LAYOUT_COLLAPSED as string, action => {
    return (payload?: {}) => action(payload);
  }),
  onChangeMenuSelected: createAction(SessionActionTypes.CHANGE_MENU_SELECTED as string, action => {
    return (payload?: { menu: IMenuProps }) => action(payload);
  }),
  onChangeLanguage: createAction(SessionActionTypes.CHANGE_LANGUAGE as string, action => {
    return (payload?: { language: string }) => action(payload);
  }),
  onSetSessionUser: createAction(SessionActionTypes.SET_SESSION_USER as string, action => {
    return (payload?: IUser) => action(payload);
  }),
  onLogin: createAction(SessionActionTypes.LOGIN_RQ as string, action => {
    return (payload?: ILoginRequest) => action(payload);
  }),
};
