import styles from './footerEntry.module.css'

const FooterEntry = (props) => {
    return (
        <div className={styles.footerEntry}>
            <h2>{props.title}</h2>
            <ul className={styles.entryList}>
                {
                    props.items.map( item => (
                        <li className={styles.listItem} key={item}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default FooterEntry;