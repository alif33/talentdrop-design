import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import img1 from '../../../assets/img1.png';
import img2 from '../../../assets/img2.png';
import styles from './Banner.module.css';

const allTags = ['a16z', 'blockchain', 'climate', 'contrast', 'data', 'design', 'hello', 'world', 'how', 'to', 'him', 'javaSctipt', 'SQL']

const Banner = () => {
  const [allTag, setAllTag] = useState(false)
  const [changeValue, setChangeValue] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(changeValue)
  }
  const sortTags = allTags.slice(0, 6)
  return (
    <section className={styles.banner__section}>
      <div className={`container ${styles.banner__continer}`}>
        <div className={styles.banner__row}>
          <div className={styles.banner__info}>
            <h2 className={styles.banner__info_title}>
              There are 93.178 postings here for you!
            </h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.banner__findJob}>
                <div className={styles.banner__search}>
                  <i className="fas fa-search"></i>
                  <input
                    onChange={e => setChangeValue(e.target.value)}
                    name='searchType'
                    type="search"
                    placeholder="What job are you looking for?"
                  />
                </div>
                <div className={styles.banner__search}>
                  <i className="fas fa-map-marker-alt"></i>
                  <input
                    name="location"
                    type=""
                    placeholder="Where looking for?" />
                </div>
                <div className={styles.banner__submit}>
                  <input
                    type="submit"
                    className="primary__button"
                    value="Find Job"
                  />
                </div>
              </div>
            </form>
            <div className={styles.banner__tags}>
              <p>
                <b>Or try a tag:</b>
                {allTag ? <span> {allTags.map((tag, i) => (
                  <Link href={`/tag/${tag.toLowerCase()}`} key={i}>
                    <a className={styles.banner_tag_names}>{tag},</a>
                  </Link>
                ))} </span> : <span>
                  {sortTags.map((tag, i) => (
                    <Link href={`/tag/${tag.toLowerCase()}`} key={i}>
                      <a className={styles.banner_tag_names}>{tag},</a>
                    </Link>
                  ))}
                  ...</span>}

                <span className={styles.see__all_tags} onClick={() => setAllTag(!allTag)}>{allTag ? 'collapse' : 'See All Tags'}</span>

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
