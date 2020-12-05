//import from packages
import Link from "next/link"
import { useContext } from "react"

//import from local components
import { WebshopDisplayContext } from "../contexts/webshopDisplayContext"

// Multi Page Navigation types and function
import { MultiPageNavItemInterface } from "../lib/customTypes"

interface MultiPageProps {
  items: MultiPageNavItemInterface[]
  className?: string
}

export const MultiPageNavigation: React.FC<MultiPageProps> = (props) => {
  return (
    <div className={props.className}>
      {props.items.map((item) => (
        <Link key={item.name} href={item.href}>
          <div>{item.name}</div>
        </Link>
      ))}
    </div>
  )
}

// Single Page Navigation types and function

type SinglePageEntry = {
  text: string
  category: string //temp
}

interface SinglePageProps {
  items: SinglePageEntry[]
  className?: string
}

export const SinglePageNavigation: React.FC<SinglePageProps> = (props) => {
  //   props = {
  //       items: { array of objects { text: item text, contextState: context state for different renderings } }
  //   }
  const [category, setCategory] = useContext(WebshopDisplayContext)

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
