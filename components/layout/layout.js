import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import HeaderNav from '../header/headerNav/headerNav'
import Footer from '../footer/footer.js' 


export const siteTitle = "BB-Shoes";

const Layout = ({ children, home }) => {
    return (
        <>
            <Head>
                <meta name="description" content="Hand made shoes, made by measure" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
                <header>
                    <div className={styles.headerTitle}>
                        <div className={styles.title}>
                            <Link href="/"><img src="/images/logo.jpg" alt="bb-shoes logo"/></Link>
                        </div>
                    </div>
                    <HeaderNav />
                </header>
                <main>{children}</main>
                <Footer />
        </>
    )
}

export default Layout;