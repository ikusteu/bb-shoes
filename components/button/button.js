import styles from './button.module.css'
import cn from 'classnames'

/*

props = {
    text: ( string, button text )
    height
    additionalStyles: ( string of tailwind classes, adds aditional styles )

}

*/

const Button = ( props ) => {

    const styles = {
        height: (props.height) || 'h-12'
    }

    return (
        <button className={ cn('mx-auto', 'h-12', [props.additionalStyles], 'border-4', 'border-solid', 'border-orange-600', 'flex', 'items-center', 'p-8', 'text-2xl', 'font-bold', 'bg-orange-600', 'text-white' ) }>
            {props.text}
        </button>
    );
}
    
export default Button;