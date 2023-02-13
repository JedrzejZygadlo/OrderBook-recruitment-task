export interface CurrencyTile {
  name: string;
  shortcut: string;
  type: string;
  logo?: string;
  color?: string;
}

export interface CurrencySelect {
  type: string;
  currencies: CurrencyTile[];
}

export enum CurrencyType {
  FIRST = "first",
  SECOND = "second",
  BOTH = "both",
}

export enum CurrencySection {
  BASE = "base",
  CRYPTO = "crypto",
}
