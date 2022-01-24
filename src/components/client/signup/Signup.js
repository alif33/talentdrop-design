import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import styles from './Signup.module.css';
import BeatLoader from "react-spinners/BeatLoader";
import { useState } from 'react';
export default function Signup() {

  // form validation rules 
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/, 'At least one uppercase letter, one lowercase letter and one number')
      .min(8, 'Password must be at least 8 characters'),

    confirmation_password: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Passwords must match')

  });
  const formOptions = { resolver: yupResolver(validationSchema) };


  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");
  const [disable, setDisable] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm(formOptions);

  const onSubmit = data => {

    setDisable(true)

    postData('/user/login', data, setDisable)
      .then(res => {
        if (res?.success) {
          cookies.set("user_token", res.token, { path: '/' })
          toast.success('Login Success')
          dispatch(userLogin({
            token: res.token,
            admin: res.admin
          }))
          router.push("/user/dashboard")
        }
      })
  };

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

            <input name="password" type="password" {...register('password')} placeholder='Password' className={` ${errors.password ? 'is-invalid' : ''}`} />
            <div className="invalid-feedback">{errors.password?.message}</div>
            <input name="confirmation_password" type="password" {...register('confirmation_password')} placeholder='Confirmation password' className={` ${errors.confirmPassword ? 'is-invalid' : ''}`} />
            <div className="invalid-feedback">{errors.confirmation_password?.message}</div>

            <button
              disabled={disable}
              type="submit"
              id="kt_sign_in_submit" className="btn btn-lg btn-primary fw-bolder me-3 my-2">
              <span className="indicator-label">
                {disable ? <BeatLoader color={color} loading={loading} size={12} /> : 'Send Message'}

              </span>
            </button>
          </form>
        </div>
      </div >
    </section >
  );
}
