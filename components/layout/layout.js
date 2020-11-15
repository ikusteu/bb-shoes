import Head from "next/head"
import Link from "next/link"
import Footer from "../footer/footer.js"
import cn from "classnames"

export const siteTitle = "BB-Shoes"

const Layout = ({ children, home }) => {
  const border = "border-solid border-2 border-black"

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
                className="h-full w-auto"
                src="/images/logo.jpg"
                alt="bb-shoes logo"
              />
            </Link>
          </div>
        </div>
      </header>
      <main className="mt-24 bb-border-bottom">{children}</main>
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
    </>
  )
}

export default Layout
