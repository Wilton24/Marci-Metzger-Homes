import styles from './ContactInfo.module.css';

export default function ContactInfo() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Left Side: Interaction */}
                <div className={styles.contactFormSide}>
                    <h2 className={styles.title}>Send Message</h2>
                    <form className={styles.form}>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="Name" className={styles.input} />
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="email" placeholder="Email*" required className={styles.input} />
                        </div>
                        <button type="submit" className={styles.sendBtn}>Send</button>
                        <p className={styles.captchaText}>
                            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                        </p>
                    </form>

                    <div className={styles.whatsappBox}>
                        <a href="https://wa.me/12069196886" target="_blank" rel="noreferrer" className={styles.whatsappLink}>
                            <span className={styles.icon}>💬</span> Message us on WhatsApp
                        </a>
                    </div>
                </div>

                {/* Right Side: Details */}
                <div className={styles.infoSide}>
                    <h2 className={styles.title}>Call or Visit</h2>

                    <div className={styles.infoBlock}>
                        <h3 className={styles.brandName}>Marci Metzger</h3>
                        <p className={styles.groupName}>THE RIDGE REALTY GROUP</p>
                        <address className={styles.address}>
                            3190 HW-160, Suite F,<br />
                            Pahrump, Nevada 89048, United States
                        </address>
                        <a href="tel:2069196886" className={styles.phone}>(206) 919-6886</a>
                    </div>

                    <div className={styles.hoursBlock}>
                        <h4>Office Hours</h4>
                        <p className={styles.today}>Open today: <span>08:00 am – 07:00 pm</span></p>
                        <p className={styles.standardHours}>Open daily: 8:00 am - 7:00 pm</p>
                        <p className={styles.note}>
                            Appointments outside office hours available upon request. <strong>Just call!</strong>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}