//import from packages
import cn from "classnames"

//import components
import Layout from "../components/layout"
import Banner from "../components/banner"
import SplitPane from "../components/splitPane"
import Video from "../components/video"
import Article from "../components/article"
import PhotoNav from "../components/photoNav"
import NavItem from "../components/navItem"

//import temp assets
import { aboutUs } from "../tempAssets/articles"
import { photoNavCategories, photoNavCollections } from "../tempAssets/navItems"

const Index: React.FC = () => {
  const splitPaneStyles = {
    container: cn(
      "mt-16",
      "grid",
      "xs:w-xs sm:w-sm md:w-md lg:w-lg xl:w-xl",
      "grid-main",
      "xs:gap-2 sm:gap-2 md:gap-4 lg:gap-2 xl:gap-4",
      "mx-auto"
    ),
    left: cn(
      // "xs:col-span-2",
      // "sm:col-span-4",
      "md:col-span-4",
      "lg:col-span-6",
      "xl:col-span-6"
    ),
    right: cn(
      "xs:col-span-full",
      "sm:col-span-full",
      "md:col-span-4",
      "lg:col-span-6",
      "xl:col-span-5 xl:col-start-8"
    ),
  }

  const photoNavStyles = {
    container: cn("col-span-12", "mt-32"),
    itemsContainer: cn(
      "w-full",
      "xs:w-xs sm:w-sm md:w-md lg:w-lg xl:w-xl",
      "grid",
      "grid-main",
      "mx-auto"
    ),
    title: "",
    text: cn("xl:text-3xl xl:py-2 xl:px-4"),
    itemColspan: cn(
      "xs:col-span-1",
      "sm:col-span-2",
      "md:col-span-2",
      "lg:col-span-4",
      "xl:col-span-4"
    ),
  }

  const collectionsStyles = {
    container: cn("col-span-12", "mt-32"),
    itemsContainer: cn(
      "w-full",
      "xs:w-xs sm:w-sm md:w-md lg:w-lg xl:w-xl",
      "grid",
      "grid-main",
      "mx-auto"
    ),
    title: "",
    text: cn(
      "xs:text-xl xs:py-2",
      "sm:text-xs sm:py-2",
      "md:text-sm md:py-2",
      "lg:text-lg lg:py-4",
      "xl:text-xl xl:py-4"
    ),
    itemColspan: cn(
      "xs:col-span-2",
      "sm:col-span-4",
      "md:col-span-2",
      "lg:col-span-3",
      "xl:col-span-3"
    ),
  }

  return (
    <Layout>
      <Banner
        className="col-span-12"
        height="80vh"
        type="carousel"
        src="/images/slider_temp.jpg"
      />
      <SplitPane
        left={<Video src="/images/Video_temp.mp4" containerStyle="bb-border" />}
        right={
          <Article
            title={aboutUs.title}
            text={aboutUs.text}
            titleStyles={cn("md:text-right pb-4")}
            textStyles={cn("md:text-right")}
            padding={cn("lg:p-8", "xl:p-8")}
          />
        }
        styles={splitPaneStyles}
      />
      <PhotoNav
        title="Shop by Category"
        items={photoNavCategories}
        imgRatio="portrait"
        displayText="button"
        styles={photoNavStyles}
      />
      <PhotoNav
        title="Shop by Style"
        items={photoNavCollections.map((item) => (
          <NavItem
            item={item}
            key={item.title}
            imgRatio={props.imgRatio}
            displayText={props.displayText}
            textStyles={styles.textStyles}
            innerPadding={styles.innerPadding}
            itemStyles={styles.itemStyles}
            itemColspan={props.styles.itemColspan}
          />
        ))}
        imgRatio="portrait"
        displayText="caption"
        styles={collectionsStyles}
      />
    </Layout>
  )
}

export default Index
