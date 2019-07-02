import * as styledComponents from 'styled-components';

import * as theme from './theme.config.json';

export { theme };

const {
  default: styled,
  ThemeProvider,
  withTheme,
  keyframes,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<typeof theme>;

export { styled, ThemeProvider, withTheme, keyframes };
