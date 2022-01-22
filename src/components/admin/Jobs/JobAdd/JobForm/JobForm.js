
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { postData } from './../../../../../../__lib__/helpers/HttpService';
import stylesClass from './JobForm.module.css';
const data = [
    { id: 1, name: 'Jahid' }, { id: 2, name: 'Jahid' }, { id: 3, name: 'Rasel' }, { id: 4, name: 'Nasir' }, { id: 5, name: 'Monir' }
]
const JobForm = () => {
    const [disable, setDisable] = useState(false)
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#ffffff");
    const { admins } = useSelector(state => state)
    const [companies, setCompanies] = useState([])
    const [filterData, setFilterData] = useState([])
    const [search, setSearch] = useState({})
    const { register, watch, handleSubmit, formState: { errors }, reset } = useForm()

    // let filterData = []
    if (watch('company_id')) {
        const searchWord = watch('company_id')
        filterData = data.filter((value) => {
            return value.name.includes(searchWord)
        })


    }

    useEffect(() => {
        // getData('/companies')
        //     .then(res => {
        //         if (res) {
        //             setCompanies(res)
        //         }
        //     })
    }, [])

    const addSearch = (data) => {
        setSearch(data)

    }
    console.log(search)
    const onSubmit = async data => {

        setDisable(true)
        postData('/job', data, setDisable)
            .then(res => {
                console.log(res)
                if (res.success) {
                    toast.success(res.message)
                    setDisable(false)
                    reset()
                }
            })
        // const formData = new FormData()

        // await submitData(formData)

    }


    // const submitData = async data => {


    // }
    const styles = {
        position: 'absolute',
        marginTop: '12px',
        marginLeft: '12px',
    }

    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className='row'>
                        <div className="mb-3 col-12 col-sm-6 position-relative">
                            <label>Company Name</label>
                            {<h2>{search.name}</h2>}
                            <div>
                                <span style={styles}>
                                    <i className="fas fa-search"></i>
                                </span>
                                <input
                                    defaultValue={search?.name}
                                    {...register("company_id",
                                        {
                                            required: true
                                        }
                                    )}
                                    className="form-control"
                                    placeholder="Search here"
                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>
                            {errors.company_id && <span className="text-danger">Company name required</span>}
                            {filterData.length > 0 &&
                                <div className={`border rounded px-3 py-4 position-absolute bg-secondary col-11 
                                search-list-area ${stylesClass.search__list__area}`}>





                                    <ul className="list-unstyled">
                                        {filterData.map((item, i) => <li onClick={() => addSearch(item)} className='p-2 nav-link'>{item.name}</li>)}

                                    </ul>
                                </div>

                            }

                            {/* <ul className="list-unstyled">
                                {filterData?.map((item, i) => <li className='p-2'>{item.name}</li>)}

                            </ul> */}
                        </div>
                        <div className="mb-3 col-12 col-sm-6">
                            <label>Job Title</label>

                            <div>
                                <span style={styles}>
                                    <i className="fas fa-pen"></i>
                                </span>
                                <input
                                    {...register("job_title",
                                        {
                                            required: true
                                        }
                                    )}

                                    className="form-control"
                                    placeholder="Job title here"
                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>
                            {errors.job_title && <span className="text-danger">Job title required</span>}

                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="mb-3 col-12 col-sm-12">
                                <label>Job Salary</label>
                                <div>
                                    <span style={styles}>
                                        <i className="fas fa-money-check"></i>
                                    </span>
                                    <input
                                        {...register("job_salary",
                                            {
                                                required: true
                                            }
                                        )}
                                        type="number"
                                        className="form-control"
                                        placeholder="Job salary"
                                        style={{ paddingLeft: '30px' }}
                                    />
                                </div>
                                {errors.job_salary && <span className="text-danger">Job Salary required</span>}

                            </div>
                            <div className="mb-3 col-12 col-sm-12">
                                <label>Job Vacancy</label>
                                <div>
                                    <span style={styles}>
                                        <i className="fas fa-users"></i>
                                    </span>
                                    <input
                                        {...register("job_vacancy",
                                            {
                                                required: true
                                            }
                                        )}
                                        type="number"
                                        className="form-control"
                                        placeholder="Job vacancy"
                                        style={{ paddingLeft: '30px' }}
                                    />
                                </div>
                                {errors.job_vacancy && <span className="text-danger">Job vacancy required</span>}

                            </div>
                            <div className="mb-3 col-12 col-sm-12">
                                <label>Job Bounty</label>
                                <div>
                                    <span style={styles}>
                                        <i className="fas fa-hand-holding-usd"></i>
                                    </span>
                                    <input
                                        {...register("job_bounty",
                                            {
                                                required: true
                                            }
                                        )}

                                        className="form-control"
                                        placeholder="Job bounty"
                                        style={{ paddingLeft: '30px' }}
                                    />
                                </div>
                                {errors.job_bounty && <span className="text-danger">Job bounty is required</span>}

                            </div>
                        </div>
                        <div className="mb-3 col-12 col-sm-6 position-relative" >
                            <label>Job Description</label>
                            <textarea
                                // minLength='100'
                                maxLength="250"
                                required

                                {...register("job_description",
                                    {
                                        required: true,
                                    }
                                )}
                                className="form-control"
                                placeholder="Description"
                                style={{ resize: 'none', height: '187px' }}
                            />
                            <p style={{ position: 'absolute', top: '76%', left: '89.5%' }}>

                                <span className={`${watch().job_description?.length === 250 && 'text-danger'}`}>{watch().job_description?.length}/250</span>
                            </p>
                            {errors.job_description && <span className="text-danger">Description is required</span>}

                        </div>

                    </div>

                    <div>

                    </div>
                </div>

                <div className="mt-3 text-center">
                    <button
                        disabled={disable}
                        type="submit"
                        className="btn btn-primary">

                        {disable ? <BeatLoader color={color} loading={loading} size={12} /> : 'Add Company'}
                    </button>
                </div>

            </form>
        </>
    );
};

export default JobForm;