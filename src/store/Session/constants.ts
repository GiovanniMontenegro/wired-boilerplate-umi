/**
 *  Each action has a corresponding type, which the reducer knows and picks up on.
 */

enum SessionActionTypes {
  CHANGE_LAYOUT_COLLAPSED = 'session/changeLayoutCollapsed',
  CHANGE_MENU_SELECTED = 'session/changeMenuSelected',
  CHANGE_LANGUAGE = 'session/changeLanguage',
  SET_SESSION_USER = 'setSessionUser',
  LOGIN_RQ = 'session/login',
}

export default SessionActionTypes;
