<script setup lang="ts">
import type { BadgeInterface } from '~/types/productDetail'

interface PropsInterface {
  badge: BadgeInterface
}

const props = defineProps<PropsInterface>()

// Tailwind classes cannot be constructed dynamically in easy way
// because of tree-shaking
const bgColor = computed(() => props.badge.backgroundColor ?? '#000')
const textColor = computed(() => props.badge.textColor ?? '#fff')
</script>

<template>
  <span
    :class="$style.badge"
    class="px-2 py-1 text-sm"
  >
    {{ badge.name }}
  </span>
</template>

<style lang="scss" module>
.badge {
  background-color: v-bind(bgColor);
  color: v-bind(textColor);
}
</style>
