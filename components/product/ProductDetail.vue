<script setup lang="ts">
import { URLS } from "~/Urls";
import type { ProductDetailResponseInterface } from "~/types/productDetail";

const route = useRoute();
const config = useRuntimeConfig();

const { data, error } = await useHttpServer<ProductDetailResponseInterface>(
  URLS.api.productDetail(route.params.productId as string),
  config.public.API_X_PB_SCOPE_PRODUCT
);

const content = data.value?.responseContent ?? null;
const networkError = error.value;
const apiError = data.value?.errors ?? null;

if (content === null || networkError !== null || apiError !== null) {
  throw new Error();
}

const accessoryListElement = ref<HTMLElement | null>(null);
const showAccessories = ref(false);

onMounted(() => {
  // Delay loading of accessories to the point it appears in viewport
  const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        showAccessories.value = true;
      }
    });
  });

  intersectionObserver.observe(accessoryListElement.value as HTMLElement);
});
</script>

<template>
  <article class="flex flex-col md:flex-row md:justify-center md:gap-3">
    <section class="w-full">
      <ProductGallery :items="content.gallery.items" />
    </section>
    <section class="flex flex-col gap-5 w-full order-first md:order-last">
      <header>
        <h1 class="text-[52px]">
          {{ content.name }}
        </h1>
      </header>
      <mark class="inline-flex gap-2 flex-wrap bg-transparent">
        <ProductBadge
          v-for="badge in content.badges.items"
          :key="badge.name"
          :badge="badge" />
      </mark>
      <ProductDescription
        :brand="content.brand"
        :code="content.code"
        :annotation="content.annotation" />
      <ProductPrice
        :price="content.price"
        :stock-availabilitiy="content.stockAvailability" />
    </section>
  </article>
  <aside
    v-if="content.isWithAccessories"
    ref="accessoryListElement"
    class="mt-16">
    <AccessoryList
      v-if="showAccessories"
      :product-id="route.params.productId as string" />
  </aside>
</template>
