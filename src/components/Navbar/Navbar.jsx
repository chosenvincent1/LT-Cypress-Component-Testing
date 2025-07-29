import styles from './Navbar.module.scss';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <img 
                    src="https://www.lambdatest.com/resources/images/logos/logo.svg" 
                    alt="LambdaTest Logo"
                    className={styles.logo}
                />
            </div>

            <div className={styles.navbarContent}>
                <div className={styles.toggleMenu}>
                    <img 
                        src="https://www.lambdatest.com/resources/images/icons/toggle_menu.svg" 
                        alt="Toggle Menu"
                        className={styles.toggleMenuIcon}
                    />
                </div>

                <div className={styles.navLinks}>
                    <a href="#">Platform</a>
                    <a href="#">Solution</a>
                    <a href="#">Resources</a>
                    <a href="#">Developers</a>
                    <a href="#">Pricing</a>
                </div>
            </div>

            <div className={styles.navbarActions}>
                <button className={styles.loginBtn} >Login</button>
                <button className={styles.bookDemo}>Book a Demo</button>
                <button className={styles.getStarted}>Get Started Free</button>
            </div>
        </nav>
    )
}