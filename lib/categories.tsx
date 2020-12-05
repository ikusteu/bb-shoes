//import from custom types
import {
  CategoriesPaths,
  PhotoNavItemInterface,
  MultiPageNavItemInterface,
} from "./customTypes"

//categories list
export const categories = ["Shoes", "Boots", "Accessories"]

//returns items list for webshop nav
export const generateCategoriesNav = (): MultiPageNavItemInterface[] =>
  categories.map((category) => ({
    name: category,
    href: "/webshop/" + category.toLowerCase(),
  }))

//returns items list for photo nav
export const generateCategoriesPhotoNav = (): PhotoNavItemInterface[] =>
  categories.map((category) => ({
    name: category,
    href: "/webshop/" + category.toLowerCase(),
    image: "/images/" + category.toLowerCase() + ".jpeg",
  }))

//returns categories for getStaticPaths
export const getCategoriesPaths = (): CategoriesPaths =>
  categories.map((category) => {
    return {
      params: {
        category: category.toLowerCase(),
      },
    }
  })
