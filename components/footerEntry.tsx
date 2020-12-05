interface RegisterProps {
  title: string
  items: string[]
  className?: string
  titleStyle?: string
  listStyle?: string
  itemStyle?: string
}

const FooterEntry: React.FC<RegisterProps> = (props) => {
  return (
    <div className={props.className}>
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
