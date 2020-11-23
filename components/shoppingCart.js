import cn from "classnames"
import { useContext } from "react"
import { ShoppingCartContext } from "../contexts/shoppingCartContext"
import Img from "./img"

export const ShoppingCartPreview = () => {
  const cart = useContext(ShoppingCartContext).contents
  const removeItem = useContext(ShoppingCartContext).removeItem
  return (
    <div
      className={cn(
        "fixed",
        "bottom-0",
        "right-0",
        "bg-primary-100",
        "border-2",
        "border-primary-500",
        "rounded-full",
        "mr-8",
        "mb-4",
        "p-1",
        "pr-3"
      )}
    >
      <div
        className={cn(
          "mx-2",
          "mt-1",
          "h-12",
          "w-12",
          "rounded-full",
          "overflow-hidden",
          "inline-block"
        )}
      ></div>
      {cart.map((item) => (
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
