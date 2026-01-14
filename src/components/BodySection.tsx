import styles from './body-section.module.css';
import realtorImg from "../assets/realtor_Img.jfif";
// import threeDecadesLogo from "../assets/images/threeDecadesLogo.jpg";
import ExcellenceBadge from './UI/ExcellenceBadge';

export default function Section() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.leftSection}>
                <div className={styles.imageWrapper}>
                    <img
                        src={realtorImg}
                        className={styles.realtorImage}
                        alt=" An image of Marci Metzger" />
                    <ExcellenceBadge />
                </div>

            </div>


            <div className={styles.rightSection}></div>
            {/* <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorum nostrum doloribus nisi optio aut error
                repellendus omnis neque corporis voluptatibus illo harum dolore provident repudiandae iusto, ad ipsum quos!</h2> */}
        </section>
    )
}