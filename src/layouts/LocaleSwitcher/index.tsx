import React from 'react';
import { getLocale, setLocale } from 'umi-plugin-locale';
import { Menu, Dropdown } from 'antd';
import { SelectParam } from 'antd/lib/menu';

export interface LocaleSwitcherProps {}

const changeLocale = (value: SelectParam) => {
  setLocale(value.key, false);
};

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = props => {
  const localeSelected = getLocale();

  const getFlagIcon = (country: string) => {
    let url = 'great-britain';
    if (country === 'it-IT') {
      url = 'italy';
    } else if (country === 'en-US') {
      url = 'great-britain';
    }
    return <img src={`https://img.icons8.com/color/36/000000/${url}.png`} />;
  };
  const menu = (
    <Menu onSelect={changeLocale} onClick={changeLocale}>
      <Menu.Item key="it-IT">{getFlagIcon('it-IT')}</Menu.Item>
      <Menu.Item key="en-US">{getFlagIcon('en-US')}</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a href="#">{getFlagIcon(localeSelected)}</a>
    </Dropdown>
  );
};

export default LocaleSwitcher;
/*
 */
