import { useState, createContext } from "react"

export const WebshopDisplayContext = createContext([{}, () => {}])

export const WebshopDisplayProvider = ({ children }) => {
  const [category, setCategory] = useState("shoes")

  return (
    <WebshopDisplayContext.Provider value={[{ category }, setCategory]}>
      {children}
    </WebshopDisplayContext.Provider>
  )
}
