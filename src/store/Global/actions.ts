import GlobalActionTypes from './global.constants';
import { createAction } from 'typesafe-actions';

/**
 * Action for global model
 */
export const GlobalActions = {
  /**
   * Global actions
   */
  onLayoutChange: createAction(GlobalActionTypes.LAYOUT_CHANGE as string, action => {
    return (payload?: {}) => action(payload);
  }),
  onGlobalLayoutChange: createAction(GlobalActionTypes.GLOBAL_LAYOUT_CHANGE as string, action => {
    return (payload?: {}) => action(payload);
  }),
  changeTheme: createAction(GlobalActionTypes.CHANGE_THEME as string, action => {
    return () => action();
  }),
};
