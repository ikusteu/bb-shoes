import Head from "next/head"
import Layout, { siteTitle } from "../components/layout/layout"

//import Banner from "../public/components/banner"
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
      <SplitPane
        left={<Video src="/images/Video_temp.mp4" containerStyle="bb-border" />}
        right={<Article title={aboutUs.title} text={aboutUs.text} />}
      />
      <PhotoNav
        items={photoNavContent}
        imgRatio="portrait"
        displayText="button"
      />
      <Collections />
    </Layout>
  )
}

export default Index
