import { Reducer } from 'redux';

export interface GlobalModelState {
  menu: MenuProps;
}
export interface MenuProps {
  collapsed: boolean;
  selected: string;
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  reducers: {
    changeLayoutCollapsed: Reducer<GlobalModelState>;
    changeMenuSelected: Reducer<GlobalModelState>;
  };
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',
  state: {
    menu: {
      collapsed: false,
      selected: '/',
    },
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
        menu: { ...state.menu, selected: payload },
      };
    },
  },
};

export default GlobalModel;
