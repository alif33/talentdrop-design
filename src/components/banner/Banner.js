import Link from 'next/link';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <section className={styles.banner__section}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className={styles.banner___info}>
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
                  <input type="submit" value="Find Job" />
                </div>
              </div>
              <div className="banner__tags">
                <p>
                  <b>Or try a tag:</b>a16z, blockchain, climate, contrast, data,
                  design...<Link href={''}>See All Tags</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
