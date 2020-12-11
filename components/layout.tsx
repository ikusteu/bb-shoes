// import from packages
import { useContext } from "react"
import Link from "next/link"
import Head from "next/head"
import { AnimatePresence } from "framer-motion"
import cn from "classnames"

// import from local components
import FooterEntry from "./footerEntry"
import UnderConstruction from "./underConstruction"
import { ShoppingCartPreview } from "./shoppingCart"
import { footerEntries } from "../tempAssets/navItems"

// import from contexts
import { UnderConstructionContext } from "../contexts/underConstructionContext"

// main component function
const Layout: React.FC = ({ children }) => {
  // state for underConstruction display message
  const [{ underConstruction }, setUnderConstruction] = useContext(
    UnderConstructionContext
  )

  return (
    <>
      <Head>
        <meta name="description" content="Hand made shoes, made by measure" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/images/favicon.svg"></link>
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
          <div className={cn("", "h-32", "relative", "overflow-hidden")}>
            <Link href="/">
              <img
                className="h-full w-auto bg-white cursor-pointer"
                src="/images/logo.svg"
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
        {children}
      </main>
      <footer className="w-full px-8 pt-8 pb-16 bg-gray-900 text-white">
        <div className="grid grid-main xs:w-xs sm:w-sm md:w-md lg:w-lg xl:w-xl mx-auto">
          {footerEntries.map((entry) => (
            <FooterEntry
              onClick={(e) => setUnderConstruction(e, true)}
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
      <AnimatePresence exitBeforeEnter>
        {underConstruction && (
          <UnderConstruction close={(e) => setUnderConstruction(e, false)} />
        )}
      </AnimatePresence>
    </>
  )
}

export default Layout
