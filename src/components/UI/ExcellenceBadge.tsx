import styles from "./ExcellenceBadge.module.css";

export default function ExcellenceBadge() {
    return (
        <div className={styles.badge}>
            <div className={styles.innerRing}>
                <div className={styles.content}>
                    <div className={styles.number}>30</div>
                    <div className={styles.textSmall}>YEARS OF</div>
                    <div className={styles.textLarge}>EXCELLENCE</div>
                </div>
            </div>
        </div>
    );
}
