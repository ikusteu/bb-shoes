//import from packages
import cn from "classnames"

interface Props {
  src: string
  alt: string
  height?: string
  fitHeight?: boolean
  center: boolean
  additionalStyles: string
}

const Img: React.FC<Props> = (props) => {
  const styles = {
    height: props.height || "h-full",
    fit: props.fitHeight ? "w-auto h-full" : "w-full h-auto",
    center: props.center && "flex justify-center items-center",
  }

  return (
    <div
      className={cn(
        "overflow-hidden",
        [styles.center],
        [styles.height],
        [props.additionalStyles],
        "object-cover"
      )}
    >
      <img
        src={props.src}
        alt={props.alt}
        className={cn("max-w-none", [styles.fit])}
      />
    </div>
  )
}

export default Img
