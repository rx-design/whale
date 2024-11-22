import { getLatest } from '~/server/database/prices'

export default defineEventHandler(async (event) => {
  const pair = getRouterParam(event, 'pair')

  if (!pair) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required parameter: pair',
    })
  }

  const price = await getLatest(pair)

  if (!price) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Price data unavailable for the specified pair.',
    })
  }

  return price
})
