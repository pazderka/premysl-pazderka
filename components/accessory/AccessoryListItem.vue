<script setup lang="ts">
import { URLS } from "~/Urls";

interface PropsInterface {
  imagePath: string;
  annotation: string;
  name: string;
  productId: string;
}

const props = defineProps<PropsInterface>();
const router = useRouter();
const config = useRuntimeConfig();

const imageUrl = computed(
  () => config.public.API_BASE_URL + "/" + props.imagePath
);

const onClickItem = async () => {
  await router.push(URLS.view.productDetail(props.productId));
};
</script>

<template>
  <article
    class="cursor-pointer border border-solid border-[#b2b2b2] px-8 pb-8"
    @click="onClickItem">
    <NuxtImg
      loading="lazy"
      class="mx-auto"
      width="200px"
      height="270px"
      :src="imageUrl" />
    <header>
      <h3 class="py-6 text-2xl">
        {{ name }}
      </h3>
    </header>
    <p class="text-sm text-[#666666] whitespace-normal line-clamp-4">
      {{ annotation }}
    </p>
  </article>
</template>
