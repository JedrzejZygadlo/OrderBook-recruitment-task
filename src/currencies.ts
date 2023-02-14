import { CurrencyTile, CurrencyType } from "./types";
const currencies: CurrencyTile[] = [
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
  {
    name: "Bitcoin",
    shortcut: "BTC",
    type: CurrencyType.BOTH,
    availableOnMarkets: ["PLN", "EUR", "USD", "GBP", "USDT", "USDC"],
  },
  {
    name: "Tether",
    shortcut: "USDT",
    type: CurrencyType.BOTH,
    availableOnMarkets: ["PLN", "EUR", "USD", "GBP"],
  },
  {
    name: "USD Coin",
    shortcut: "USDC",
    type: CurrencyType.BOTH,
    availableOnMarkets: ["PLN", "EUR", "USD", "GBP", "USDT"],
  },
  {
    name: "Ethereum",
    shortcut: "ETH",
    type: CurrencyType.FIRST,
    availableOnMarkets: ["PLN", "EUR", "USD", "GBP", "USDT", "BTC", "USDC"],
  },
  {
    name: "Cardano",
    shortcut: "ADA",
    type: CurrencyType.FIRST,
    availableOnMarkets: ["PLN", "EUR", "USDT"],
  },
  {
    name: "XRP",
    shortcut: "XRP",
    type: CurrencyType.FIRST,
    availableOnMarkets: ["PLN", "EUR", "USDT", "BTC"],
  },
  {
    name: "Stellar",
    shortcut: "XLM",
    type: CurrencyType.FIRST,
    availableOnMarkets: ["PLN", "EUR", "USDT", "BTC"],
  },
  {
    name: "Solana",
    shortcut: "SOL",
    type: CurrencyType.FIRST,
    availableOnMarkets: ["PLN", "EUR", "USDT"],
  },
  {
    name: "Polygon",
    shortcut: "MATIC",
    type: CurrencyType.FIRST,
    availableOnMarkets: ["PLN", "USDT"],
  },
  {
    name: "Litecoin",
    shortcut: "LTC",
    type: CurrencyType.FIRST,
    availableOnMarkets: ["PLN", "EUR", "USDT", "BTC"],
  },
  {
    name: "Polkadot",
    shortcut: "DOT",
    type: CurrencyType.FIRST,
    availableOnMarkets: ["PLN", "EUR", "USDT", "BTC"],
  },
  {
    name: "Dogecoin",
    shortcut: "DOGE",
    type: CurrencyType.FIRST,
    availableOnMarkets: ["PLN", "EUR", "USDT"],
  },
  {
    name: "Chainlink",
    shortcut: "LINK",
    type: CurrencyType.FIRST,
    availableOnMarkets: ["PLN", "USDT"],
  },
  {
    name: "Decentraland",
    shortcut: "MANA",
    type: CurrencyType.FIRST,
    availableOnMarkets: ["PLN", "EUR", "USDT"],
  },
  {
    name: "Zcash",
    shortcut: "ZEC",
    type: CurrencyType.FIRST,
    availableOnMarkets: ["PLN", "EUR", "USDT"],
  },
  {
    name: "Avalanche",
    shortcut: "AVAX",
    type: CurrencyType.FIRST,
    availableOnMarkets: ["PLN", "EUR", "USDT"],
  },
  {
    name: "COSMOS HUB",
    shortcut: "ATOM",
    type: CurrencyType.FIRST,
    availableOnMarkets: ["PLN", "EUR", "USDT"],
  },
  {
    name: "Aave",
    shortcut: "AAVE",
    type: CurrencyType.FIRST,
    availableOnMarkets: ["PLN", "EUR", "USDT"],
  },
  {
    name: "Dash",
    shortcut: "DASH",
    type: CurrencyType.FIRST,
    availableOnMarkets: ["PLN", "EUR", "USDT"],
  },
  {
    name: "Bitcoin Cash",
    shortcut: "BCC",
    type: CurrencyType.FIRST,
    availableOnMarkets: ["PLN", "EUR", "USDT"],
  },
  {
    name: "Bitcoin Gold",
    shortcut: "BTG",
    type: CurrencyType.FIRST,
    availableOnMarkets: ["PLN", "EUR", "USDT"],
  },
  {
    name: "SushiSwap",
    shortcut: "SUSHI",
    type: CurrencyType.FIRST,
    availableOnMarkets: ["PLN", "EUR", "USDT"],
  },
  {
    name: "Uniswap",
    shortcut: "UNI",
    type: CurrencyType.FIRST,
    availableOnMarkets: ["PLN", "EUR", "USDT"],
  },
  {
    name: "Tezos",
    shortcut: "XTZ",
    type: CurrencyType.FIRST,
    availableOnMarkets: ["PLN", "EUR", "USDT"],
  },
  {
    name: "Dai",
    shortcut: "DAI",
    type: CurrencyType.FIRST,
    availableOnMarkets: ["PLN", "EUR", "USDT", "USDC"],
  },
  {
    name: "Augur v2",
    shortcut: "REP",
    type: CurrencyType.FIRST,
    availableOnMarkets: ["PLN", "EUR"],
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
