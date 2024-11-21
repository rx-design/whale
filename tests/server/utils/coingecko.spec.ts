import { describe, it, expect } from 'vitest'
import { fetchData } from './coingecko'
import { PairEnum } from '~/types/price'

const pairs = [
  PairEnum.TonUsdt,
]

describe.each(pairs)('CoinGecko API', (pair) => {
  it(`fetches crypto data for ${pair} pair`, async () => {
    const price = await fetchData(pair)

    expect(price.pair).toBe(pair)
    expect(price.site).toBe('CoinGecko')
    expect(typeof price.rate).toBe('number')
    expect(new Date(price.time).toString()).not.toBe('Invalid Date')
  })
})
