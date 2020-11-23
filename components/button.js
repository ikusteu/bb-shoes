import cn from "classnames"

/*

props = {
  text: ( string, button text )
  additionalStyles: ( string of tailwind classes, adds aditional styles )
  handleClick: { function }
}

*/

const Button = (props) => {
  const styles = {
    //height: props.height || "h-12",
  }

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
        [props.additionalStyles]
      )}
      onClick={props.onClick}
    >
      <p className="px-1">{props.text}</p>
    </button>
  )
}

export default Button
