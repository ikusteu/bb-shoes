import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { ShoppingCartContext } from "../contexts/shoppingCartContext"

import Footer from "./footer"
import Sidebar from "./sidebar"
import { ShoppingCartPreview } from "./shoppingCart"

import cn from "classnames"
import { useContext } from "react"
import Img from "./img"

export const siteTitle = "BB-Shoes"

const Layout = ({ children, home }) => {
  const cart = useContext(ShoppingCartContext).contents

  console.log(cart)

  const sideBarStyles = {
    container: cn(
      "col-span-2",
      "h-full",
      "block",
      "border-r-2 border-secondary-500",
      "pt-24",
      "grid",
      "grid-cols-2"
    ),
  }

  const location = useRouter()
  // const sidebar = location.pathname !== "/"
  const sidebar = false

  const footerEntries = [
    {
      title: "Collections",
      items: [
        "Gentleman's Indispensible",
        "Urban Twist",
        "Wild, Wild West",
        "Accessories",
      ],
    },
    {
      title: "Info",
      items: ["Return Policy", "Shipping", "Payment methods", "Sizes"],
    },
    {
      title: "Contact Us",
      items: [
        "Phone: 099/8653-414",
        "E-mail: bb-shoes@gmail.com",
        "Adress: Ilica 21, Zagreb, Croatia",
      ],
    },
  ]

  const footerEntriesStyle = {}

  return (
    <>
      <Head>
        <meta name="description" content="Hand made shoes, made by measure" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
              />
            </Link>
          </div>
        </div>
        <div className="h-16 border-b-2 border-secondary-900"></div>
      </header>
      <main
        className={cn(
          "bb-border-bottom",
          "grid",
          "xs:grid-cols-4 xs:gap-2",
          "sm:grid-cols-8 sm:gap-4",
          "md:grid-cols-8 md:gap-8",
          "lg:grid-cols-12 lg:gap-8",
          "xl:grid-cols-12 xl:gap-8"
        )}
      >
        {sidebar && <Sidebar styles={sideBarStyles} />}
        <section className={cn([sidebar ? "col-span-10" : "col-span-12"])}>
          {children}
        </section>
      </main>
      <Footer
        entries={footerEntries}
        containerStyle={cn(
          "bg-gray-900",
          "text-white",
          "px-8",
          "pt-8",
          "pb-16"
        )}
        entriesStyle={footerEntriesStyle}
      />
      <ShoppingCartPreview />
    </>
  )
}

export default Layout
