import { it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { fireEvent, screen } from '@testing-library/vue'
import App from '~/app.vue'

it('renders Select component', async () => {
  await renderSuspended(App)

  const select = screen.getByRole('combobox')

  expect(select.textContent).toBe('Toncoin (TON)')

  await fireEvent.click(select)

  const option = screen.getByText('Tether (USDT)')

  await fireEvent.click(option)

  expect(select.textContent).toBe('Tether (USDT)')
})
