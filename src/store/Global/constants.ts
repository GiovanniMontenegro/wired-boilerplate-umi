/**
 *  Each action has a corresponding type, which the reducer knows and picks up on.
 */

enum GlobalActionTypes {
  LAYOUT_CHANGE = 'layoutChange',
  GLOBAL_LAYOUT_CHANGE = 'global/layoutChange',
  CHANGE_THEME = 'theme/changeTheme',
}

export default GlobalActionTypes;
