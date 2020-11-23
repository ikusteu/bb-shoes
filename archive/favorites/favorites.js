// import styles from "./favorites.module.css"
// import Product from "./favoritesEntry/favoritesEntry"
import Carousel from "../carousel/carousel"
import Product from "../../public/components/product/product"
import cn from "classnames"

const Favorites = (props) => {
  /*
    props = {
        style = { object containing tailwind styles for single elements: container,  }
    }
    */

  const styles = {
    container:
      props.styles.conatiner ||
      cn(
        "w-full"
        // "grid",
        // "xs:grid-cols-4 xs:gap-2 xs:w-xs",
        // "sm:grid-cols-8 sm:gap-4 sm:w-sm",
        // "md:grid-cols-8 md:gap-8 md:w-md",
        // "lg:grid-cols-12 lg:gap-8 lg:w-lg",
        // "xl:grid-cols-12 xl:gap-16 xl:w-xl",
        // "mx-auto"
      ),

    textStyle: cn("bg-white"),
  }

  const item = {
    name: "Shoe",
    image: "/images/featured_temp.jpeg",
    price: "$100",
  }

  const products = [
    <Product item={item} />,
    <Product item={item} />,
    <Product item={item} />,
    <Product item={item} />,
    <Product item={item} />,
    <Product item={item} />,
  ]

  const carouselStyles = {
    container: "",
    itemsContainer: "",
  }

  const carouselOptions = {
    breakPoints: {
      512: {
        numItems: 2,
      },
      768: { numItems: 3 },
      1024: { numItems: 4 },
      1280: { numItems: 5 },
    },
  }

  console.log(Object.keys(carouselOptions.breakPoints))

  return (
    <section className={styles.container}>
      <h1>Favorites</h1>
      <Carousel
        items={products}
        options={carouselOptions}
        style={carouselStyles}
      />
    </section>
  )
}

export default Favorites
