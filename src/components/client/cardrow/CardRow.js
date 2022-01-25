import Image from 'next/image';
import ample from '../../../assets/ample1.png';
import styles from './CardRow.module.css';
import { useState, useEffect } from 'react';

export default function CardRow({job}) {
  const {job_title, job_salary, company_id } = job
  const [company, setCompany] = useState({})

  useEffect(() => {
    // getData(`/company/${company_id}`)
    // .then(res => setCompany(res))
  }, [company_id])
  
  return (
    <div className={styles.card__row_wrapper}>
      <div className={styles.card__img}>
        <Image src={ample} alt="" />
      </div>
      <div className={styles.card__body}>
        <h3 className={styles.card__title}>Ample</h3>
        <div className={styles.card__details}>
          <h4 className={styles.card__subtitle}>{job_title}</h4>
          <p className={styles.card__location}>San Francisco, CA, USA</p>
          <p className={styles.card__condition}>New</p>
          <p className={styles.card__price}>{`$${job_salary}`}</p>
          <button type="submit">refer now</button>
        </div>
        <p className={styles.card__schedule}>Remote/Fulltime</p>
      </div>
    </div>
  );
}
