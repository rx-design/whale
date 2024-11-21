type Market = {
  name: string
  identifier: string
  has_trading_incentive: boolean
}

type ConvertedData = {
  btc: number
  eth: number
  usd: number
}

type Ticker = {
  base: string
  target: string
  market: Market
  last: number
  volume: number
  converted_last: ConvertedData
  converted_volume: ConvertedData
  trust_score: string
  bid_ask_spread_percentage: number
  timestamp: string
  last_traded_at: string
  last_fetch_at: string
  is_anomaly: boolean
  is_stale: boolean
  trade_url: string
  token_info_url: string | null
  coin_id: string
  target_coin_id: string
}

/**
 * @see {@link https://docs.coingecko.com/reference/coins-id-tickers}
 * @see {@link https://docs.coingecko.com/reference/exchanges-id-tickers}
 */
type CryptoData = {
  name: string
  tickers: Ticker[]
}

/**
 * @see {@link https://docs.coingecko.com/reference/coins-list}
 */
type Coin = {
  id: string
  symbol: string
  name: string
}

/**
 * @see {@link https://docs.coingecko.com/reference/exchanges-list}
 */
type Exchange = {
  id: string
  name: string
}

export {
  type Coin,
  type CryptoData,
  type Exchange,
}
