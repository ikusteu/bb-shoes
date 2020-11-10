import Img from "../../img/img";
import Link from "next/link";
import Button from "../../button/button";
import cn from "classnames";

const NavItem = (props) => {
  /*
    
    props = {
        imgRatio: { 'portrait' | 'landscape' | null } adjusts orientation of image/element ( 4:3 ) portrait / landscape, dafeult = null -> 1:1 box
        innerPadding: { tailwindCSS string } padding between nav items
        itemStyles: { tailwindCSS string } additional item styles
        displayText: { 'button' | 'caption' | 'over' } title display type, default = null -> no text, just image 
        textStyles: { [ tailwindCSS string ]* title additional display styles }
        item: {{ title: { string }, image: { url }, link: { url }--> href attribute }}
        numItems: { number } number of nav items
      }
      
      */
  const styles = {
    padding: props.innerPadding || "p-4",
    hover:
      props.displayText !== "button" &&
      cn("hover:opacity-75", "duration-100", "cursor-pointer"),
  };

  const containerStyle = {
    width: `${(1 / props.numItems) * 100}%`,
  };

  const childStyle = {
    paddingBottom:
      props.imgRatio === "portrait"
        ? "133.33%"
        : props.imgRatio === "landscape"
        ? "75%"
        : "100%",
  };

  const navItemContent = (
    <div
      style={containerStyle}
      className={cn([styles.padding], [styles.hover])}
    >
      <div className={cn("w-full", "relative")}>
        <div style={childStyle} className={cn("h-0", [props.itemStyles])}>
          <Img
            additionalStyles={cn("absolute", "w-full")}
            src={props.item.image}
            fitHeight={props.imgRatio === "portrait"}
            center
          />
          {(props.displayText === "button" /******* */ && (
            <Link href={props.item.link}>
              <a className="w-full flex justify-center">
                <Button
                  additionalStyles={cn("absolute", "top-3/4", [
                    props.textStyles,
                  ])} /*** */
                  text={props.item.title}
                />
              </a>
            </Link>
          )) ||
            (props.displayText === "over" && (
              <h4
                className={cn("absolute", "top-1/2", "w-full", "text-center", [
                  props.textStyles,
                ])}
              >
                {props.item.title}
              </h4>
            ))}
        </div>
      </div>
      {props.displayText === "caption" && (
        <div className={cn("w-full text-center", [props.textStyles])}>
          {props.item.title}
        </div>
      )}
    </div>
  );

  return props.displayText !== "button" ? (
    <Link href={props.item.link}>{navItemContent}</Link>
  ) : (
    navItemContent
  );
};

export default NavItem;
