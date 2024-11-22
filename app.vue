<template>
  <div class="p-16">
    <Select
      v-model="pair"
      :options="pairs"
      option-label="label"
      option-value="value"
    />
    <DataTable
      v-if="price"
      :value="[price]"
    >
      <Column
        field="pair"
        header="Pair"
        style="width: 25%"
      >
        <template #body="slotProps">
          {{ getDisplayPair(slotProps.data.pair) }}
        </template>
      </Column>
      <Column
        field="rate"
        header="Rate"
        style="width: 25%"
      />
      <Column
        field="site"
        header="Site"
        style="width: 25%"
      />
      <Column
        field="time"
        header="Time"
        style="width: 25%"
      >
        <template #body="slotProps">
          {{ getDisplayTime(slotProps.data.time) }}
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { formatISO } from 'date-fns'
import { PairEnum } from '~/types/price'
import type { PriceType } from '~/types/price'

const pairs = [
  { label: 'Toncoin (TON)', value: PairEnum.TonUsdt },
  { label: 'Tether (USDT)', value: PairEnum.UsdtTon },
]

const pair = ref<PairEnum>(PairEnum.TonUsdt)
const price = ref<PriceType | null>(null)

function getDisplayPair(pair: string) {
  return pair.split('_')[1]
}

function getDisplayTime(time: string) {
  return formatISO(new Date(time), { representation: 'time' })
}

watchEffect(async () => {
  const { data } = await useFetch<PriceType>(`/api/prices/${pair.value}`)
  price.value = data.value
})
</script>
