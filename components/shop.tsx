//import from packages
import { useContext, useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import cn from "classnames"

//import contexts
import { WebshopDisplayContext } from "../contexts/webshopDisplayContext"

//import components
import Product, { ProductItem } from "./product"

interface Props {
  className: string
  nameStyle: string
  priceStyle: string
  buttonStyle: string
  products: ProductItem[]
}

const Shop: React.FC<Props> = (props) => {
  /*
  
    props = {
      className: { tailwindCSS string } styles of grid container
      nameStyle: { tailwindCSS string } styles of item name
      priceStyle: { tailwindCSS string } styles of item price
      buttonStyle: { tailwindCSS string } styles of item button
      products: { array of objects }
    }

  */

  const styles = {
    className:
      props.className ||
      cn("xs:px-2", "sm:px-4", "md:px-6", "lg:px-8", "px-10"),
    itemStyle: cn("xl:col-span-3", "lg:col-span-3"),
  }

  return (
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
        {props.products.map((item, n) => (
          <Product
            key={`${item.name}-${n}`}
            item={item}
            itemRatio="portrait"
            itemStyle={styles.itemStyle}
            textStyle="text-center"
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default Shop
