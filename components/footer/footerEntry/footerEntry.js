import cn from "classnames"

const FooterEntry = (props) => {
  /*

    props = {
      containerStyle: { tailwindCSS string },
      titleStyle: { tailwindCSS string },
      listStyle: { tailwindCSS string },
      itemStyle: { tailwindCSS string }
    }

  */

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
