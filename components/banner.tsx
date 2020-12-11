//import from packages
import React from "react"
import cn from "classnames"

interface Props {
  src: string
  type: "photo" | "video"
  height?: any
  className?: string
}

const Banner: React.FC<Props> = (props) => {
  //set height of the banner from props or default full screen
  const containerStyle = {
    height: props.height || "100vh",
  }

  return (
    <section
      style={containerStyle}
      className={cn("flex items-center", "overflow-hidden", [props.className])}
    >
      {(props.type === "photo" && (
        <img className="w-full h-auto" src="/images/slider_temp.jpg" />
      )) /*switch photo or video*/ ||
        (props.type === "video" && (
          <video autoPlay loop muted>
            <source
              className="absolute left-1/2 w-full h-auto -trnslt-1/2"
              src={props.src}
              type="video/mp4"
            />
          </video>
        ))}
    </section>
  )
}

export default Banner
