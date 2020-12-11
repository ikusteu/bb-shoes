//import from packages
import cn from "classnames"
import { useContext, useState } from "react"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import { AnimatePresence, motion } from "framer-motion"

//import from contexts
import { ShoppingCartContext } from "../contexts/shoppingCartContext"
import { UnderConstructionContext } from "../contexts/underConstructionContext"

//import from local components
import Img from "./img"

//import from custom types
import { ShoppingCartItemInterface } from "../lib/customTypes"

// lower right preview of items
export const ShoppingCartPreview: React.FC = () => {
  // get cart context
  const cart = useContext(ShoppingCartContext)

  // explode cart
  const cartItems = cart.contents.items
  const totalPrice = cart.contents.totalPrice
  const removeItem = cart.removeItem

  // get under construction setter function
  const setUnderConstruction = useContext(UnderConstructionContext)[1]

  return (
    <div
      style={{
        width: `${5 + (cartItems.length && cartItems.length * 4 + 12)}rem`,
      }}
      className={cn(
        "fixed",
        "bottom-0",
        "right-0",
        "bg-primary-700",
        "shadow-2xl",
        "rounded-full",
        "h-20",
        "mr-8",
        "mb-4",
        "overflow-hidden",
        "flex justify-between items-center",
        "transition-all duration-300 ease-out"
      )}
    >
      <div
        className="w-20 flex justify-center cursor-pointer"
        onClick={(e) => {
          setUnderConstruction(e, true)
        }}
      >
        <ShoppingCartIcon fontSize="large" htmlColor="white" />
      </div>
      <AnimatePresence>
        {cartItems.map((item: ShoppingCartItemInterface, i) => (
          <motion.div
            exit={{ opacity: 0, scale: 0.9, y: 32 }}
            initial={{ opacity: 0, scale: 0.9, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            key={`${item.product.id}`}
            className={cn(
              // "-mx-4",
              "mt-1",
              "h-16",
              "w-16",
              "cursor-pointer",
              "relative"
            )}
            onClick={() => {
              removeItem(item)
            }}
          >
            <div className="rounded-full overflow-hidden h-full">
              <Img
                src={item.product.image}
                alt={item.product.name}
                additionalStyles="hover:opacity-50 transition-all duration-200 ease"
                fitHeight
                center
              />
            </div>
            <p
              style={{ textShadow: "0 0 6px white" }}
              className={cn(
                [item.count === 1 && "hidden"],
                "absolute bottom-0 left-1-fib text-xl font-bold"
              )}
            >
              x{item.count}
            </p>
          </motion.div>
        ))}
      </AnimatePresence>
      <div
        className={cn(
          [!cartItems.length && "hidden"],
          "h-full w-48 flex justify-center items-center"
        )}
      >
        <p className="text-2xl font-bold text-white">TOTAL: ${totalPrice}</p>
      </div>
    </div>
  )
}
