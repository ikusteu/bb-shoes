// import from packages
import cn from "classnames"

// local interfaces
interface RegisterProps {
  title: string
  items: string[]
  className?: string
  titleStyle?: string
  listStyle?: string
  itemStyle?: string
  onClick?: (e: any) => void
}

// main component function
const FooterEntry: React.FC<RegisterProps> = (props) => {
  return (
    <div className={props.className}>
      <h2 className={cn([props.titleStyle], "cursor-default")}>
        {props.title}
      </h2>
      <ul className={props.listStyle}>
        {props.items.map((item) => (
          <li
            onClick={props.onClick}
            className={cn([props.itemStyle], "cursor-pointer")}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterEntry
