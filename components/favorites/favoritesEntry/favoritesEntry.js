import styles from './favoritesEntry.module.css';
import Button from '../../button/button';

const FavoritesEntry = () => (
    <figure className={styles.favoritesEntry}>
        <img src="/images/featured_temp.jpeg" />
        <figcaption>
            <h4>Shoe</h4>
            <p>Price: $200</p>
            <Button text="Add to Cart" />
        </figcaption>
    </figure>
);
    
export default FavoritesEntry;