<script setup lang="ts">
import type {
  PriceInterface,
  StockAvailabilityInterface,
} from '~/types/productDetail'

interface PropsInterface {
  price: PriceInterface
  stockAvailabilitiy: StockAvailabilityInterface
}

const props = defineProps<PropsInterface>()
const currencyMap: Record<string, string> = {
  CZK: 'Kč',
}

const stockInfo = computed(() => {
  const storedCount = props.stockAvailabilitiy.maxStoredCount
  if (storedCount > 5) {
    return 'Skladem více než 5 ks'
  }
  return `Skladem ${storedCount} ks`
})

const originalPrice = computed(() =>
  props.price.originalPrice.toLocaleString(),
)
const currentPrice = computed(() => props.price.price.toLocaleString())
const currencyCode = computed(() => currencyMap[props.price.currencyCode])
</script>

<template>
  <article class="bg-[#fafafa] px-6 py-4 flex flex-col gap-2">
    <span class="text-[#1dca62] text-xs">
      {{ stockInfo }}
    </span>
    <div class="flex gap-2 items-center">
      <span class="line-through text-[#666666] text-sm">{{ originalPrice }} {{ currencyCode }}</span>
      <NuxtImg
        width="24"
        height="24"
        src="/img/info-circle.svg"
      />
      <ProductBadge
        :badge="{
          name: `${price.discountInPercents}%`,
          backgroundColor: '#000000',
          textColor: '#ffffff',
        }"
      />
    </div>
    <span>{{ currentPrice }} {{ currencyCode }}</span>
  </article>
</template>
