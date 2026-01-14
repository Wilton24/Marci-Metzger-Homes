// import React from 'react';
import styles from './SearchListings.module.css';

export default function SearchListings() {
    return (
        <section className={styles.heroWrapper}>
            <div className={styles.overlay}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Find Your Dream Home</h1>

                    <form className={styles.searchForm}>
                        <div className={styles.grid}>

                            <div className={styles.inputGroup}>
                                <label>Location</label>
                                <select>
                                    <option>Select Location</option>
                                    <option>New York</option>
                                    <option>Seattle</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Type</label>
                                <select>
                                    <option>Property Type</option>
                                    <option>Single Family</option>
                                    <option>Condo</option>
                                    <option>Townhouse</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Sort By</label>
                                <select>
                                    <option>Newest</option>
                                    <option>Oldest</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Beds: Low to High</option>
                                    <option>Beds: High to Low</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Bedrooms</label>
                                <select>
                                    <option>Any Number</option>
                                    <option>Studio</option>
                                    <option>1+</option>
                                    <option>2+</option>
                                    <option>3+</option>
                                    <option>4+</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Baths</label>
                                <select>
                                    <option>Any Number</option>
                                    <option>1+</option>
                                    <option>2+</option>
                                    <option>3+</option>
                                </select>
                            </div>

                            <div className={styles.priceGroup}>
                                <div className={styles.inputSubGroup}>
                                    <label>Min Price</label>
                                    <input type="number" placeholder="$" />
                                </div>
                                <div className={styles.inputSubGroup}>
                                    <label>Max Price</label>
                                    <input type="number" placeholder="$" />
                                </div>
                            </div>

                        </div>

                        <button type="submit" className={styles.searchBtn}>
                            SEARCH NOW
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}