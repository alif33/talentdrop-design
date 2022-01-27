import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import avatar from '../../../assets/avatar.png';
import styles from './Header.module.css';

const Header = () => {
  const router = useRouter()
  const handleDashboard = () => {
    router.push('/login')
  }
  return (
    <header className={`${styles.header} navbar-expand-lg`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-4">
            <div className={styles.header__logo}>
              <Link href="/">
                <a className={styles.header__logo_link}>Talentdrop</a>
              </Link>
            </div>
          </div>
          <nav className="col-4">
            <ul className={`${styles.header__menu}`}>
              <li className={styles.header__menu_li}>
                <Link href="">
                  <a>Start Here</a>
                </Link>
              </li>
              <li className={styles.header__menu_li}>
                <Link href="">
                  <a>Status</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="col-4">
            <div className={styles.user}>
              <button className={`${styles.user__cta_button} primary__button`}>
                General Referral
              </button>
              <div className={styles.user__avatar}>
                <div onClick={handleDashboard} className={styles.user__avatar_img}>
                  <Image src={avatar} alt="img/png" />
                </div>
              </div>
              <div className={styles.mobile__menu}>
                <i className="fas fa-bars"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
