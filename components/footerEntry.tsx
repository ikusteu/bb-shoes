//import from packages
import cn from "classnames"

interface Props {
  title: string
  items: string[]
  containerStyle: string
  titleStyle: string
  listStyle: string
  itemStyle: string
}

const FooterEntry: React.FC<Props> = (props) => {
  return (
    <div className={cn([props.containerStyle])}>
      <h2 className={props.titleStyle}>{props.title}</h2>
      <ul className={props.listStyle}>
        {props.items.map((item) => (
          <li className={props.itemStyle} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterEntry
