//import from packages
import cn from "classnames"
import { useState } from "react"

interface Props {
  className?: string
  filters?: string[]
  apply?: () => void
}

const Filters: React.FC<Props> = (props) => {
  //state for drop down animation
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
        [props.className],
        [active && styles.active],
        "cursor-pointer",
        "transition-height duration-500 ease-in-out"
      )}
    >
      <h4 className="text-primary-100" onClick={toggleActive}>
        Filters
      </h4>
      <div>{/* filters */}</div>
    </div>
  )
}

export default Filters
