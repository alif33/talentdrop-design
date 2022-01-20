import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { modalToggle } from "../../../../store/settings/actions";
import Modals from "../Modal";

const ResetPassword = () => {
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#ffffff");
    const [disable, setDisable] = useState(false)
    const dispatch = useDispatch()
    const { settings } = useSelector(state => state)

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onSubmit = async data => {
        setDisable(true)
        if (data) {
            // authPost('/tag', data, admins.token)
            //     .then(res => {
            //         if (res.success) {
            //             toast.success(res.message)
            //             dispatch(setTags())
            //             setDisable(false)
            //             reset()
            //         }
            //     })
            toast.success('Email send success')
            setDisable(false)
        }
    }

    return (

        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Modals>
                <div className="container">
                    <div className="row my-3">
                        <div className="col-md-11">
                            <h5 className="text-center">Reset Password</h5>
                        </div>
                        <div className="col-md-1">
                            <i onClick={() => {
                                dispatch(modalToggle(settings.modal))

                            }} style={{ cursor: 'pointer' }} className="fas fa-times"></i>
                        </div>
                    </div>
                    <div className="row">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <input {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
                                    className="form-control form-control-lg form-control-solid"
                                    autoComplete='off' type='text' name="email" placeholder="Enter reset email" />
                                <div className="fv-plugins-message-container">
                                    {errors.email?.type === 'required' && <span className="text-danger">Email is required</span>}
                                    {errors.email?.type === "pattern" && <span className="text-danger">Valid email required</span>}
                                </div>
                            </div>

                            <div className="mt-3">
                                <button
                                    disabled={disable}
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    {disable ? <BeatLoader color={color} loading={loading} size={12} /> : 'Send'}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </Modals>

        </>
    );
};

export default ResetPassword;