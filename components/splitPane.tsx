//import from packages
import cn from "classnames"

type Styles = {
  container: string
  left: string
  right: string
}

interface Props {
  left: React.Component
  right: React.Component
  styles: Styles
}

const SplitPane: React.FC<Props> = (props) => {
  const styles = {
    container: props.styles.container || cn("w-full", "flex", "flex-wrap"),
    left: props.styles.left || cn("sm:w-full", "sm:min-w-full"),
    right: props.styles.right || cn("sm:w-full", "sm:min-w-full"),
  }

  return (
    <section className={styles.container}>
      <div className={cn([styles.left, "overflow-hidden"])}>{props.left}</div>
      <div className={cn([styles.right, "overflow-hidden"])}>{props.right}</div>
    </section>
  )
}

export default SplitPane
