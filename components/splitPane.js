import cn from "classnames"

/*

props = { 
    left, right: ( jsx content of respective pane )
    ?? ratio: ( sets width ratio {left pane}:{right pane}, default = 1:1 )
    styles: { object of tailwindCSS styles for container, left, right }
    
}

*/

const SplitPane = (props) => {
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
