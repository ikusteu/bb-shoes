//import from packages
import { useState, createContext } from "react"

type UnderConstructionContextType = [
  { underConstruction: boolean },
  (e: React.MouseEvent<any>, a: boolean) => void
]

export const UnderConstructionContext = createContext<UnderConstructionContextType>(
  [{ underConstruction: false }, (e: React.MouseEvent<any>, a: boolean) => {}]
)

export const UnderConstructionContextProvider = ({ children }) => {
  const [state, setState] = useState(false)
  const setUnderConstruction = (e: React.MouseEvent<any>, a: boolean) => {
    setState(a)
  }

  return (
    <UnderConstructionContext.Provider
      value={[{ underConstruction: state }, setUnderConstruction]}
    >
      {children}
    </UnderConstructionContext.Provider>
  )
}
