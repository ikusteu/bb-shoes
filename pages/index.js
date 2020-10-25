import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'

import Banner from '../components/banner/banner'
import SplitPane from '../components/splitPane/splitPane'
import Video from '../components/video/video'
import Article from '../components/article/article'
import Categories from '../components/categories/categories'
import Collections from '../components/collections/collections'
import Favorites from '../components/favorites/favorites'

const Index = () => {

  const aboutUs = {
    title: "About Us",
    text: "BB Shoes is a brand of shoes, boots and belts made in workshop Cipele Zlatko located in the hearth of Zagreb in Croatia. BB Shoes are handmade shoes made in small series which guaratees quality, durability and exclusivity. With more than 20 models and 50 colors BB Shoes can meet any style you want. All upper parts are made out of finest Italian leathers which are then handlasted onto one out of 12 types of lasts. They are finished with a sole which comes in many varieties regarding colors, materials and methodes of construction. BB Shoes can be made by measure and that makes them perfect not only in size, but in appearance as well because you can choose the model, materials, colors, sole construction and last. That way you can get yourself a perfect pair made just for you."
  }

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Banner type="carousel"/>
      <SplitPane 
        left={<Video src="/images/Video_temp.mp4" containerStyle="bb-border"/>}
        right={<Article title={aboutUs.title} text={aboutUs.text} />}
      />
      <Categories />
      <Collections />
      <Favorites />
    </Layout>
  )
}

export default Index;
