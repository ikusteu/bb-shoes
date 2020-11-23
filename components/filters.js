import cn from "classnames"
import { useState } from "react"

const Filters = (props) => {
  const [active, setActive] = useState(false)

  const styles = {
    active: cn("h-40"),
  }

  const toggleActive = () => {
    setActive(!active)
  }

  return (
    <div
      className={cn(
        [props.containerStyle],
        [active && styles.active],
        "cursor-pointer",
        "transition-height",
        "duration-500",
        "ease-in-out"
      )}
    >
      <h4 className="text-primary-100" onClick={toggleActive}>
        Filters
      </h4>
      <div></div>
    </div>
  )
}

export default Filters
