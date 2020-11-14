import cn from "classnames";

/*

props = {
    text: ( string, button text )
    additionalStyles: ( string of tailwind classes, adds aditional styles )

}

*/

const Button = (props) => {
  const styles = {
    //height: props.height || "h-12",
  };

  return (
    <button
      className={cn(
        "mx-auto",
        "border-4",
        "border-solid",
        "border-primary",
        "flex",
        "items-center",
        "font-semibold",
        "bg-primary",
        "text-white",
        "hover:text-primary",
        "hover:bg-opacity-0",
        "rounded-full",
        [props.additionalStyles]
      )}
    >
      <p className="px-1">{props.text}</p>
    </button>
  );
};

export default Button;
