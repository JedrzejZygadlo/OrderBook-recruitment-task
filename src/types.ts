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

export enum StatsProperty {
  RATE = "Rate",
  MIN = "Min(24h)",
  MAX = "Max(24h)",
  VOLUME = "Volume",
}

export enum BookOrderColumnName {
  COUNT = "COUNT",
  AMOUNT = "AMOUNT",
  TOTAL = "TOTAL",
  PRICE = "PRICE",
}

export enum ColumnType {
  BUY = "buy",
  SELL = "sell",
}

export enum OperationText {
  BUY = "Bid offers",
  SELL = "Ask offers",
  DEFAULT = "Offers",
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

export interface OrderData {
  ra: string;
  ca: string;
  sa: string;
  pa: string;
  co: number;
}

export type ChangeCurrencyFunction = (
  currencyType: string,
  newCurrencyValue: string
) => void;

export interface Stat {
  name: string;
  value: number;
}
