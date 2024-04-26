<script setup lang="ts">
import { URLS } from '~/Urls'
import type { AccessoryListResponseInterface } from '~/types/accessoryList'

interface PropsInterface {
  productId: string
}

const props = defineProps<PropsInterface>()
const config = useRuntimeConfig()

const isLoading = ref(false)
const accessoryList = ref<null | AccessoryListResponseInterface>(null)

const truncatedAccessoryList = computed(
  () => accessoryList.value?.responseContent?.items.slice(0, 4) ?? [],
)

onMounted(async () => {
  isLoading.value = true

  const response = await makeHttpClientRequest<AccessoryListResponseInterface>(
    URLS.api.accessoryList(props.productId),
    config.public.API_X_PB_SCOPE_ACCESSORY,
  )

  if (response === null) {
    isLoading.value = false
    return
  }

  accessoryList.value = response
  isLoading.value = false
})
</script>

<template>
  <header>
    <h2
      v-if="truncatedAccessoryList.length"
      class="text-3xl pb-6"
    >
      Příslušenství
    </h2>
  </header>
  <section
    v-if="isLoading"
    class="w-full mx-auto p-4 bg-white rounded shadow-lg"
  >
    <CommonSkeletonLoader />
  </section>
  <section
    v-else
    class="flex flex-col lg:flex-row gap-4"
  >
    <AccessoryListItem
      v-for="accessoryItem in truncatedAccessoryList"
      :key="accessoryItem.id"
      :product-id="accessoryItem.slug"
      :image-path="accessoryItem.mainImagePath"
      :annotation="accessoryItem.annotation"
      :name="accessoryItem.name"
    />
  </section>
</template>
