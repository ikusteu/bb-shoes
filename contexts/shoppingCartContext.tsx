//import from packages
import { useState, createContext } from "react"

//import from custom types
import { ProductInterface, ShoppingCartItemInterface } from "../lib/customTypes"

// local interfaces
interface ShoppingCartState {
  items: ShoppingCartItemInterface[]
  totalCount: number
  totalPrice: number
}

interface ShoppingCart {
  contents: ShoppingCartState
  addItem: (item: ProductInterface) => void
  removeItem: (item: ShoppingCartItemInterface) => void
}

// create context
export const ShoppingCartContext = createContext<ShoppingCart>({
  contents: null,
  addItem: () => {},
  removeItem: () => {},
})

// create provider
export const ShoppingCartProvider = ({ children }) => {
  // init state with empty cart
  const [state, setState] = useState<ShoppingCartState>({
    items: [],
    totalCount: 0,
    totalPrice: 0,
  })

  // create add to cart function
  const addItem = (product: ProductInterface) => {
    // set new totalPrice & totalCount
    const totalPrice = state.totalPrice + product.price
    const totalCount = state.totalCount + 1

    // control adding +1 to existing or push new product to array
    let isAdded = false

    // if product in cart add +1
    const items = state.items.map((item) => {
      if (item.product === product) {
        item.count++
        isAdded = true
      }
      return item
    })

    // if product not in cart, push to arary
    if (!isAdded) items.push({ product, count: 1 })

    // update state with new values
    setState({ items, totalCount, totalPrice })
  }

  // create remove function
  const removeItem = (item: ShoppingCartItemInterface) => {
    // set new totalPrice & totalCount
    const totalPrice = state.totalPrice - item.product.price * item.count
    const totalCount = state.totalCount - item.count

    // remove item from cart
    const items = state.items.filter((cartItem) => item !== cartItem)

    // update cart
    setState({ items, totalPrice, totalCount })
  }

  return (
    <ShoppingCartContext.Provider
      value={{ contents: state, addItem, removeItem }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
