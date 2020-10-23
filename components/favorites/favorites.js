import styles from './favorites.module.css';
import FavoritesEntry from './favoritesEntry/favoritesEntry';

const Favorites = () => (
    <section className={styles.favorites}>
        <h1>Favorites</h1>
        <div className={styles.favoritesInner}>
            <i className={`${styles.favSel}  fa fa-chevron-left`}></i>
            <div className={styles.favoritesContainer}>
            <FavoritesEntry />
            <FavoritesEntry />
            <FavoritesEntry />
            <FavoritesEntry />
            </div>
            <i className={`${styles.favSel}  fa fa-chevron-right`}></i>
        </div>
    </section>
);
    
export default Favorites;

                
