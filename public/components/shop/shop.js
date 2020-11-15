import Product from "../product"
import cn from "classnames"

const Shop = (props) => {
  /*
  
    props = {
      containerStyle: { tailwindCSS string } styles of grid container
      nameStyle: { tailwindCSS string } styles of item name
      priceStyle: { tailwindCSS string } styles of item price
      buttonStyle: { tailwindCSS string } styles of item button
    }

  */

  const item = {
    name: "Shoe",
    image: "/images/featured_temp.jpeg",
    price: "$100",
  }

  const products = [item, item, item, item, item, item, item, item, item]

  const styles = {
    containerStyle:
      props.containerStyle ||
      cn("xs:px-2", "sm:px-4", "md:px-6", "lg:px-8", "px-10"),
  }

  return (
    <div className={cn("flex", "flex-wrap", [styles.containerStyle])}>
      {products.map((item) => (
        <Product
          item={item}
          imageStyle="hover-top border-solid border-2 border-secondary-400 border-b-0 rounded-r-full bg-white top pl-8"
          textStyle="hover-bottom border-solid border-2 border-secondary-400 border-t-0 rounded-r-full bg-white bottom pl-16"
          itemStyle="+bb-box"
          innerPadding="p-6"
        />
      ))}
    </div>
  )
}

export default Shop
