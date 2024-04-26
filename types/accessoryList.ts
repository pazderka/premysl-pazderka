import type { ApiErrorInterface, ApiWarningInterface } from '~/types/api'

export interface AccessoryListInterface {
  id: number
  mainImagePath: string
  annotation: string
  name: string
  slug: string
}

export interface AccessoryListResponseInterface {
  errors: null | ApiErrorInterface[]
  warnings: null | ApiWarningInterface[]
  responseContent: null | { items: AccessoryListInterface[] }
}
