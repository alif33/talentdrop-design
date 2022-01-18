import styles from './Login.module.css';

export default function Login() {
  return (
    <section className={styles.login__section}>
      <div className="container">
        <div className={styles.login__form_wrapper}>
          <h3 className={styles.form__title}>Login Now</h3>
          <form action="" className={styles.login__form}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Send Message</button>
            <button type="reset">Forgot Password?</button>
          </form>
        </div>
        <p>Log in With</p>
      </div>
    </section>
  );
}
