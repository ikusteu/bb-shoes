import FooterEntry from "./footerEntry"
import cn from "classnames"

const Footer = (props) => {
  /*
        props = {
            entries: { array[object] }, array of objects containing title and items for list navigation
            containerStyle: { tailwindCSS }
            entriesStyle = { object of tailwindCSS styles for entries: container, title, list, item }
        }
    */

  const styles = {
    containerStyle: props.containerStyle || "",

    entriesContainer: props.entriesStyle.container || "col-span-3",
    entriesTitle: props.entriesStyle.title || cn("h-8", "my-8"),
    entriesList: props.entriesStyle.list || cn(""),
    entriesItem: props.entriesStyle.item || cn("h-8"),
  }

  return (
    <footer className={cn("w-full", [props.containerStyle])}>
      <div
        className={cn(
          "grid",
          "xs:grid-cols-4 xs:gap-2 xs:w-xs",
          "sm:grid-cols-8 sm:gap-2 sm:w-sm",
          "md:grid-cols-8 md:gap-4 md:w-md",
          "lg:grid-cols-12 lg:gap-2 lg:w-lg",
          "xl:grid-cols-12 xl:gap-4 xl:w-xl",
          "mx-auto"
        )}
      >
        {props.entries.map((entry) => (
          <FooterEntry
            key={entry.title}
            title={entry.title}
            items={entry.items}
            containerStyle={cn(styles.entriesContainer)}
            titleStyle={styles.entriesTitle}
            listStyle={styles.entriesList}
            itemStyle={styles.itemStyle}
          />
        ))}
      </div>
    </footer>
  )
}

export default Footer
