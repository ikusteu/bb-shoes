//import from packages
import cn from "classnames"
import Link from "next/link"
import { motion } from "framer-motion"

//import from local components
import Img from "./img"

//import from custom types
import { ProductInterface } from "../lib/customTypes"

interface ProductProps {
  item: ProductInterface
  button?: JSX.Element
  imageStyle?: string
  itemStyle?: string
  textStyle?: string
  nameStyle?: string
  priceStyle?: string
  itemRatio?: "portrait" | "landscape"
  innerPadding?: string
}

const Product: React.FC<ProductProps> = (props) => {
  const childStyle = {
    paddingBottom: !props.itemRatio
      ? "100%"
      : props.itemRatio === "portrait"
      ? "133%"
      : "75%",
    height: 0,
  }

  const styles = {
    itemStyle:
      (props.itemRatio === "portrait" &&
        "xs:w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5") ||
      "xs:w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4",

    nameStyle: (props.itemRatio === "portrait" && "text-3xl") || "text-2xl",

    priceStyle:
      (props.itemRatio === "portrait" && "text-2xl font-hairline") || "text-lg",

    buttonStyle:
      (props.itemRatio === "portrait" && "text-xl p-2") || "text-lg p-1",

    innerPadding:
      props.innerPadding || cn("sm:p-1", "md:p-1", "lg:p-2", "xl:p-2"),

    addStyles(element: string) {
      if (props[element]) {
        this[element] =
          props[element][0] === "+"
            ? `${this[element]} ${props[element].substring(1)}`
            : props[element]
      }
    },
  }

  styles.addStyles("itemStyle")
  styles.addStyles("nameStyle")
  styles.addStyles("priceStyle")
  styles.addStyles("buttonStyle")

  return (
    <Link href="">
      <motion.div
        exit={{ opacity: 0, scale: 0.9 }}
        initial={{ opacity: 0, scale: 0.9, y: 32 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className={cn("relative", [styles.itemStyle], [styles.innerPadding])}
      >
        <div className="relative" style={childStyle}>
          <div className="absolute w-full h-full">
            <Img
              src={props.item.image}
              alt={`${props.item.category} ${props.item.name}`}
              additionalStyles={cn(
                "h-1/2", // border-primary border-solid"
                [props.imageStyle]
              )}
              fitHeight
              center
            />
            <div className={cn([props.textStyle])}>
              <h3 className={styles.nameStyle}>{props.item.name}</h3>
              <p className={styles.priceStyle}>{props.item.price}</p>
              {props.button}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default Product
