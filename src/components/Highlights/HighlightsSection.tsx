import React from 'react';
import styles from './HighlightsSection.module.css';
import sectionImg1 from "../../assets/images/sectionImg1.jfif"
import sectionImg2 from "../../assets/images/sectionImg2.jfif"
import sectionImg3 from "../../assets/images/sectionImg3.jfif"


const Highlights: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>Proven Results</span>
                    <h2 className={styles.title}>GET IT <span className={styles.accent}>SOLD</span></h2>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={sectionImg1} alt="Luxury Interior" className={styles.image} />
                            <div className={styles.overlay}>
                                <span className={styles.stat}>$28.5M</span>
                                <p>Closed in 2021</p>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <h3>Top Residential Sales</h3>
                            <p>We helped nearly 90 clients in 2021. Our team works hard everyday to learn and excel, ensuring our best is better every year.</p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={sectionImg2} alt="Sold Sign" className={styles.image} />
                        </div>
                        <div className={styles.content}>
                            <h3>Don’t Just List it...</h3>
                            <p>We exhaust every avenue to ensure our listings are at the fingertips of every buyer, getting you top dollar for your home.</p>
                            <button className={styles.textLink}>View Marketing Plan →</button>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={sectionImg3} alt="Modern Architecture" className={styles.image} />
                        </div>
                        <div className={styles.content}>
                            <h3>Guide to Buyers</h3>
                            <p>Enjoy having a pro at your service. Market analysis, upgrades lists, and contractors on speed dial.</p>
                            <button className={styles.textLink}>Download Guide →</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Highlights;