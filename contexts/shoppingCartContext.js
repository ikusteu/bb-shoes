import { useState, createContext } from "react"

export const ShoppingCartContext = createContext({
  contents: [],
  addItem: () => {},
  removeItem: () => {},
})

export const ShoppingCartProvider = ({ children }) => {
  const [state, setState] = useState([])

  const addItem = (item) => {
    setState([...state, item])
  }

  const removeItem = (item) => {
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
