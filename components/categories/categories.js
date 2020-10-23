import Button from '../button/button'
import styles from  './categories.module.css';

const categories = [ 'Shoes', 'Boots', 'Accessories' ];

const Categories = () => (
    <section className={styles.categories}>
        <h1>Shop by Category</h1>
        <div className={styles.categoriesContainer}>
            {
                categories.map(
                    category => (
                        <figure key={category} className={`${styles.category} bb-border image-container`}>
                            <img src={`/images/category-${category.toLocaleLowerCase()}.jpeg`} />
                            <Button text={category} />
                        </figure>
                    )
                )
            }
        </div>
    </section>
);
    
export default Categories;
