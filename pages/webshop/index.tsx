//imports from packages
import { useContext } from "react"
import cn from "classnames"

//import contexts
import { WebshopDisplayContext } from "../../contexts/webshopDisplayContext"

//import local components
import Layout from "../../components/layout"
import Shop from "../../components/shop"
import { SinglePageNavigation } from "../../components/navigation"
import Filters from "../../components/filters"

//import temp "static" assets i.e. lists, navItems etc.
import { products } from "../../tempAssets/products.js"
import { webshopCategories as categories } from "../../tempAssets/navItems"

const Webshop: React.FC = () => {
  //get current show category from context
  const [category, setCategory] = useContext(WebshopDisplayContext)

  return (
    <Layout>
      <SinglePageNavigation
        className={cn(
          "col-span-6 col-start-4",
          "h-12",
          "mt-8 pl-4 py-2",
          "text-lg text-secondary-500",
          "flex items-center justify-around",
          "rounded border-2 border-secondary-300"
        )}
        items={categories}
      />
      <Filters
        className={cn(
          "col-span-8 col-start-3",
          "h-12 pl-4 py-2",
          "rounded border-t-2 border-b-2 border-primary-100",
          "text-lg"
        )}
      />
      <Shop products={products[category.category]} />
    </Layout>
  )
}

export default Webshop
