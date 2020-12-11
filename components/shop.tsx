// imports from packages
import cn from "classnames"
import { AnimatePresence, motion } from "framer-motion"

// import local components
import { MultiPageNavigation } from "./navigation"
import Filters from "./filters"
import Product from "./product"

// import temp "static" assets i.e. lists, navItems etc.
import { generateCategoriesNav } from "../lib/categories"

// import custom types
import { ProductInterface } from "../lib/customTypes"

// local interfaces
interface ShopProps {
  products: ProductInterface[]
}

const Webshop: React.FC<ShopProps> = ({ products }) => {
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
            <motion.div
              key={`${item.name}-${n}`}
              className={cn("relative xl:col-span-3 lg:col-span-3")}
              exit={{ opacity: 0, scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.9, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <Product
                item={item}
                itemRatio="portrait"
                textStyle="text-center"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Webshop
