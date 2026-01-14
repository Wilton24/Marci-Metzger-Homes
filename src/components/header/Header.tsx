import HeroImg from "../../assets/images/coolestHome.jpg";
import styles from "./header.module.css";
import logoImg from "../../../public/MarciMetzgerLogo.webp"

export default function Header() {
    return (
        <main className={styles.wrapper}>
            <section
                className={styles.heroSection}
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${HeroImg})` }}
            >
                <header className={styles.header}>
                    <div className={styles.logo}>
                        {/* 🏠 */}
                        <img src={logoImg} alt="Marci Metzger Homes Logo" />
                    </div>
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            <li>HOME</li>
                            <li>LISTINGS</li>
                            <li>LET'S MOVE</li>
                            <li>ABOUT US</li>
                        </ul>
                    </nav>
                    <div className={styles.authButtons}>
                        <button className={styles.loginBtn}>Login</button>
                        <button className={styles.signUpBtn}>Sign up</button>
                    </div>
                </header>

                <div className={styles.heroContent}>
                    <h2>MARCI METZGER - THE RIDGE REALTY GROUP</h2>
                    <h1>Pahrump Realtor</h1>
                    <button className={styles.callNowBtn}>CALL NOW</button>
                </div>
            </section>
        </main>
    );
}