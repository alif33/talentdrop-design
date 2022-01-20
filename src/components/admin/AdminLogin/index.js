import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Cookies from 'universal-cookie';

export default function AdminLogin() {
    const cookies = new Cookies()
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        cookies.set("_email", data.email, { path: '/' })
        // console.log(data)
        // postData('/admin/login', data, setDisable)
        //     .then(res => {  F
        //         if (res?.success) {
        //             cookies.set("_token", res.token, { path: '/' })
        //             dispatch(adminLogin({
        //                 token: res.token,
        //                 user: res.user
        //             }))

        //         }
        //     })

        if (data) {
            router.push("/admin/dashboard")
            console.log('push hocche');
        }
        console.log(data)

    };

    // const styles = {
    //     position: 'absolute',
    //     transform: 'translate(-50%, -50%)',
    //     top: '50%',
    //     left: '50%'
    // }

    return (
        <div className="d-flex flex-center align-items-center flex-column flex-column-fluid p-10 pb-lg-20" style={{ position: 'absolute', transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }}>


            <div className="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" noValidate="novalidate" id="kt_sign_in_form" action="#">
                    <div className="text-center mb-10">
                        <h1 className="text-dark mb-3">Sign In to Talentdrop</h1>
                        <div className="text-gray-400 fw-bold fs-4">New Here?
                            <a href="authentication/flows/basic/sign-up.html" className="link-primary fw-bolder">Create an Account</a></div>
                    </div>

                    <div className="fv-row mb-10 fv-plugins-icon-container">
                        <label className="form-label fs-6 fw-bolder text-dark">Email</label>
                        <input {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
                            className="form-control form-control-lg form-control-solid"
                            autoComplete='off' type='text' name="email" />
                        <div className="fv-plugins-message-container">
                            {errors.email?.type === 'required' && <span className="text-danger">Email is required</span>}
                            {errors.email?.type === "pattern" && <span className="text-danger">Valid email required</span>}
                        </div>

                    </div>
                    <div className="fv-row mb-10 fv-plugins-icon-container">
                        <div className="d-flex flex-stack mb-2">
                            <label className="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
                            <a href="authentication/flows/basic/password-reset.html" className="link-primary fs-6 fw-bolder">Forgot Password ?</a>
                        </div>

                        <input {...register("password", { required: true })}
                            className="form-control form-control-lg form-control-solid"
                            autoComplete='off' type='password' name="password" />
                        <div className="fv-plugins-message-container" >

                            {errors.password && <span className="text-danger">Password is required</span>}
                        </div>

                    </div>
                    <div className="text-center">
                        <button type="submit" id="kt_sign_in_submit" className="btn btn-lg btn-primary fw-bolder me-3 my-2">
                            <span className="indicator-label">Login</span>

                        </button>

                    </div>
                    <div /></form>
            </div>
        </div>
    );
}
