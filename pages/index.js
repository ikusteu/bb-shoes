import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'

import Banner from '../components/banner/banner'
import About from '../components/about/about'
import Categories from '../components/categories/categories'
import Collections from '../components/collections/collections'
import Favorites from '../components/favorites/favorites'

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Banner type="carousel"/>
      <About />
      <Categories />
      <Collections />
      <Favorites />
    </Layout>
  )
}

export default Index;
