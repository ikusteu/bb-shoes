// import from packages
import { useContext } from "react"
import Link from "next/link"
import cn from "classnames"

// import from local components
import Img from "./img"
import Button from "./button"

// import from contexts
import { ShoppingCartContext } from "../contexts/shoppingCartContext"

// import from custom types
import { ProductInterface } from "../lib/customTypes"

// local interfaces
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

// main component function
const Product: React.FC<ProductProps> = (props) => {
  // set addItem function from shopping cart context
  const addItem = useContext(ShoppingCartContext).addItem

  // calculate height to keep constant ratio
  const childStyle = {
    paddingBottom: !props.itemRatio
      ? "100%"
      : props.itemRatio === "portrait"
      ? "133%"
      : "75%",
    height: 0,
  }

  // set default styles, passed styles override these
  const styles = {
    itemStyle:
      props.itemStyle ||
      (props.itemRatio === "portrait" &&
        "xs:w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5") ||
      "xs:w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4",

    nameStyle:
      props.nameStyle ||
      (props.itemRatio === "portrait" && "text-3xl") ||
      "text-2xl",

    priceStyle:
      props.priceStyle ||
      (props.itemRatio === "portrait" && "text-2xl font-hairline") ||
      "text-lg",

    innerPadding:
      props.innerPadding || cn("sm:p-1", "md:p-1", "lg:p-2", "xl:p-2"),
  }

  // set button from props if exists, else set default
  const button = props.button || (
    <Button
      className="text-lg px-2 py-1"
      text="Add to Cart"
      onClick={() => {
        addItem(props.item)
      }}
    />
  )

  return (
    // <Link>
    <div className="relative" style={childStyle}>
      <div className="absolute w-full h-full">
        <Img
          src={props.item.image}
          alt={`${props.item.category} ${props.item.name}`}
          additionalStyles={cn("h-1/2", [props.imageStyle])}
          fitHeight
          center
        />
        <div className={cn([props.textStyle])}>
          <h3 className={styles.nameStyle}>{props.item.name}</h3>
          <p className={styles.priceStyle}>${props.item.price}</p>
          {button}
        </div>
      </div>
    </div>
    // </Link>
  )
}

export default Product
