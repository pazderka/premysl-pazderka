export const URLS = {
  api: {
    accessoryList: (productId: string) =>
      `/api-products/products/${productId}/accessories`,
    productDetail: (productId: string) => `/api-products/products/${productId}`,
  },
  view: {
    productDetail: (productId: string) => `/product/${productId}`,
  },
  external: {
    youtubeThumbnail: (videoId: string) =>
      `https://img.youtube.com/vi/${videoId}/default.jpg`,
  },
}
