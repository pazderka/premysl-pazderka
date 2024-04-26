<script setup lang="ts">
import type { BrandInterface } from "~/types/productDetail";

interface PropsInterface {
  brand: BrandInterface;
  code: string;
  annotation: string;
}

defineProps<PropsInterface>();

const config = useRuntimeConfig();
</script>

<template>
  <section>
    <span class="text-[#b2b2b2] text-sm">Kód produktu: {{ code }}</span>
    <div class="flex items-center text-[#b2b2b2] gap-5 py-4 text-sm">
      <span>Značka</span>
      <NuxtImg
        width="26"
        height="40"
        alt=""
        quality="20"
        :src="config.public.API_BASE_URL + brand.imagePath" />
      <span>{{ brand.name }}</span>
    </div>
    <p class="text-[#666666] text-sm">
      {{ annotation }}
    </p>
  </section>
</template>
