import { update } from '~/server/database/prices'

export default defineTask({
  meta: {
    name: 'prices:update',
    description: 'Update prices',
  },
  async run() {
    return update()
  },
})
