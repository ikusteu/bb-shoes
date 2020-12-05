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
  price: string
  image: string
  category?: string
  tags?: string[]
}

export type CategoriesPaths = {
  params: {
    category: string
  }
}[]
