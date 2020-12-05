import { AnimatePresence } from "framer-motion"
import { ShoppingCartProvider } from "../contexts/shoppingCartContext"
import { WebshopDisplayProvider } from "../contexts/webshopDisplayContext"
import "../styles/globals.css"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ShoppingCartProvider>
      <Component {...pageProps} />
      {/* <WebshopDisplayProvider>
      </WebshopDisplayProvider> */}
    </ShoppingCartProvider>
  )
}

export default MyApp
