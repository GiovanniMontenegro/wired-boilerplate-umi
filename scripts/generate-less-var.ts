/**
 * This script set-up the palette for the profile selected. The output is a .less file.
 * Variable names are specified inside theme.setting.ts.
 *
 * Variables are specified in this file https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less.
 *
 *  @author Dario Fiore
 */
const path = require('path');
const fs = require('fs-extra');

const theme = require(`../src/theme/theme.config.json`);
const themeLess = path.resolve(__dirname, '../src/theme/.theme/theme.less');

fs.writeFileSync(
  themeLess,
  Object.keys(theme)
    .map((key: any) => {
      const variable: string = theme[key];
      return `@${key}: ${variable};`;
    })
    .join('\r\n'),
);
