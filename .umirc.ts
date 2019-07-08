import { IConfig } from 'umi-types';
import fs from 'fs';
import lessToJs from 'less-vars-to-js';

// Read the less file in as string
const paletteLess = fs.readFileSync('./src/styles/theme/index.less', 'utf8');
// Pass in file contents
const palette = lessToJs(paletteLess, { resolveVariables: true, stripPrefix: true });

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  theme: palette,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        title: 'wired-boilerplate-umi',
        dll: true,
        locale: {
          enable: true,
          default: 'en-US',
        },
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
  routes: [
    {
      path: '/',
      component: '../layouts/index.tsx',
      routes: [
        { path: '/', component: './index.tsx' },
        { path: '/login', component: './login/index.tsx' },
        { path: '/settings', component: './index.tsx' },
      ],
    },
  ],
};

export default config;
