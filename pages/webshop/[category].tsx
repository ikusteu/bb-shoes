//import from local components
import Shop from "../../components/shop"
import Layout from "../../components/layout"

//import from lib
import { getCategoriesPaths } from "../../lib/categories"
import { getProducts, products } from "../../lib/products"

//import from types
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

export const getStaticPaths = async () => {
  const paths = getCategoriesPaths()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const products = getProducts(params.category)
  return {
    props: {
      products,
    },
  }
}
