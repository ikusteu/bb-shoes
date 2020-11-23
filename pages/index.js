import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import cn from "classnames"
import Banner from "../components/banner"
import SplitPane from "../components/splitPane"
import Video from "../components/video"
import Article from "../components/article"
import PhotoNav from "../components/photoNav"

const Index = () => {
  const aboutUs = {
    title: "About Us",
    text:
      "BB Shoes is a brand of shoes, boots and belts made in workshop Cipele Zlatko located in the hearth of Zagreb in Croatia. BB Shoes are handmade shoes made in small series which guaratees quality, durability and exclusivity. With more than 20 models and 50 colors BB Shoes can meet any style you want. All upper parts are made out of finest Italian leathers which are then handlasted onto one out of 12 types of lasts. They are finished with a sole which comes in many varieties regarding colors, materials and methodes of construction. BB Shoes can be made by measure and that makes them perfect not only in size, but in appearance as well because you can choose the model, materials, colors, sole construction and last. That way you can get yourself a perfect pair made just for you.",
  }

  const splitPaneStyles = {
    container: cn(
      "mt-16",
      "grid",
      "xs:grid-cols-4 xs:gap-2 xs:w-xs",
      "sm:grid-cols-8 sm:gap-2 sm:w-sm",
      "md:grid-cols-8 md:gap-4 md:w-md",
      "lg:grid-cols-12 lg:gap-2 lg:w-lg",
      "xl:grid-cols-12 xl:gap-4 xl:w-xl",
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

  const photoNavContent = [
    {
      title: "shoes",
      link: "/",
      image: "/images/item-shoes.jpeg",
    },
    {
      title: "boots",
      link: "/",
      image: "/images/item-boots.jpeg",
    },
    {
      title: "accessories",
      link: "/",
      image: "/images/item-accessories.jpeg",
    },
  ]

  const photoNavStyles = {
    container: cn("col-span-12", "mt-32"),
    itemsContainer: cn(
      "w-full",
      "grid",
      "xs:grid-cols-3 xs:gap-2 xs:w-xs",
      "sm:grid-cols-6 sm:gap-4 sm:w-sm",
      "md:grid-cols-6 md:gap-8 md:w-md",
      "lg:grid-cols-12 lg:gap-8 lg:w-lg",
      "xl:grid-cols-12 xl:gap-16 xl:w-xl",
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

  const collectionsContent = [
    {
      title: "Gentleman's indispensible",
      link: "/",
      image: "/images/collections-temp.jpeg",
    },
    {
      title: "Urban Twist",
      link: "/",
      image: "/images/collections-temp.jpeg",
    },
    {
      title: "Wild, Wild West",
      link: "/",
      image: "/images/collections-temp.jpeg",
    },
    {
      title: "Accessories",
      link: "/",
      image: "/images/collections-temp.jpeg",
    },
  ]

  const collectionsStyles = {
    container: cn("col-span-12", "mt-32"),
    itemsContainer: cn(
      "w-full",
      "grid",
      "xs:grid-cols-4 xs:gap-2 xs:w-xs",
      "sm:grid-cols-8 sm:gap-4 sm:w-sm",
      "md:grid-cols-8 md:gap-8 md:w-md",
      "lg:grid-cols-12 lg:gap-8 lg:w-lg",
      "xl:grid-cols-12 xl:gap-16 xl:w-xl",
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
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Banner type="carousel" src="/images/slider_temp.jpg" />
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
        items={photoNavContent}
        imgRatio="portrait"
        displayText="button"
        styles={photoNavStyles}
      />
      <PhotoNav
        title="Shop by Style"
        items={collectionsContent}
        imgRatio="portrait"
        displayText="caption"
        styles={collectionsStyles}
      />
    </Layout>
  )
}

export default Index
