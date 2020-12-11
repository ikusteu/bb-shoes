//import from local components
import Shop from "../../components/shop"
import Layout from "../../components/layout"

//import from lib
import { getProducts } from "../../lib/products"

//import from custom types
import { ProductInterface } from "../../lib/customTypes"

interface WebshopProps {
  products: ProductInterface[]
}

const Webshop: React.FC<WebshopProps> = ({ products }) => {
  return (
    <Layout>
      <Shop products={products} />
    </Layout>
  )
}

export default Webshop

export const getStaticProps = async () => {
  const products = getProducts("shoes")
  return {
    props: {
      products,
    },
  }
}
