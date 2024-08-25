import styles from './navbar.module.css'
export default function NavBar() {
    return (
        <div className={styles.nav}>
            <div className={styles.navLogo}>EV-olution</div>
            <ul className={styles.navMenu}>
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li className={styles.navContact}>Contact</li>
            </ul>

        </div>
)}