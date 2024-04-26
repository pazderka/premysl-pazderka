<script setup lang="ts">
import { URLS } from '~/Urls'
import type { GalleryItemInterface } from '~/types/productDetail'

interface PropsInterface {
  items: GalleryItemInterface[]
}
const config = useRuntimeConfig()
const props = defineProps<PropsInterface>()

const mainItemPath = computed(
  () =>
    config.public.API_BASE_URL + props.items.find(item => item.isMain)!.path,
)
const sideItemPaths = computed(() =>
  props.items
    .filter(item => !item.isMain)
    .map(item => ({
      url: generateItemUrl(item),
      type: item.type,
    })),
)
const generateItemUrl = (item: GalleryItemInterface) => {
  // Standard jpg, construct url for it
  if (item.type === 'PRODUCT_GALLERY_ITEM_TYPE_IMAGE') {
    return config.public.API_BASE_URL + item.path
  }
  // Youtube video, construct thumbnail
  const videoId = new URL(item.path).searchParams.get('v') as string
  return URLS.external.youtubeThumbnail(videoId)
}
</script>

<template>
  <div class="pt-[3rem] md:pt-[6rem]">
    <NuxtImg
      quality="80"
      fit="inside"
      height="696px"
      width="696px"
      :src="mainItemPath"
    />
  </div>
  <div class="flex gap-12 pt-[5rem] max-w-[30rem]">
    <div
      v-for="item in sideItemPaths"
      :key="item.url"
      class="flex flex-col justify-center"
    >
      <NuxtImg
        quality="20"
        :class="{
          'w-[20rem]': item.type === 'PRODUCT_GALLERY_ITEM_TYPE_YOUTUBE',
        }"
        class="cursor-pointer"
        :src="item.url"
      />
    </div>
  </div>
</template>
