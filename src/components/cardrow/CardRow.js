import Image from 'next/image';
import ample from '../../assets/ample1.png';
import styles from './CardRow.module.css';

export default function CardRow() {
  return (
    <div className={styles.card__row_wrapper}>
      <div className={styles.card__img}>
        <Image src={ample} alt="" />
      </div>
      <div className={styles.card__body}>
        <h3 className={styles.card__title}>Ample</h3>
        <div className={styles.card__details}>
          <h4 className={styles.card__subtitle}>software engineer, c/c++</h4>
          <p className={styles.card__location}>San Francisco, CA, USA</p>
          <p className={styles.card__condition}>New</p>
          <p className={styles.card__price}>$10,000</p>
          <button type="submit">refer now</button>
        </div>
        <p className={styles.card__schedule}>Remote/Fulltime</p>
      </div>
    </div>
  );
}
