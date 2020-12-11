// import from packages
import cn from "classnames"
import { useContext } from "react"

// import from components
import Layout from "../components/layout"
import Banner from "../components/banner"
import SplitPane from "../components/splitPane"
import Video from "../components/video"
import PhotoNav from "../components/photoNav"
import NavItem from "../components/navItem"
import Button from "../components/button"
import Favorites from "../components/favorites"

// import from temp assets
import { aboutUs } from "../tempAssets/articles"
import { photoNavCollections } from "../tempAssets/navItems"

// import from contexts
import { UnderConstructionContext } from "../contexts/underConstructionContext"

// import from lib
import { generateCategoriesPhotoNav } from "../lib/categories"
import { getFavorites } from "../lib/products"

// import from custom types
import { PhotoNavItemInterface, ProductInterface } from "../lib/customTypes"

// local interfaces
interface IndexProps {
  categoriesPhotoNav: PhotoNavItemInterface[]
  favorites: ProductInterface[]
}

// main component function
const Index: React.FC<IndexProps> = (props) => {
  // get under construction message setter function
  const setUnderConstruction = useContext(UnderConstructionContext)[1]

  return (
    <Layout>
      <Banner
        className="col-span-12"
        height="80vh"
        type="photo"
        src="/images/slider_temp.jpg"
      />
      <div className="col-span-full">
        <div className="xs:w-xs sm:w-sm md:w-md lg:w-lg xl:w-xl grid grid-main mx-auto">
          <SplitPane
            className={cn(
              "mt-16",
              "grid grid-main",
              "xs:w-xs sm:w-sm md:w-md lg:w-lg xl:w-xl",
              "xs:gap-2 sm:gap-2 md:gap-4 lg:gap-2 xl:gap-4",
              "mx-auto"
            )}
            leftClassName={cn(
              // "xs:col-span-2",
              // "sm:col-span-4",
              "md:col-span-4",
              "lg:col-span-6",
              "xl:col-span-6"
            )}
            rightClassName={cn(
              "xs:col-span-full",
              "sm:col-span-full",
              "md:col-span-4",
              "lg:col-span-6",
              "xl:col-span-5 xl:col-start-8"
            )}
            left={<Video src="/images/Video_temp.mp4" />}
            right={
              <article className="lg:p-8 xl:p-8">
                <div className="md:text-right pb-4">{aboutUs.title}</div>
                <div className="md:text-right">{aboutUs.text}</div>
              </article>
            }
          />
          <PhotoNav
            className="col-span-full mt-32"
            title="Shop by Category"
            titleClassName="w-full text-center xs:text-lg xs:mb-4 sm:text-2xl sm:mb-4 md:text-3xl md:mb-6 lg:text-4xl lg:mb-12 xl:text-5xl xl:mb-16"
            itemsContainerStyle="grid grid-main"
            items={props.categoriesPhotoNav.map((item) => (
              <NavItem
                key={item.name}
                item={item}
                className="xs:col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-4 xl:col-span-4"
                orientation="portrait"
                button={
                  <Button
                    className="absolute top-3/4 xl:text-3xl xl:py-1 xl:px-4"
                    text={item.name}
                  />
                }
              />
            ))}
          />
          <PhotoNav
            title="Shop by Style"
            className="col-span-12 mt-32"
            itemsContainerStyle="w-full xs:w-xs sm:w-sm md:w-md lg:w-lg xl:w-xl grid grid-main mx-auto"
            titleClassName="w-full text-center xs:text-lg xs:mb-4 sm:text-2xl sm:mb-4 md:text-3xl md:mb-6 lg:text-4xl lg:mb-12 xl:text-5xl xl:mb-16"
            items={photoNavCollections.map((item) => (
              <NavItem
                key={item.title}
                onClick={(e: React.MouseEvent<any>) =>
                  setUnderConstruction(e, true)
                }
                item={item}
                className="xs:col-span-2 sm:col-span-4 md:col-span-2 lg:col-span-3 xl:col-span-3 cursor-pointer"
                orientation="portrait"
                displayText="caption"
                textStyles="xs:text-xl xs:py-2 sm:text-xs sm:py-2 md:text-sm md:py-2 lg:text-lg lg:py-4 xl:text-xl xl:py-4"
                itemStyles="xs:col-span-2 sm:col-span-4 md:col-span-2 lg:col-span-3 xl:col-span-3"
              />
            ))}
          />
          <Favorites
            products={props.favorites}
            className="col-span-12 px-16 mb-32"
          />
        </div>
      </div>
    </Layout>
  )
}

export default Index

export const getStaticProps = async () => {
  const categoriesPhotoNav = generateCategoriesPhotoNav()
  const favorites = getFavorites()
  return {
    props: {
      categoriesPhotoNav,
      favorites,
    },
  }
}
