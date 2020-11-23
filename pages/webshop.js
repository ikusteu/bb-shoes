import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import Shop from "../components/shop"

const Webshop = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Shop />
    </Layout>
  )
}

export default Webshop
