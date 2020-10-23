import styles from './button.module.css';

const Button = (props) => (
    <button className={styles.btn}>
        {props.text}
    </button>
);
    
export default Button;