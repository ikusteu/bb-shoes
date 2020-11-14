import cn from "classnames"
import Img from "../img"
import Link from "next/Link"
import Button from "../button"

const Product = (props) => {
  /*
        props = {
            item: { name: {string}, price: {string}, image: {url}, category: {string} tags: {[string, ...]*} } item object,
            itemStyle: { tailwindCSS string } style for full item
            nameStyle: { tailwindCSS string },
            priceStyle: { tailwindCSS string },
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

  const styles = {
    itemStyle:
      props.itemStyle ||
      (props.ratio === "portrait" &&
        cn("xs:w-full", "sm:w-1/2", "md:w-1/3", "lg:w-1/4", "xl:w-1/5")) ||
      (props.ratio === "landscape" &&
        cn("xs:w-full", "sm:w-1/2", "md:w-1/3", "lg:w-1/4", "xl:w-1/4")),
    nameStyle:
      props.nameStyle ||
      (props.ratio === "portrait" && cn("text-3xl")) ||
      (props.ratio === "landscape" && cn("text-2xl")),

    priceStyle:
      props.priceStyle ||
      (props.ratio === "portrait" && cn("text-2xl", "font-hairline")) ||
      (props.ratio === "landscape" && cn("text-lg")),

    buttonStyle:
      props.buttonStyle ||
      (props.ratio === "portrait" && cn("text-xl", "p-2")) ||
      (props.ratio === "landscape" && cn("text-lg", "p-1")),

    innerPadding: props.innerPadding || cn("p-2"),
  }

  const itemContent = (
    <div className={cn("relative", [styles.itemStyle], [styles.innerPadding])}>
      <div className={cn("relative")} style={childStyle}>
        <div className={cn("absolute", "w-full", "h-full")}>
          <Img
            src={props.item.image}
            alt={`${props.item.category} ${props.item.name}`}
            additionalStyles={cn(
              "h-fib",
              "border-2" // border-primary border-solid"
            )}
            center
            fitHeight
          />
          <div
            className={cn(
              "h-1-fib",
              "w-full",
              "flex",
              "flex-col",
              "justify-around",
              "items-center"
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
