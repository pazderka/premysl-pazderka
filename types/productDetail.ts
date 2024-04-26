import type { ApiErrorInterface, ApiWarningInterface } from './api'

export interface BadgeInterface {
  name: string
  backgroundColor: string | null
  textColor: string | null
}

export interface BrandInterface {
  code: string
  annotation: string
  imagePath: string
  name: string
}

export interface PriceInterface {
  currencyCode: string
  discountInPercents: number
  originalPrice: number
  price: number
}

export interface StockAvailabilityInterface {
  maxStoredCount: number
}

export interface GalleryItemInterface {
  isMain: boolean
  path: string
  type: 'PRODUCT_GALLERY_ITEM_TYPE_IMAGE' | 'PRODUCT_GALLERY_ITEM_TYPE_YOUTUBE'
}

export interface ProductDetailInterface {
  isWithAccessories: boolean
  name: string
  badges: {
    items: BadgeInterface[]
  }
  annotation: string
  code: string
  brand: BrandInterface
  price: PriceInterface
  stockAvailability: StockAvailabilityInterface
  gallery: {
    items: GalleryItemInterface[]
  }
}

export interface ProductDetailResponseInterface {
  errors: null | ApiErrorInterface[]
  warnings: null | ApiWarningInterface[]
  responseContent: null | ProductDetailInterface
}
