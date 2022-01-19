import Image from 'next/image';
import ample from '../../../assets/ample1.png';
import styles from './Card.module.css';

export default function CardGrid() {
  return (
    <div className={`${styles.card__wrapper}`}>
      <div className={`${styles.card__body} text-center`}>
        <div className={styles.card__img}>
          <Image src={ample} alt="card/img" />
        </div>
        <h3 className={styles.card__title}>Ample</h3>
        <h4 className={styles.card__subtitle}>softwere engineer, c/c++</h4>
        <p className={styles.card__schedule}>remote/fulltime</p>
        <p className={styles.card__price}>
          <span>$10,000</span> new
        </p>
      </div>
      <div className={styles.card__footer}>
        <div className={styles.card__location}>
          <i className="fas fa-map-marker-alt"></i>
          <span>San Francisco, CA, USA</span>
        </div>
        <button type="submit">refer</button>
      </div>
    </div>
  );
}
