import { defineMongooseModel } from '#nuxt/mongoose'
import type { PriceType } from '~/types/price'

export const Price = defineMongooseModel<PriceType>('Price', {
  pair: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  site: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
})
