import styles from './Services.module.css';

export default function Services() {
  return (
    <section className={styles.outerWrapper}>
      {/* SECTION 1: HERO STYLE */}
      <div className={styles.fullPanel}>
        <div className={styles.imageContainer}>
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000" alt="Luxury Home" />
        </div>
        <div className={styles.contentOverlay}>
          <div className={styles.textContainer}>
            <span className={styles.label}>01 — BUYING & SELLING</span>
            <h2 className={styles.giantTitle}>Real Estate Done Right</h2>
            <p className={styles.description}>
              Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence,
              looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: THE SPLIT PANEL */}
      <div className={styles.fullPanel}>
        <div className={`${styles.contentOverlay} ${styles.leftAlign}`}>
          <div className={styles.textContainer}>
            <span className={styles.label}>02 — OUR DIVERSITY</span>
            <h2 className={styles.giantTitle}>Commercial & Residential</h2>
            <p className={styles.description}>
              Large or small, condo or mansion, we can find it and get it at the price that's right.
              Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community.
            </p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000" alt="Commercial Building" />
        </div>
      </div>

      {/* SECTION 3: FOCUS PANEL */}
      <div className={styles.fullPanel}>
        <div className={styles.imageContainer}>
          <img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2000" alt="Expertise" />
        </div>
        <div className={styles.contentOverlay}>
          <div className={styles.textContainer}>
            <span className={styles.label}>03 — TRUST</span>
            <h2 className={styles.giantTitle}>Rely on Expertise</h2>
            <p className={styles.description}>
              If you have questions about affordability, credit, and loan options, trust us to connect you with the right people.
              We make sure you feel confident and educated every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}