import Image from 'next/image';
import Link from 'next/link';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <section className={styles.banner__section}>
      <div className={`container ${styles.banner__continer}`}>
        <div className={styles.banner__row}>
          <div className={styles.banner__info}>
            <h2 className={styles.banner__info_title}>
              There are 93.178 postings here for you!
            </h2>
            <div className={styles.banner__findJob}>
              <div className={styles.banner__search}>
                <i className="fas fa-search"></i>
                <input
                  type="search"
                  placeholder="What job are you looking for?"
                />
              </div>
              <div className={styles.banner__submit}>
                <i className="fas fa-map-marker-alt"></i>
                <span>Where looking for?</span>
                <input
                  type="submit"
                  className="primary__button"
                  value="Find Job"
                />
              </div>
            </div>
            <div className={styles.banner__tags}>
              <p>
                <b>Or try a tag:</b>
                <span>
                  a16z, blockchain, climate, contrast, data, design...
                </span>
                <Link href="/">
                  <a className={styles.see__all_tags}>See All Tags</a>
                </Link>
              </p>
            </div>
          </div>
          <div className={styles.banner__image}>
            <div className={styles.banner__image_short}>
              <Image src={img1} alt="img/png" />
            </div>
            <div className={styles.banner__image_long}>
              <Image src={img2} alt="img/png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
