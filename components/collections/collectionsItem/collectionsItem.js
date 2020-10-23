import styles from './collectionsItem.module.css';

const CollectionsItem = (props) => (
    <figure className={styles.collectionItem}>
        <div className={styles.imageContainer}>
            <img src="/images/collections-temp.jpeg" />
        </div>
        <figcaption>
            <h4>{props.name}</h4>
        </figcaption> 
    </figure>
);
    
export default CollectionsItem;