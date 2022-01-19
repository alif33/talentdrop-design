import { useForm } from 'react-hook-form';
export default function AdminLogin() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);


    const styles = {
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        left: '50%'
    }

    return (
        <div className="d-flex flex-center align-items-center flex-column flex-column-fluid p-10 pb-lg-20" style={styles}>


            <div className="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
                {/*begin::Form*/}
                <form className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" noValidate="novalidate" id="kt_sign_in_form" action="#">
                    {/*begin::Heading*/}
                    <div className="text-center mb-10">
                        {/*begin::Title*/}
                        <h1 className="text-dark mb-3">Sign In to Metronic</h1>
                        {/*end::Title*/}
                        {/*begin::Link*/}
                        <div className="text-gray-400 fw-bold fs-4">New Here?
                            <a href="authentication/flows/basic/sign-up.html" className="link-primary fw-bolder">Create an Account</a></div>
                        {/*end::Link*/}
                    </div>
                    {/*begin::Heading*/}
                    {/*begin::Input group*/}
                    <div className="fv-row mb-10 fv-plugins-icon-container">
                        {/*begin::Label*/}
                        <label className="form-label fs-6 fw-bolder text-dark">Email</label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input className="form-control form-control-lg form-control-solid" type="text" name="email" autoComplete="off" />
                        {/*end::Input*/}
                        <div className="fv-plugins-message-container" /></div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="fv-row mb-10 fv-plugins-icon-container">
                        {/*begin::Wrapper*/}
                        <div className="d-flex flex-stack mb-2">
                            {/*begin::Label*/}
                            <label className="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
                            {/*end::Label*/}
                            {/*begin::Link*/}
                            <a href="authentication/flows/basic/password-reset.html" className="link-primary fs-6 fw-bolder">Forgot Password ?</a>
                            {/*end::Link*/}
                        </div>
                        {/*end::Wrapper*/}
                        {/*begin::Input*/}
                        <input className="form-control form-control-lg form-control-solid" type="password" name="password" autoComplete="off" />
                        {/*end::Input*/}
                        <div className="fv-plugins-message-container" /></div>
                    {/*end::Input group*/}
                    {/*begin::Actions*/}
                    <div className="text-center">
                        {/*begin::Submit button*/}
                        <button type="submit" id="kt_sign_in_submit" className="btn btn-lg btn-primary fw-bolder me-3 my-2">
                            <span className="indicator-label">Sign In</span>
                            <span className="indicator-progress">Please wait...
                                <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                        </button>
                        {/*end::Submit button*/}

                    </div>
                    {/*end::Actions*/}
                    <div /></form>
                {/*end::Form*/}
            </div>
        </div>
    );
}
