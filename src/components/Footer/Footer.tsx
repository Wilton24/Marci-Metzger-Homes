import styles from './Footer.module.css';
import Logo1 from '../../assets/images/logoImg1.webp';
import Logo2 from '../../assets/images/logoImg2.webp';
import Logo3 from '../../assets/images/logoImg3.webp';
import Logo4 from '../../assets/images/logoImg4.webp';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.logoBar}>
                <div className={styles.container}>
                    <div className={styles.logoGrid}>
                        <img src={Logo1} alt="Affiliation 1" />
                        <img src={Logo2} alt="Affiliation 2" />
                        <img src={Logo3} alt="Affiliation 3" />
                        <img src={Logo4} alt="Affiliation 4" />
                    </div>
                </div>
            </div>

            {/* 2. Main Footer Content */}
            <div className={styles.mainFooter}>
                <div className={styles.container}>
                    <div className={styles.contentGrid}>

                        <div className={styles.brandColumn}>
                            <h3 className={styles.footerLogo}>MARCI METZGER<span>HOMES</span></h3>
                            <p>Providing exceptional real estate services with a focus on integrity, expertise, and community knowledge.</p>
                        </div>

                        <div className={styles.socialColumn}>
                            <h4>Connect With Us</h4>
                            <div className={styles.socialIcons}>
                                {/* Replace # with your actual links */}
                                <a href="#" className={styles.iconCircle}>FB</a>
                                <a href="#" className={styles.iconCircle}>IG</a>
                                <a href="#" className={styles.iconCircle}>LN</a>
                                <a href="#" className={styles.iconCircle}>YT</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 3. Bottom Copyright Bar */}
            <div className={styles.bottomBar}>
                <div className={styles.container}>
                    <p>Copyright © {currentYear} Marci METZGER Homes - All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}