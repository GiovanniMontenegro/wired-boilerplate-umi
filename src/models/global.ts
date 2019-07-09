import { Reducer } from 'redux';
import { IUser } from '@/class/User';

export interface GlobalModelState {
  menu: IMenuProps;
  user: IUser;
  language: string;
}
export interface IMenuProps {
  collapsed: boolean;
  selected: string;
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  reducers: {
    changeLayoutCollapsed: Reducer<GlobalModelState>;
    changeMenuSelected: Reducer<
      GlobalModelState,
      {
        payload: { menu: IMenuProps };
        type: 'global/changeMenuSelected';
      }
    >;
    setSessionUser: Reducer<
      GlobalModelState,
      { payload: { user: IUser }; type: 'global/setSessionUser' }
    >;
    changeLanguage: Reducer<
      GlobalModelState,
      { payload: { language: string }; type: 'global/changeLanguage' }
    >;
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

const GlobalModel: GlobalModelType = {
  namespace: 'global',
  state: {
    menu: {
      collapsed: false,
      selected: '/',
    },
    user: defaultUser,
    language: 'it-IT',
  },
  reducers: {
    changeLayoutCollapsed(state: GlobalModelState, { payload }): GlobalModelState {
      return {
        ...state,
        menu: { ...state.menu, collapsed: payload },
      };
    },
    changeMenuSelected(state: GlobalModelState, { payload }): GlobalModelState {
      return {
        ...state,
        menu: { ...state.menu, selected: payload.menu.selected },
      };
    },
    setSessionUser(
      state: GlobalModelState,
      { payload }: { payload: { user: IUser } },
    ): GlobalModelState {
      return {
        ...state,
        user: payload.user,
      };
    },
    changeLanguage(state: GlobalModelState, { payload }: { payload: { language: string } }) {
      return {
        ...state,
        language: payload.language,
      };
    },
  },
};

export default GlobalModel;
