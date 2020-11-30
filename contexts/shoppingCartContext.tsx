//import from packages
import { useState, createContext } from "react"

//import from local components
import { ProductItem } from "../components/product"

interface ShoppingCart {
  contents: ProductItem[]
  addItem: (item: ProductItem) => void
  removeItem: (item: ProductItem) => void
}

export const ShoppingCartContext = createContext<ShoppingCart>({
  contents: [],
  addItem: () => {},
  removeItem: () => {},
})

export const ShoppingCartProvider = ({ children }) => {
  const [state, setState] = useState<ProductItem[]>([])

  const addItem = (item: ProductItem) => {
    setState([...state, item])
  }

  const removeItem = (item: ProductItem) => {
    const hardCopy = state.filter((cartItem) => item !== cartItem)
    setState(hardCopy)
  }

  return (
    <ShoppingCartContext.Provider
      value={{ contents: state, addItem: addItem, removeItem: removeItem }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
