import { ShoppingCartProvider } from "../contexts/shoppingCartContext"
import { WebshopDisplayProvider } from "../contexts/webshopDisplayContext"
import "../styles/globals.scss"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ShoppingCartProvider>
      <WebshopDisplayProvider>
        <Component {...pageProps} />
      </WebshopDisplayProvider>
    </ShoppingCartProvider>
  )
}

export default MyApp
