import styles from './PhotoGallery.module.css';
import img1 from '../../assets/images/photoGalleryImg1.webp';
import img2 from '../../assets/images/photoGalleryImg2.webp';
import img3 from '../../assets/images/photoGalleryImg3.webp';
import img4 from '../../assets/images/photoGalleryImg4.webp';
import img5 from '../../assets/images/photoGalleryImg5.webp';
import img6 from '../../assets/images/photoGalleryImg6.webp';
import img7 from '../../assets/images/photoGalleryImg7.webp';
import { useState } from 'react';


const images = [img1, img2, img3, img4, img5, img6, img7];

export default function PhotoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <section className={styles.carouselSection}>
            <div className={styles.container}>
                <h1 className={styles.title}>PHOTO GALLERY</h1>

                <div className={styles.sliderWrapper}>
                    <button className={`${styles.navBtn} ${styles.prev}`} onClick={prevSlide}>
                        &#10094;
                    </button>

                    <div className={styles.trackContainer}>
                        <div
                            className={styles.track}
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {images.map((src, index) => (
                                <div key={index} className={styles.slide}>
                                    <img src={src} alt={`Room ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className={`${styles.navBtn} ${styles.next}`} onClick={nextSlide}>
                        &#10095;
                    </button>

                    {/* Image Counter Badge */}
                    <div className={styles.counter}>
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>

                {/* Thumbnail Navigation */}
                <div className={styles.thumbnailBar}>
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={`${styles.thumb} ${currentIndex === index ? styles.activeThumb : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        >
                            <img src={src} alt="thumbnail" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}