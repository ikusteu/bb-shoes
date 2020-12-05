//import from packages
import Link from "next/link"
import Head from "next/head"
import cn from "classnames"
import { useContext } from "react"

//import contexts
import { ShoppingCartContext } from "../contexts/shoppingCartContext"

//import components
import FooterEntry from "./footerEntry"
import { ShoppingCartPreview } from "./shoppingCart"
import { footerEntries } from "../tempAssets/navItems"

const Layout: React.FC = ({ children }) => {
  const cart = useContext(ShoppingCartContext).contents

  return (
    <>
      <Head>
        <meta name="description" content="Hand made shoes, made by measure" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BB-Shoes</title>
      </Head>
      <header className="w-full">
        <div
          className={cn(
            "flex justify-center",
            "h-16",
            "w-full",
            "bg-white",
            "bb-border-bottom"
          )}
        >
          <div className={cn("p-3", "h-32", "relative", "overflow-hidden")}>
            <Link href="/">
              <img
                className="h-full w-auto cursor-pointer"
                src="/images/logo.jpg"
                alt="bb-shoes logo"
                onClick={() => {
                  console.log("clicked")
                }}
              />
            </Link>
          </div>
        </div>
        <div className="h-16 border-b-2 border-secondary-900"></div>
      </header>
      <main className={cn("bb-border-bottom", "grid", "grid-main")}>
        {/* <section className={cn("col-span-12", "grid", "grid-main")}>
        </section> */}
        {children}
      </main>
      <footer className="w-full px-8 pt-8 pb-16 bg-gray-900 text-white">
        <div className="grid grid-main gaps-footer mx-auto">
          {footerEntries.map((entry) => (
            <FooterEntry
              key={entry.title}
              title={entry.title}
              items={entry.items}
              className="col-span-3"
              titleStyle="h-8 my-8"
              itemStyle="h-8"
            />
          ))}
        </div>
      </footer>
      <ShoppingCartPreview />
    </>
  )
}

export default Layout
