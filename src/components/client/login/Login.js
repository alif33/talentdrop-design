import { useForm } from "react-hook-form";
import styles from './Login.module.css';

export default function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <section className={styles.login__section}>
      <div className="container">
        <div className={styles.login__form_wrapper}>
          <h3 className={styles.form__title}>Login Now</h3>
          <form onSubmit={handleSubmit(onSubmit)} action="" className={styles.login__form}>
            {/* <input type="email" placeholder="Email" /> */}
            <input {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} type="text" placeholder="Email" />
            {errors.email?.type === 'required' && <span className="text-danger">Email is required</span>}
            {errors.email?.type === "pattern" && <span className="text-danger">Valid email required</span>}
            {/* <input type="password" placeholder="Password" /> */}
            <input {...register("password", { required: true })} placeholder="Password" type="password" />
            {errors.password && <span className="text-danger">Password is required</span>}

            <button type="submit">Send Message</button>
            <button type="reset">Forgot Password?</button>
          </form>
        </div>
      </div>
    </section>
  );
}
