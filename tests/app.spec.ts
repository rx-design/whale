import { it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { screen } from '@testing-library/vue'
import App from '~/app.vue'
import { PairEnum } from '~/types/price'

it('renders app', async () => {
  await renderSuspended(App)

  // Buttons
  expect(screen.getByText(PairEnum.TonUsdt)).toBeDefined()
  expect(screen.getByText(PairEnum.UsdtTon)).toBeDefined()

  // Table
  expect(screen.getByText('Pair')).toBeDefined()
  expect(screen.getByText('Rate')).toBeDefined()
  expect(screen.getByText('Site')).toBeDefined()
  expect(screen.getByText('Time')).toBeDefined()
})
