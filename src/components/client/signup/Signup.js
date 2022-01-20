import { useForm } from "react-hook-form";
import styles from './Signup.module.css';

export default function Signup() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <section className={styles.signup__section}>
      <div className="container">
        <div className={styles.signup__form_wrapper}>
          <h3 className={styles.form__title}>Sign Up Now</h3>
          <form onSubmit={handleSubmit(onSubmit)} action="" className={styles.signup__form}>
            <input {...register("name", { required: true })} type="text" placeholder="Name" />
            {errors.name && <span className="text-danger">Name is required</span>}

            <input {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} type="text" placeholder="Email" />
            {errors.email?.type === 'required' && <span className="text-danger">Email is required</span>}
            {errors.email?.type === "pattern" && <span className="text-danger">Invalid email</span>}

            <input {...register("password", { required: true, pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/ })} placeholder="Password" type="password" />
            {errors.password?.type === 'required' && <span className="text-danger">Password is required</span>}
            {errors.password?.type === 'pattern' && <span className="text-danger">Minimum eight characters, at least one uppercase letter, one lowercase letter and one number</span>}
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </section>
  );
}
