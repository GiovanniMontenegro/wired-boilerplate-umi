export enum Locales {
  it_IT = 'it-IT',
  en_US = 'en-US',
}
export interface ILocale {
  code: Locales;
  url: string;
}
export default class LocalesSwitch {
  private localesMap: Map<string, ILocale>;
  constructor() {
    this.localesMap = new Map();
    this.localesMap.set('it-IT', {
      code: Locales.it_IT,
      url: 'https://img.icons8.com/color/36/000000/italy.png',
    });
    this.localesMap.set('en-US', {
      code: Locales.en_US,
      url: 'https://img.icons8.com/color/36/000000/great-britain.png',
    });
  }

  getLocale(locale: Locales | string): ILocale | undefined {
    return this.localesMap.get(locale);
  }
}
