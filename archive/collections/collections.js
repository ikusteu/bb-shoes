import styles from './collections.module.css';
import CollectionsItem from './collectionsItem/collectionsItem';

const Collections = () => (
    <section className={styles.collections}>
        <h1>Shop by Style</h1>
        <div className={styles.collectionsItems}>
            <CollectionsItem name="COLLECTION X" />
            <CollectionsItem name="COLLECTION X" />
            <CollectionsItem name="COLLECTION X" />
            <CollectionsItem name="COLLECTION X" /> 
        </div>
    </section>
);
    
export default Collections;