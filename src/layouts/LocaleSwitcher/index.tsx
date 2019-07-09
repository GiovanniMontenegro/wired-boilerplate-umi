import React from 'react';
import { getLocale, setLocale } from 'umi-plugin-locale';
import { Menu, Dropdown } from 'antd';
import { SelectParam } from 'antd/lib/menu';
import LocalesSwitch, { Locales, ILocale } from './LocalesSwitch';

export interface LocaleSwitcherProps {
  onChangeLanguage: (language: string) => void;
}

const getFlagIcon = (country: string) => {
  const localeSwitch: LocalesSwitch = new LocalesSwitch();
  const locale: ILocale | undefined = localeSwitch.getLocale(country);

  if (locale) {
    return <img src={locale.url} />;
  }
  return;
};

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = props => {
  const localeSelected = getLocale();

  const changeLocale = (value: SelectParam) => {
    const newLocaleValue = value.key;
    if (localeSelected !== newLocaleValue) {
      props.onChangeLanguage(newLocaleValue);
      setLocale(value.key, false);
    }
  };

  const menu = (
    <Menu onSelect={changeLocale} onClick={changeLocale}>
      <Menu.Item key="en-US">{getFlagIcon(Locales.en_US)}</Menu.Item>
      <Menu.Item key="it-IT">{getFlagIcon(Locales.it_IT)}</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a href="#">{getFlagIcon(localeSelected)}</a>
    </Dropdown>
  );
};

export default LocaleSwitcher;
