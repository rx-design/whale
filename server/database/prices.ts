import type { PriceType } from '~/types/price'

async function getPrice() {
  return {
    pair: 'TON/USDT',
    rate: 5,
    site: 'CoinGecko',
    time: '',
  } as PriceType
}

async function update() {
  try {
    const price = await getPrice()

    await new Price(price).save()

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

export {
  update,
}
