//import from packages
import cn from "classnames"

//import local components
import FooterEntry from "./footerEntry"

type Entry = {
  title: string
  items: string[]
}

interface Props {
  entries: Entry[]
  className?: string
  innerClassName?: string
  entriesStyle?: any //temp - needs better solution
}

const Footer: React.FC<Props> = (props) => {
  /*
        props = {
            entries: { array[object] }, array of objects containing title and items for list navigation
            className: { container classes }
            innerClassName: { footer inner classes }
            entriesStyle = { object of tailwindCSS styles for entries: container, title, list, item }
        }
    */

  const styles = {
    // Needs to be fully rethinked
    entriesContainer: props.entriesStyle.container || "col-span-3",
    entriesTitle: props.entriesStyle.title || cn("h-8", "my-8"),
    entriesList: props.entriesStyle.list || cn(""),
    entriesItem: props.entriesStyle.item || cn("h-8"),
  }

  return (
    <footer className={cn("w-full", [props.className])}>
      <div className={props.innerClassName}>
        {props.entries.map((entry) => (
          <FooterEntry
            key={entry.title}
            title={entry.title}
            items={entry.items}
            containerStyle={cn(styles.entriesContainer)}
            titleStyle={styles.entriesTitle}
            listStyle={styles.entriesList}
            itemStyle={styles.entriesItem}
          />
        ))}
      </div>
    </footer>
  )
}

export default Footer
