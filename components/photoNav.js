import cn from "classnames"
import NavItem from "./navItem"

/*
    
    props = {
        title: { string } main title
        titleStyle: { tailwindCSS string } main title style
        items: [ {{ title: { string }, image: { url }, link: { url }--> href attribute }}, ... ]
        imgRatio: { 'portrait' | 'landscape' | null } adjusts orientation of image/element ( 4:3 ) portrait / landscape, dafeult = null -> 1:1 box
        innerPadding: { tailwindCSS string } padding between nav items
        itemStyles: { tailwindCSS string } additional item styles
        displayText: { 'button' | 'caption' | 'over' } title display type, default = null -> no text, just image 
        textStyles: { [ tailwindCSS string ]* title additional display styles }
        itemColspan: { tailwindCSS col-span value for single navItem }
    }
      
*/

const PhotoNav = (props) => {
  const numItems = props.items.length

  const styles = {
    container: props.styles.container || cn("w-full", [styles.padding]),
    padding: props.padding || "p-0",

    textStyles:
      props.styles.text ||
      (props.displayText === "button" &&
        cn(
          "xs:text-xs xs:p-1 ",
          "sm:text-base sm:p-2",
          "md:text-xl md:p-3",
          "lg:text-2xl lg:p-4",
          "xl:text-3xl xl:p-4"
        )) ||
      (props.displayText === "caption" &&
        cn(
          "xs:text-xs xs:p-1",
          "sm:text-lg sm:p-3",
          "md:text-2xl md:p-4",
          "lg:text-4xl lg:p-5",
          "xl:text-5xl xl:p-6"
        )) ||
      (props.displayText === "over" &&
        cn(
          "xs:text-lg",
          "sm:text-2xl",
          "md:text-3xl",
          "lg:text-4xl",
          "xl:text-5xl"
        )),

    innerPadding:
      props.innerPadding ||
      cn("xs:p-1", "sm:p-1", "md:p-2", "lg:p-3", "xl:p-4"),

    itemStyles: props.styles.item || "rounded-md sm:rounded-sm",

    title:
      props.styles.title ||
      cn(
        "w-full",
        "text-center",
        "xs:text-lg xs:mb-4",
        "sm:text-2xl sm:mb-4",
        "md:text-3xl md:mb-6",
        "lg:text-4xl lg:mb-12",
        "xl:text-5xl xl:mb-16"
      ),

    itemsContainer:
      props.styles.itemsContainer || cn("flex", "flex-center", "h-full"),
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.itemsContainer}>
        {props.items.map((item) => (
          <NavItem
            item={item}
            key={item.title}
            numItems={numItems}
            imgRatio={props.imgRatio}
            displayText={props.displayText}
            textStyles={styles.textStyles}
            innerPadding={styles.innerPadding}
            itemStyles={styles.itemStyles}
            itemColspan={props.styles.itemColspan}
          />
        ))}
      </div>
    </section>
  )
}

export default PhotoNav
