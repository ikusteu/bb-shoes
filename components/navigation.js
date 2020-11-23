import cn from "classnames"
import Link from "next/link"
import { WebshopDisplayContext } from "../contexts/webshopDisplayContext"
import { useContext, useEffect } from "react"

export const MultiPageNavigation = (props) => {
  //   props = {
  //       items: { array of objects { text: item text, href: internal path link } }
  //   }

  return (
    <div className={props.className}>
      {props.items.map((item) => (
        <Link key={item.text} href={item.href}>
          <div>{item.text}</div>
        </Link>
      ))}
    </div>
  )
}

export const SinglePageNavigation = (props) => {
  //   props = {
  //       items: { array of objects { text: item text, contextState: context state for different renderings } }
  //   }
  const [category, setCategory] = useContext(WebshopDisplayContext)

  console.log(category)

  const navbar = (
    <div className={props.className}>
      {props.items.map((item) => (
        <div
          key={item.text}
          className="cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            setCategory(item.category)
          }}
        >
          {item.text}
        </div>
      ))}
    </div>
  )

  return navbar
}
