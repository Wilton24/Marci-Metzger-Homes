import styles from './body-section.module.css';
import realtorImg from "../assets/realtor_Img.jfif";
import ExcellenceBadge from './UI/ExcellenceBadge';

export default function Section() {
    return (
        <section className={styles.wrapper}>
            {/* Left section */}
            <div className={styles.leftSection}>
                <div className={styles.imageWrapper}>
                    <img
                        src={realtorImg}
                        className={styles.realtorImage}
                        alt=" An image of Marci Metzger" />
                    <div className={styles.excellenceBadgeContainer}>
                        <ExcellenceBadge />
                    </div>

                </div>

            </div>

            {/* Right section */}
            <div className={styles.rightSection}>
                <h2 className={styles.trustedLocalExpert}>TRUSTED LOCAL EXPERT</h2>
                <h1 className={styles.realtorName}>Marci Metzger</h1>
                <p className={styles.description}>With over 30 years of experience, Marci Metzger has built a reputation for excellence in real estate. Her dedication
                    to her clients and the community has made her a trusted name in the industry.</p>
                <div className={styles.contactDetails}>
                    <h2 className={styles.directLine}>DIRECT LINE</h2>
                    <h1 className={styles.contactNumber}>206.919.6886</h1>
                </div>
                <button className={styles.bookConsultationButton}>Book a Consultation</button>
            </div>
        </section>
    )
}