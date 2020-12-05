//import from packages
import cn from "classnames"

interface RegisterProps {
  left: JSX.Element
  right: JSX.Element
  className?: string
  leftClassName?: string
  rightClassName?: string
}

const SplitPane: React.FC<RegisterProps> = (props) => (
  <section className={props.className}>
    <div className={cn([props.leftClassName, "overflow-hidden"])}>
      {props.left}
    </div>
    <div className={cn([props.rightClassName, "overflow-hidden"])}>
      {props.right}
    </div>
  </section>
)

export default SplitPane
