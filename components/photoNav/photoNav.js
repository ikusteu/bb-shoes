import cn from "classnames";
import NavItem from "./navItem/navItem";

/*
    
    props = {
        items: [ {{ title: { string }, image: { url }, link: { url }--> href attribute }}, ... ]
        imgRatio: { 'portrait' | 'landscape' | null } adjusts orientation of image/element ( 4:3 ) portrait / landscape, dafeult = null -> 1:1 box
        innerPadding: { tailwindCSS string } padding between nav items
        itemStyles: { tailwindCSS string } additional item styles
        displayText: { 'button' | 'caption' | 'over' } title display type, default = null -> no text, just image 
        textStyles: { [ tailwindCSS string ]* title additional display styles }
    }
      
*/

const PhotoNav = (props) => {
  const numItems = props.items.length;

  const styles = {
    padding: props.padding || "p-0",

    textStyles:
      props.textStyles ||
      (props.displayText === "button" &&
        cn(
          "sm:text-xs sm:p-2",
          "md:text-lg md:p-2",
          "lg:text-2xl lg:p-3",
          "xl:text-4xl xl:p-5"
        )) ||
      (props.displayText === "caption" &&
        cn(
          "sm:text-sm sm:p-2",
          "md:text-xl md:p-3",
          "lg:text-2xl lg:p-6",
          "xl:text-4xl xl:p-8"
        )) ||
      (props.displayText === "over" &&
        cn("sm:text-lg", "md:text-2xl", "lg:text-3xl", "xl:text-4xl")),

    innerPadding:
      props.innerPadding || cn("sm:p-2", "md:p-3", "lg:p-4", "xl:p-6"),
  };

  return (
    <section className={cn("w-full", [styles.padding])}>
      <div className={cn("flex", "flex-center", "h-full")}>
        {props.items.map((item) => (
          <NavItem
            item={item}
            key={item.title}
            numItems={numItems}
            imgRatio={props.imgRatio}
            displayText={props.displayText}
            textStyles={styles.textStyles}
            innerPadding={props.innerPadding}
            itemStyles={props.itemStyles}
          />
        ))}
      </div>
    </section>
  );
};

export default PhotoNav;
