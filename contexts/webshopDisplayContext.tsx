//import from packages
import { useState, createContext } from "react"

export const WebshopDisplayContext = createContext([{}, () => {}])

export const WebshopDisplayProvider = ({ children }) => {
  const [filters, setSilters] = useState({
    categories: ["shoes"],
    styles: [],
    sizes: [],
  })

  return (
    <WebshopDisplayContext.Provider value={[{ category }, setCategory]}>
      {children}
    </WebshopDisplayContext.Provider>
  )
}
