// import from packages
import Slick from "react-slick"

// import from local components
import Product from "./product"

// import from custom types
import { ProductInterface } from "../lib/customTypes"

// locat interfaces
interface FavoritesProps {
  products: ProductInterface[]
  className?: string
}

// main component function
const Favorites: React.FC<FavoritesProps> = (props) => {
  return (
    <section className={props.className}>
      <h1 className="w-full h-16 text-5xl mb-16 mt-32 text-center">
        Favorites
      </h1>
      <Slick
        infinite
        speed={500}
        slidesToShow={4}
        slidesToScroll={4}
        arrows
        autoplay
        centerPadding="2px"
        swipeToSlide
        pauseOnHover
      >
        {props.products.map((product, i) => (
          <Product
            itemStyle="w-full cursor-pointer px-2 border-solid border-white hover:border-secondary-100 border-2"
            key={`${product.name}-${i}`}
            item={product}
            textStyle="text-center"
            nameStyle="text-4xl"
            priceStyle="text-2xl font-hairline italic"
          />
        ))}
      </Slick>
    </section>
  )
}

export default Favorites
