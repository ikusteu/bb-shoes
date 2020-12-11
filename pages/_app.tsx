//import styles
import "../styles/globals.css"
import "../styles/slick/slick.css"
import "../styles/slick/slick-theme.css"

//import from contexts
import { ShoppingCartProvider } from "../contexts/shoppingCartContext"
import { UnderConstructionContextProvider } from "../contexts/underConstructionContext"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ShoppingCartProvider>
      <UnderConstructionContextProvider>
        <Component {...pageProps} />
      </UnderConstructionContextProvider>
    </ShoppingCartProvider>
  )
}

export default MyApp
