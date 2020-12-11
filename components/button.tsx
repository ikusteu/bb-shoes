//import form packages
import cn from "classnames"

interface ButtonProps {
  text: string
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={cn(
        "mx-auto",
        "border-4",
        "border-secondary-700",
        "flex",
        "items-center",
        "font-semibold",
        "bg-secondary-700",
        "text-white",
        "hover:text-secondary-700",
        "hover:bg-opacity-0",
        "rounded-full",
        [props.className]
      )}
      onClick={props.onClick}
    >
      <p className="px-1">{props.text}</p>
    </button>
  )
}

export default Button
