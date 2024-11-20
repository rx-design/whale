import type { ObjectId } from 'mongoose'

enum PairEnum {
  TonUsdt = 'TON_USDT',
  UsdtTon = 'USDT_TON',
}

enum SiteEnum {
  CoinGecko = 'CoinGecko',
  CoinMarketCap = 'CoinMarketCap',
}

type PriceType = {
  _id?: ObjectId
  pair: PairEnum
  rate: number
  site: SiteEnum
  time: Date
  __v?: number
}

export {
  type PriceType,
  PairEnum,
  SiteEnum,
}
