import styles from './headerNav.module.css'

const HeaderNav = () => {
    return (
        <div className={styles.headerTitle}>
            <div className={styles.title}>
                <img src="/images/logo.jpg" alt="bb-shoes logo"/>
            </div>
        </div>
    )
}

export default HeaderNav;