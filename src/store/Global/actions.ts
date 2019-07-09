import GlobalActionTypes from './constants';
import { createAction } from 'typesafe-actions';
import { IMenuProps } from '@/models/global';

/**
 * Action for global model
 */
export const actions = {
  /**
   * Global actions
   */
  onLayoutChange: createAction(GlobalActionTypes.CHANGE_LAYOUT_COLLAPSED as string, action => {
    return (payload?: {}) => action(payload);
  }),
  onChangeMenuSelected: createAction(GlobalActionTypes.CHANGE_MENU_SELECTED as string, action => {
    return (payload?: { menu: IMenuProps }) => action(payload);
  }),
  onChangeLanguage: createAction(GlobalActionTypes.CHANGE_LANGUAGE as string, action => {
    return (payload?: { language: string }) => action(payload);
  }),
};
