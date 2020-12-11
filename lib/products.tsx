//import from custom Types
import { ProductInterface } from "./customTypes"

//returns products based on category for getStaticProps
export const getProducts = (category: string): ProductInterface[] =>
  products[category]

export const getFavorites = () => products["shoes"]

const shoe = {
  name: "Shoe",
  image: "/images/featured_temp.webp",
  price: 100,
  id: 1234,
}

const boot = {
  name: "Boot",
  image: "/images/boot.webp",
  price: 200,
  id: 1222,
}

const accessory = {
  name: "Belt",
  image: "/images/belt.webp",
  price: 50,
  id: 1239,
}

export const products = {
  shoes: [
    shoe,
    shoe,
    shoe,
    shoe,
    shoe,
    shoe,
    shoe,
    shoe,
    shoe,
    shoe,
    shoe,
    shoe,
  ],
  boots: [
    boot,
    boot,
    boot,
    boot,
    boot,
    boot,
    boot,
    boot,
    boot,
    boot,
    boot,
    boot,
  ],
  accessories: [
    accessory,
    accessory,
    accessory,
    accessory,
    accessory,
    accessory,
    accessory,
    accessory,
    accessory,
    accessory,
    accessory,
    accessory,
  ],
}
