//imports from packages
import cn from "classnames"
import { AnimatePresence } from "framer-motion"

//import local components
import { MultiPageNavigation } from "./navigation"
import Filters from "./filters"
import Product from "./product"

//import temp "static" assets i.e. lists, navItems etc.
import { generateCategoriesNav } from "../lib/categories"

//import custom types
import { ProductInterface } from "../lib/customTypes"

interface RegisterProps {
  products: ProductInterface[]
}

const Webshop: React.FC<RegisterProps> = ({ products }) => {
  return (
    <>
      <MultiPageNavigation
        className={cn(
          "col-span-6 col-start-4",
          "h-12",
          "mt-8 pl-4 py-2",
          "text-lg text-secondary-500",
          "flex items-center justify-around",
          "rounded border-2 border-secondary-300",
          "cursor-pointer"
        )}
        items={generateCategoriesNav()}
      />
      <Filters
        className={cn(
          "col-span-8 col-start-3",
          "h-12 pl-4 py-2",
          "rounded border-t-2 border-b-2 border-primary-100",
          "text-lg"
        )}
      />
      <div
        className={cn(
          "col-span-12",
          "mx-auto py-8",
          "grid",
          "grid-main",
          "xs:w-xs sm:w-sm md:w-md ls:w-lg xl:w-xl"
        )}
      >
        <AnimatePresence exitBeforeEnter>
          {products.map((item, n: number) => (
            <Product
              key={`${item.name}-${n}`}
              item={item}
              itemRatio="portrait"
              itemStyle="xl:col-span-3 lg:col-span-3"
              textStyle="text-center"
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Webshop
