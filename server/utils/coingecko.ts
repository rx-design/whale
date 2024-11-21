import { coins, exchanges } from '~/assets/coingecko.json'
import { SiteEnum } from '~/types/price'
import type { Coin, CryptoData } from '~/types/coingecko'
import type { PriceType } from '~/types/price'
import { SiteEnum } from '~/types/price'

function getCoin(symbol: string) {
  const coin: Coin | undefined = coins
    .find(c => c.symbol === symbol.toLowerCase())

  if (!coin) {
    throw new Error('Invalid cryptocurrency symbol provided.')
  }

  return coin
}

async function fetchData(pair: string) {
  const { coinGeckoApiKey: apiKey } = useRuntimeConfig()

  const symbols = pair.split('_')
  const coins = symbols.map(getCoin)

  const coinId = coins[0].id
  const exchangeId = exchanges[0].id

  const { tickers } = await $fetch<CryptoData>(`/exchanges/${exchangeId}/tickers`, {
    baseURL: 'https://api.coingecko.com/api/v3/',
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'x-cg-demo-api-key': apiKey,
    },
    query: {
      coin_ids: coinId,
    },
  })

  const ticker = tickers.find(({ base, target }) =>
    base === symbols[0] && target === symbols[1])

  if (!ticker) {
    throw new Error('Failed to fetch data from CoinGecko API.')
  }

  return {
    pair,
    rate: ticker.last,
    site: SiteEnum.CoinGecko,
    time: new Date(ticker.timestamp),
  } as PriceType
}

export {
  fetchData,
}
