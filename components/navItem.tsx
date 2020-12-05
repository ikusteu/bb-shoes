//import from packages
import Link from "next/link"
import cn from "classnames"

//import from local components
import Img from "./img"

//import custom types
import { PhotoNavItemInterface } from "../lib/customTypes"

interface NavItemInterface {
  item: PhotoNavItemInterface
  orientation: "portrait" | "landscape"
  displayText?: "caption" | "over"
  button?: JSX.Element
  className?: string
  itemStyles?: string
  textStyles?: string
}

const NavItem: React.FC<NavItemInterface> = (props) => {
  const childStyle = {
    paddingBottom:
      props.orientation === "portrait"
        ? "133.33%"
        : props.orientation === "landscape"
        ? "75%"
        : "100%",
    height: 0,
  }

  const navItemContent = (
    <div className={props.className}>
      <div className="w-full relative">
        <div style={childStyle}>
          <Img
            additionalStyles="absolute w-full"
            src={props.item.image}
            fitHeight={props.orientation === "portrait"}
            center
            alt={props.item.name}
          />
          {
            // if textDisplay === 'button' -> render button
            (props.button && (
              <Link href={props.item.href}>
                <a className="w-full flex justify-center">{props.button}</a>
              </Link>
            )) ||
              // if textDisplay === 'over' -> render text over image
              (props.displayText === "over" && (
                <h4
                  className={cn(
                    "absolute",
                    "top-1/2",
                    "w-full",
                    "text-center",
                    [props.textStyles]
                  )}
                >
                  {props.item.name}
                </h4>
              ))
          }
        </div>
      </div>
      {props.displayText === "caption" && ( // if textDisplay === 'caption' -> render captinon below image
        <div className={cn("w-full text-center", [props.textStyles])}>
          {props.item.href}
        </div>
      )}
    </div>
  )

  return props.button ? ( // if button is not displayed wrap link around item
    <Link href={props.item.href}>{navItemContent}</Link>
  ) : (
    // if button is displayed it serves as a link on its own
    navItemContent
  )
}

export default NavItem
