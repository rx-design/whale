<template>
  <SelectButton
    v-model="pair"
    :options="[
      PairEnum.TonUsdt,
      PairEnum.UsdtTon,
    ]"
  />
  <DataTable :value="[price]">
    <Column
      field="pair"
      header="Pair"
    />
    <Column
      field="rate"
      header="Rate"
    />
    <Column
      field="site"
      header="Site"
    />
    <Column
      field="time"
      header="Time"
    />
  </DataTable>
</template>

<script setup lang="ts">
import { PairEnum, type PriceType } from '~/types/price'

const pair = ref<PairEnum>(PairEnum.TonUsdt)
const price = ref<PriceType | null>(null)

watchEffect(async () => {
  const { data } = await useFetch<PriceType>(`/api/prices/${pair.value}`)
  price.value = data.value
})
</script>
