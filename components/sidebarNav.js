import cn from "classnames"
import { useState } from "react"

const SidebarNav = (props) => {
  const [activeItem, setActiveItem] = useState(null)

  const styles = {
    navContainer: props.styles.container,
    subContainer: cn(
      "h-0",
      "overflow-hidden",
      "transition-height duration-700 ease-in-out",
      "cursor-pointer"
    ),
    text: props.styles.text,
    subText: props.styles.subText,
  }

  // const transition = {
  //   transition: "all .5s ease",
  // }

  return (
    <div className={styles.navContainer}>
      {props.items.map((item, id) => (
        <div
          key={item.main}
          onClick={() => {
            setActiveItem(activeItem !== id ? id : null)
          }}
        >
          <div className={cn([styles.text], "cursor-pointer")}>{item.main}</div>
          <div
            className={cn(
              [styles.subContainer],
              [
                activeItem === id
                  ? `accordion-active-${item.sub.length}`
                  : styles.inactive,
              ]
            )}
          >
            {item.sub.map((subitem) => (
              <div
                key={subitem}
                className={cn([styles.subText], "cursor-pointer")}
              >
                {subitem}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SidebarNav
