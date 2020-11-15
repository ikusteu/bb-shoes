import Head from "next/head"
import Layout, { siteTitle } from "../components/layout/layout"
import cn from "classnames"
import Banner from "../components/banner/banner"
import SplitPane from "../public/components/splitPane"
import Video from "../public/components/video"
import Article from "../public/components/article"
import PhotoNav from "../public/components/photoNav"

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
    left: "col-span-5",
    right: "col-span-5 col-start-7",
  }

  const photoNavStyles = {
    container: cn("col-span-12", "my-16"),
    itemsContainer: cn(
      "w-full",
      "grid",
      "xs:grid-cols-4 xs:gap-8 xs:w-xs",
      "sm:grid-cols-8 sm:gap-8 sm:w-sm",
      "md:grid-cols-8 md:gap-16 md:w-md",
      "lg:grid-cols-12 lg:gap-8 lg:w-lg",
      "xl:grid-cols-12 xl:gap-16 xl:w-xl",
      "mx-auto"
    ),
    title: "",
    text: "",
    item: cn("col-span-4"),
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

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Banner type="carousel" src="/images/slider_temp.jpg" />
      <SplitPane
        left={<Video src="/images/Video_temp.mp4" containerStyle="bb-border" />}
        right={<Article title={aboutUs.title} text={aboutUs.text} />}
        styles={splitPaneStyles}
      />
      <PhotoNav
        items={photoNavContent}
        imgRatio="portrait"
        displayText="button"
        styles={photoNavStyles}
      />
    </Layout>
  )
}

export default Index
