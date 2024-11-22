import { fetchData } from '~/server/utils/coingecko'
import { PairEnum } from '~/types/price'
import type { PriceType } from '~/types/price'

async function update() {
  try {
    const price = await fetchData(PairEnum.TonUsdt)

    await new Price(price).save()

    /**
     * @todo Use another endpoint.
     */
    await new Price({
      pair: PairEnum.UsdtTon,
      rate: 1 / price.rate,
      site: price.site,
      time: price.time,
    }).save()

    return {
      result: 'success',
    }
  }
  catch {
    return {
      result: 'error',
    }
  }
}

async function getLatest(pair: string) {
  return await Price.findOne({ pair }).sort({ time: -1 }) as PriceType | null
}

export {
  update,
  getLatest,
}
