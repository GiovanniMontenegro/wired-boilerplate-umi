import { Reducer } from 'redux';
import { IUser } from '@/store/Session/user.model';
import { Effect } from './connect';

import { actions } from '@/store/Session/actions';
import router from 'umi/router';
import { loginRequest } from '@/services/login.service';

export interface SessionModelState {
  menu: IMenuProps;
  user: IUser;
  language: string;
}
export interface IMenuProps {
  collapsed: boolean;
  selected: string;
}

export interface SessionModelType {
  namespace: 'session';
  state: SessionModelState;
  reducers: {
    changeLayoutCollapsed: Reducer<SessionModelState>;
    changeMenuSelected: Reducer<
      SessionModelState,
      {
        payload: { menu: IMenuProps };
        type: 'session/changeMenuSelected';
      }
    >;
    setSessionUser: Reducer<SessionModelState, { payload: IUser; type: 'session/setSessionUser' }>;
    changeLanguage: Reducer<
      SessionModelState,
      { payload: { language: string }; type: 'session/changeLanguage' }
    >;
  };
  effects: {
    login: Effect;
  };
}

const defaultUser: IUser = {
  id: '',
  username: '',
  role: '',
  access: {
    login: '0',
    logout: '0',
  },
};

const SessionModel: SessionModelType = {
  namespace: 'session',
  state: {
    menu: {
      collapsed: false,
      selected: '/',
    },
    user: defaultUser,
    language: 'it-IT',
  },
  reducers: {
    changeLayoutCollapsed(state: SessionModelState, { payload }): SessionModelState {
      return {
        ...state,
        menu: { ...state.menu, collapsed: payload },
      };
    },
    changeMenuSelected(state: SessionModelState, { payload }): SessionModelState {
      return {
        ...state,
        menu: { ...state.menu, selected: payload.menu.selected },
      };
    },
    setSessionUser(state: SessionModelState, { payload }: { payload: IUser }): SessionModelState {
      return {
        ...state,
        user: payload,
      };
    },
    changeLanguage(state: SessionModelState, { payload }: { payload: { language: string } }) {
      return {
        ...state,
        language: payload.language,
      };
    },
  },
  effects: {
    *login({ payload }, { put, call }) {
      // Call saveTodoToServer, then trigger `add` action to save data
      const response = yield call(loginRequest, payload);
      if (response) {
        console.log('LogIn Response: ', response);
        yield put(actions.onSetSessionUser(response));
        yield call(router.push, '/');
      }
    },
  },
};

export default SessionModel;
