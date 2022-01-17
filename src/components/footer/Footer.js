import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/logo.png';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer__main}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-7">
            <div className={`${styles.footer__info} text-center`}>
              <div className={styles.footer__logo}>
                <Image src={logo} alt="talentdrop" />
                <Link href="/">
                  <a className={styles.header__logo_link}>Talentdrop</a>
                </Link>
              </div>
              <p className={styles.footer__desc}>
                There are many variations of passages of Lorem Ipsum available,
                but themajority have suffered alteration in some form, by
                injected humour
              </p>
              <nav className={styles.footer__menu}>
                <ul>
                  <li>
                    <Link href="">our team</Link>
                  </li>
                  <li>
                    <Link href="">terms of use</Link>
                  </li>
                  <li>
                    <Link href="">privacy policy</Link>
                  </li>
                  <li>
                    <Link href="">for referrers</Link>
                  </li>
                  <li>
                    <Link href="">for employers</Link>
                  </li>
                  <li>
                    <Link href="">pricing</Link>
                  </li>
                  <li>
                    <Link href="">contact us</Link>
                  </li>
                </ul>
              </nav>
              <div className={styles.footer__social}>
                <div className={styles.footer__social_item}>
                  <Link href="" passHref>
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </div>
                <div className={styles.footer__social_item}>
                  <Link href="" passHref>
                    <i className="fab fa-twitter"></i>
                  </Link>
                </div>
                <div className={styles.footer__social_item}>
                  <Link href="" passHref>
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
                <div className={styles.footer__social_item}>
                  <Link href="" passHref>
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </div>
                <div className={styles.footer__social_item}>
                  <Link href="" passHref>
                    <i className="fab fa-google-plus-g"></i>
                  </Link>
                </div>
              </div>
              <p className={styles.footer__copyright}>
                2022 &copy; Crypto Market Cap & Pricing Data Provided By Nomics
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
