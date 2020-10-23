import styles from './headerNav.module.css'
import Link from 'next/link'


const HeaderNav = () => {
    const navArray = ["Shoes", "Boots", "Accessories", "Info", "About"]
    return (
        <div className={styles.navigation}>
                <ul className={styles.navbar}>
                    {
                        navArray.map(
                            (item) => (item === ("About")) 
                            ? <li key={item}><Link href="/about">About</Link></li>
                            : (
                                <li key={item} className={styles[item.toLowerCase()]}>{item}
                                    <div className={`${styles.hidden} ${styles[`${item.toLowerCase()}Nav`]}`}>
                                        <h1>{item.toUpperCase()}</h1>
                                    </div>
                                </li> 
                            )
                        )
                    }
                </ul>
        </div>
    )
}

export default HeaderNav;