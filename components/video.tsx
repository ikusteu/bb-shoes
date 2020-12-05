//import from packages
import cn from "classnames"
interface Props {
  src: string
  additionalStyles?: string
  fitWidth?: boolean
}

const Video: React.FC<Props> = (props) => {
  const styles = {
    width: props.fitWidth
      ? "w-full h-auto"
      : "absolute max-w-none h-full w-auto left-1/2 -trnslt-1/2",
  }

  return (
    <div
      className={cn(
        "w-1/2",
        "h-full",
        "w-full",
        "relative",
        "overflow-hidden",
        "flex",
        "items-center",
        [props.additionalStyles]
      )}
    >
      <video className={cn([styles.width])} autoPlay loop muted>
        <source src={props.src} type="video/mp4" />
      </video>
    </div>
  )
}

export default Video
