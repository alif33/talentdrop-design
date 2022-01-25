import CardGrid from '../card/CardGrid';
import CardRow from '../cardrow/CardRow';
import styles from './Cards.module.css';

export default function Cards({children}) {
  return (
    <section className={styles.cards__section}>
      <div className={`${styles.toggle__container} container`}>
        <div className="row justify-content-end">
          <div className="col-6 d-flex justify-content-end">
            <div className={styles.card__view_toggler}>
              <input type="checkbox" name="card__toggler" id="card__toggler" />

              <label htmlFor={styles.toggler__switch}>
                <span className={styles.toggler__list}>
                  <i className="fas fa-list"></i>
                </span>
              </label>
              <label htmlFor={styles.toggler__switch}>
                <span className={styles.toggler__grid}>
                  <i className="fas fa-th"></i>
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="container">
          {/* <div className={`${styles.card__row} row`}>
            <div className="col-sm-12 col-md-6 col-lg-4 p-3 text-center">
              <CardGrid />
            </div>
          </div> */}
          <div className="row">
            <div className="col-12 ">
             <div className={styles.card__row}>
           {children}
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
