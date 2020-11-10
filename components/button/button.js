import styles from "./button.module.css";
import cn from "classnames";

/*

props = {
    text: ( string, button text )
    height: { tailwindCSS string } height property, dafault = h-12
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
        [styles.height],
        "border-4",
        "border-solid",
        "border-primary",
        "flex",
        "items-center",
        "p-8",
        "text-2xl",
        "font-bold",
        "bg-primary",
        "text-white",
        "hover:text-primary",
        "hover:bg-opacity-0",
        "rounded-full",
        [props.additionalStyles]
      )}
    >
      {props.text}
    </button>
  );
};

export default Button;
