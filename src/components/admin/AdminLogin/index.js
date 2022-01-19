import Link from 'next/link';
import { useForm } from 'react-hook-form';
import styles from './AdminLogin.module.css';
export default function AdminLogin() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);


    return (
        <section className={styles.login__section}>
            <div className="container">
                <div className={styles.login__form_wrapper}>
                    <h3 className={styles.form__title}>Login Now</h3>
                    <form onSubmit={handleSubmit(onSubmit)} action="" className={styles.login__form}>
                        <input {...register('email', { required: true })}
                            className={styles.input_box}
                            type="email" placeholder="Email" />
                        {errors.email && <p className='text-danger'>Email is required.</p>}
                        <input {...register('password', { required: true })}
                            className={styles.input_box}
                            type="password" placeholder="Password" />
                        {errors.password && <p className='text-danger'>Password is required.</p>}
                        <button type="submit">Login</button>
                    </form>
                    <Link href='/'>
                        <a>← Back Home</a>
                    </Link>
                </div>
            </div>
        </section>
    );
}
