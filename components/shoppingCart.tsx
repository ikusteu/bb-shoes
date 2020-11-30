//import from packages
import cn from "classnames"
import { useContext, useState } from "react"

//import from contexts
import { ShoppingCartContext } from "../contexts/shoppingCartContext"

//import from local components
import Img from "./img"
import { ProductItem } from "./product"

export const ShoppingCartPreview = () => {
  const cart = useContext(ShoppingCartContext).contents
  const removeItem = useContext(ShoppingCartContext).removeItem
  const [isEmpty, setIsempty] = useState(true)

  return (
    <div
      className={cn(
        "fixed",
        "bottom-0",
        "right-0",
        "bg-primary-800",
        "shadow-2xl",
        "rounded-full",
        // "h-20",
        // [isEmpty && "w-20"],
        "mr-8",
        "mb-4",
        "p-1"
      )}
    >
      {cart.map((item: ProductItem) => (
        <div
          className={cn(
            "-mx-1",
            "mt-1",
            "h-12",
            "w-12",
            "rounded-full",
            "overflow-hidden",
            "inline-block",
            "cursor-pointer",
            "relative"
          )}
          onClick={(e) => {
            e.preventDefault()
            removeItem(item)
          }}
        >
          <div className="absolute mt-3 ml-5 font-bold opacity-100 z-10">X</div>
          <Img
            key={item.id}
            src={item.image}
            additionalStyles="hover:opacity-50"
            fitHeight
            center
          />
        </div>
      ))}
      <h2 className={cn([!cart.length && "hidden"], "inline", "mx-4")}>
        TOTAL: $500
      </h2>
    </div>
  )
}
