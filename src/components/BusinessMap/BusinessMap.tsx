import styles from './BusinessMap.module.css';

export default function BusinessMap() {
    const address = "3190+HW-160,+Suite+F,+Pahrump,+Nevada+89048";
    const mapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY_HERE&q=${address}`;

    return (
        <section className={styles.mapSection}>
            <div className={styles.container}>
                <div className={styles.mapCard}>
                    <iframe
                        title="Business Location"
                        className={styles.iframe}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.786438515065!2d-115.98776662424845!3d36.07430487242133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c655909f2d114d%3A0x8681d4a0f4a834b6!2s3190%20NV-160%20f%2C%20Pahrump%2C%20NV%2089048!5e0!3m2!1sen!2sus!4v1705280000000!5m2!1sen!2sus"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className={styles.directionsBar}>
                    <div className={styles.text}>
                        <p><strong>The Ridge Realty Group</strong></p>
                        <p>Visit us in the heart of Pahrump, Nevada.</p>
                    </div>
                    <a
                        href="https://maps.app.goo.gl/YourActualShortLink"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.directionBtn}
                    >
                        GET DIRECTIONS
                    </a>
                </div>
            </div>
        </section>
    );
}