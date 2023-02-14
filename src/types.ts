import { Ref } from "vue";
export interface CurrencyTile {
  name: string;
  shortcut: string;
  type: string;
  availableOnMarkets?: string[];
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

export enum CurrencySelectHeader {
  BASE_CURRENCY_HEADER = "Choose base market currency:",
  CRYPTO_CURRENCY_HEADER = "Choose cryptocurrency:",
  DEFAULT_CURRENCY_HEADER = "Choose currency:",
}

export interface CurrencySelectProps {
  currenciesToDisplay: CurrencyTile[];
  currencySection: string;
}

export interface CurrencyTileProps {
  currency: CurrencyTile;
  currencySection: string;
}

export interface SvgProps {
  name: string;
  width: number;
  height: number;
  viewBox?: string;
}

export type InjectionText = Ref<string> | undefined;

export type ChangeCurrencyFunction = (
  currencyType: string,
  newCurrencyValue: string
) => void;
