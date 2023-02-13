import { CurrencyTile, CurrencyType } from "./types";
const currencies: CurrencyTile[] = [
  {
    name: "Bitcoin",
    shortcut: "BTC",
    type: CurrencyType.BOTH,
  },
  {
    name: "Ethereum",
    shortcut: "ETH",
    type: CurrencyType.FIRST,
  },
  {
    name: "Cardano",
    shortcut: "ADA",
    type: CurrencyType.FIRST,
  },
  {
    name: "XRP",
    shortcut: "XRP",
    type: CurrencyType.FIRST,
  },
  {
    name: "Stellar",
    shortcut: "XLM",
    type: CurrencyType.FIRST,
  },
  {
    name: "Solana",
    shortcut: "SOL",
    type: CurrencyType.FIRST,
  },
  {
    name: "Tether",
    shortcut: "USDT",
    type: CurrencyType.BOTH,
  },
  {
    name: "Polygon",
    shortcut: "MATIC",
    type: CurrencyType.FIRST,
  },
  {
    name: "Litecoin",
    shortcut: "LTC",
    type: CurrencyType.FIRST,
  },
  {
    name: "Polkadot",
    shortcut: "DOT",
    type: CurrencyType.FIRST,
  },
  {
    name: "Dogecoin",
    shortcut: "DOGE",
    type: CurrencyType.FIRST,
  },
  {
    name: "Chainlink",
    shortcut: "LINK",
    type: CurrencyType.FIRST,
  },
  {
    name: "Decentraland",
    shortcut: "MANA",
    type: CurrencyType.FIRST,
  },
  {
    name: "USD Coin",
    shortcut: "USDC",
    type: CurrencyType.BOTH,
  },
  {
    name: "Zcash",
    shortcut: "ZEC",
    type: CurrencyType.FIRST,
  },
  {
    name: "Avalanche",
    shortcut: "AVAX",
    type: CurrencyType.FIRST,
  },
  {
    name: "COSMOS HUB",
    shortcut: "ATOM",
    type: CurrencyType.FIRST,
  },
  {
    name: "Aave",
    shortcut: "AAVE",
    type: CurrencyType.FIRST,
  },
  {
    name: "Dash",
    shortcut: "DASH",
    type: CurrencyType.FIRST,
  },
  {
    name: "Bitcoin Cash",
    shortcut: "BCC",
    type: CurrencyType.FIRST,
  },
  {
    name: "Bitcoin Gold",
    shortcut: "BTG",
    type: CurrencyType.FIRST,
  },
  {
    name: "SushiSwap",
    shortcut: "SUSHI",
    type: CurrencyType.FIRST,
  },
  {
    name: "Uniswap",
    shortcut: "UNI",
    type: CurrencyType.FIRST,
  },
  {
    name: "Tezos",
    shortcut: "XTZ",
    type: CurrencyType.FIRST,
  },
  {
    name: "Dai",
    shortcut: "DAI",
    type: CurrencyType.FIRST,
  },
  {
    name: "Augur v2",
    shortcut: "REP",
    type: CurrencyType.FIRST,
  },
  {
    name: "PLN",
    shortcut: "PLN",
    type: CurrencyType.SECOND,
  },
  {
    name: "EUR",
    shortcut: "EUR",
    type: CurrencyType.SECOND,
  },
  {
    name: "USD",
    shortcut: "USD",
    type: CurrencyType.SECOND,
  },
  {
    name: "GBP",
    shortcut: "GBP",
    type: CurrencyType.SECOND,
  },
];

export const baseCurrencies = currencies.filter(
  (currency) =>
    currency.type === CurrencyType.SECOND || currency.type === CurrencyType.BOTH
);

export const cryptoCurrencies = currencies.filter(
  (currency) =>
    currency.type === CurrencyType.FIRST || currency.type === CurrencyType.BOTH
);
