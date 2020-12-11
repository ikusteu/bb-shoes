export interface PhotoNavItemInterface {
  name: string
  image: string
  href: string
}

export interface MultiPageNavItemInterface {
  name: string
  href: string
}

export interface ProductInterface {
  id: number | string
  name: string
  price: number
  image: string
  category?: string
  style?: string[]
  tags?: string[]
  model?: string
}

export interface ShoppingCartItemInterface {
  product: ProductInterface
  count: number
}

export type CategoriesPaths = {
  params: {
    category: string
  }
}[]
