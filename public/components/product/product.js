import cn from "classnames"
import Img from "../img"
import Link from "next/Link"
import Button from "../button"

const Product = (props) => {
  /*
        props = {
            item: { name: {string}, price: {string}, image: {url}, category: {string} tags: {[string, ...]*} } item object,
            imageStyle: { tailwind string }
            itemStyle: { tailwindCSS string if [0] === + add styles without changing default } style for full item
            textStyle: { tailwindCSS string } additional style for text container
            nameStyle: { tailwindCSS string if [0] === + add styles without changing default },
            priceStyle: { tailwindCSS string if [0] === + add styles without changing default },
            button: { bool } display add to cart button ?
            buttonStyle: { tailwindCSS }
            ratio: { 'portrait' | 'landscape' } item sizing
            innerPadding: { taiwindCSS } padding between items
        }
    */

  const childStyle = {
    paddingBottom: !props.ratio
      ? "100%"
      : props.ratio === "portrait"
      ? "133%"
      : "75%",
    height: 0,
  }

  const addToDefault = (string) => (string[0] === "+" ? string.shift() : false)

  const styles = {
    itemStyle:
      (props.ratio === "portrait" &&
        cn("xs:w-full", "sm:w-1/2", "md:w-1/3", "lg:w-1/4", "xl:w-1/5")) ||
      cn("xs:w-full", "sm:w-1/2", "md:w-1/3", "lg:w-1/4", "xl:w-1/4"),

    nameStyle: (props.ratio === "portrait" && cn("text-3xl")) || cn("text-2xl"),

    priceStyle:
      (props.ratio === "portrait" && cn("text-2xl", "font-hairline")) ||
      cn("text-lg"),

    buttonStyle:
      (props.ratio === "portrait" && cn("text-xl", "p-2")) ||
      cn("text-lg", "p-1"),

    innerPadding:
      props.innerPadding || cn("sm:p-1", "md:p-1", "lg:p-2", "xl:p-2"),

    addStyles(element) {
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

  const itemContent = (
    <div className={cn("relative", [styles.itemStyle], [styles.innerPadding])}>
      <div className={cn("relative")} style={childStyle}>
        <div className={cn("absolute", "w-full", "h-full")}>
          <Img
            src={props.item.image}
            alt={`${props.item.category} ${props.item.name}`}
            additionalStyles={cn(
              "h-1/2",
              "border-2", // border-primary border-solid"
              [props.imageStyle]
            )}
            fitHeight
          />
          <div
            className={cn(
              "h-1/2",
              "w-full",
              "flex",
              "flex-col",
              "justify-around",
              "items-start",
              [props.textStyle]
            )}
          >
            <h3 className={cn([styles.nameStyle])}>{props.item.name}</h3>
            <p className={cn([styles.priceStyle])}>{props.item.price}</p>
            {props.button && (
              <Button
                additionalStyles={cn([styles.buttonStyle])}
                text="Add to Cart"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )

  return !props.button ? <Link href="">{itemContent}</Link> : itemContent
}

export default Product
