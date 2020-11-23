import Product from "./product"
import cn from "classnames"
import Filters from "./filters"
import { useContext, useEffect, useState } from "react"
import { WebshopDisplayContext } from "../contexts/webshopDisplayContext"
import { SinglePageNavigation } from "./navigation"
// import { CSSTransition } from "react-transition-group"

const Shop = (props) => {
  /*
  
    props = {
      containerStyle: { tailwindCSS string } styles of grid container
      nameStyle: { tailwindCSS string } styles of item name
      priceStyle: { tailwindCSS string } styles of item price
      buttonStyle: { tailwindCSS string } styles of item button
    }

  */

  const [category, setCategory] = useContext(WebshopDisplayContext)
  // const [startAnimation, setStartAnimation] = useState(false)

  // useEffect(() => {
  //   setStartAnimation(true)
  //   setTimeout(() => {
  //     setStartAnimation(false)
  //   }, 1000)
  // }, [category])

  const categories = [
    {
      text: "Shoes",
      category: "shoes",
    },
    {
      text: "Boots",
      category: "boots",
    },
    {
      text: "Accessories",
      category: "accessories",
    },
  ]

  const shoe = {
    name: "Shoe",
    image: "/images/featured_temp.jpeg",
    price: "$100",
    id: 1234,
  }

  const boot = {
    name: "Boot",
    image: "/images/boot.jpeg",
    price: "$200",
    id: 1222,
  }

  const accessory = {
    name: "Belt",
    image: "/images/belt.jpeg",
    price: "$50",
    id: 1239,
  }

  const products = {
    shoes: [
      shoe,
      shoe,
      shoe,
      shoe,
      shoe,
      shoe,
      shoe,
      shoe,
      shoe,
      shoe,
      shoe,
      shoe,
    ],
    boots: [
      boot,
      boot,
      boot,
      boot,
      boot,
      boot,
      boot,
      boot,
      boot,
      boot,
      boot,
      boot,
    ],
    accessories: [
      accessory,
      accessory,
      accessory,
      accessory,
      accessory,
      accessory,
      accessory,
      accessory,
      accessory,
      accessory,
      accessory,
      accessory,
    ],
  }

  const styles = {
    containerStyle:
      props.containerStyle ||
      cn("xs:px-2", "sm:px-4", "md:px-6", "lg:px-8", "px-10"),
    itemStyle: cn("xl:col-span-3", "lg:col-span-3"),
  }

  return (
    <div
      className={cn(
        "py-8",
        "grid",
        "xs:grid-cols-4 xs:gap-2 xs:w-xs",
        "sm:grid-cols-8 sm:gap-4 sm:w-sm",
        "md:grid-cols-8 md:gap-8 md:w-md",
        "lg:grid-cols-12 lg:gap-8 lg:w-lg",
        "xl:grid-cols-12 xl:gap-16 xl:w-xl",
        "mx-auto"
      )}
    >
      <SinglePageNavigation
        className={cn(
          "rounded",
          "pl-4",
          "text-lg",
          "py-2",
          "col-span-6",
          "col-start-4",
          "h-12",
          "border-2",
          "border-secondary-300",
          "text-secondary-500",
          "flex",
          "justify-around",
          "items-center"
        )}
        items={categories}
      />
      <Filters
        containerStyle={cn(
          "rounded",
          "pl-4",
          "text-lg",
          "py-2",
          "col-span-8",
          "col-start-3",
          "h-12",
          "border-t-2",
          "border-b-2",
          "border-primary-100"
        )}
      />

      {products[category.category].map((item) => (
        <Product
          item={item}
          ratio="portrait"
          itemStyle={styles.itemStyle}
          button
          textStyle="text-center"
          buttonStyle="bg-secondary-300 border-secondary-300 focus:border-secondary-300 hover:text-secondary-300 mt-4 px-3 py-1"
        />
      ))}
    </div>
  )
}

export default Shop
