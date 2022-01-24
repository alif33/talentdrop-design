
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { getData, postData } from './../../../../../../__lib__/helpers/HttpService';
const CompanyForm = () => {
    const [disable, setDisable] = useState(false)
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#ffffff");
    const [countries, setCountries] = useState(null)
    const [states, setStates] = useState(null)
    const [timezone, setTimezone] = useState(null)
    const [info, setInfo] = useState({
        company_name: '',
        company_description: '',
        website_url: '',
        employee_number: '',
        timezone_id: '',
        founded_date: '',
        country_id: '',
        state_id: '',
        facebook_url: '',
        twitter_url: '',
        linkdin_url: '',
        instagram_url: ''
    })
    const { admins } = useSelector(state => state)

    useEffect(() => {
        allCountry()
    }, [])

    const allCountry = () => {
        getData('/countries')
            .then(res => {
                if (res) {
                    setCountries(res)
                }

            })
    }
    const allState = () => {
        getData(`/states/${info.country_id}`)
            .then(res => {
                if (res) {
                    setStates(res)
                }
            })
    }
    const allTimezone = () => {
        getData(`/timezones/${info.country_id}`)
            .then(res => {
                if (res) {
                    setTimezone(res)
                }
            })
    }
    const onSubmit = async data => {

        setDisable(true)
        const formData = new FormData()

        formData.append('company_name', data.company_name)
        formData.append('company_description', data.company_description)
        formData.append('website_url', data.website_url)
        formData.append('employee_number', data.employee_number)
        formData.append('timezone_id', data.timezone_id)
        formData.append('founded_date', data.founded_date)
        formData.append('country_id', data.country_id)
        formData.append('state_id', data.state_id)
        formData.append('facebook_url', data.facebook_url)
        formData.append('twitter_url', data.twitter_url)
        formData.append('linkdin_url', data.linkdin_url)
        formData.append('instagram_url', data.instagram_url)
        formData.append('image', data.company_logo[0])
        await submitData(formData)
    }


    const submitData = async data => {
        setDisable(true)
        postData('/company', data, setDisable)

            .then(res => {

                if (res.success) {
                    toast.success(res.message)
                    setDisable(false)
                    reset()
                }
            })

    }
    const styles = {
        position: 'absolute',
        marginTop: '12px',
        marginLeft: '12px',
    }
    console.log(info);
    console.log(states);
    console.log(timezone);
    return (
        <>

            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className='row'>
                        <div className='col-12 col-sm-6'>
                            <div className="mb-3 col-12">
                                <label>Company Name</label>

                                <div>
                                    <span style={styles}>
                                        <i className="fa fa-building"></i>
                                    </span>
                                    <input
                                        name="company_name"
                                        onChange={e => setInfo({
                                            ...info,
                                            company_name: e.target.value
                                        })}
                                        className="form-control"
                                        placeholder="Type company name"
                                        style={{ paddingLeft: '30px' }}
                                    />
                                </div>

                            </div>
                            <div className="mb-3 col-12">
                                <label>Company logo</label>
                                <input
                                    required
                                    accept=".png, .jpg"
                                    name="company_logo"
                                    type='file'
                                    className="form-control"
                                    placeholder="Type company name"
                                />

                            </div>

                        </div>
                        <div className="mb-3 col-12 col-sm-6 position-relative" >
                            <label>Company Description</label>
                            <textarea
                                name="company_description"
                                onChange={e => setInfo({
                                    ...info,
                                    company_description: e.target.value
                                })}
                                maxLength="250"
                                required
                                rows="4"
                                className="form-control"
                                placeholder="Description"
                                style={{ resize: 'none' }}
                            />
                            <p style={{ position: 'absolute', top: '76%', left: '89.5%' }}>

                                {/* <span className={`${watch().company_description?.length === 250 && 'text-danger'}`}>{watch().company_description?.length}/250</span> */}
                            </p>

                        </div>
                        <div className="mb-3 col-12 col-sm-6">
                            <label>Wesite URL</label>

                            <div>
                                <span style={styles}>
                                    <i className="fas fa-globe"></i>
                                </span>
                                <input
                                    name="website_url"
                                    onChange={e => setInfo({
                                        ...info,
                                        website_url: e.target.value
                                    })}
                                    value={info.website_url}
                                    className="form-control"
                                    placeholder="https://www.website.com"
                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>

                        </div>
                        <div className="mb-3 col-12 col-sm-6">
                            <label>Employee number</label>

                            <div>
                                <span style={styles}>
                                    <i className="fas fa-user"></i>
                                </span>
                                <input
                                    name="employee_number"
                                    onChange={e => setInfo({
                                        ...info,
                                        employee_number: e.target.value
                                    })}
                                    type='number'
                                    value={info.employee_number}
                                    className="form-control"
                                    placeholder="Type Employe number"
                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>
                        </div>
                        <div className="mb-3 col-12 col-sm-6">
                            <label>Time Zone</label>

                            <div>
                                <span style={styles}>
                                    <i className="fas fa-globe"></i>
                                </span>
                                <select

                                    required
                                    name="timezone_id"
                                    onChange={e => setInfo({
                                        ...info,
                                        timezone_id: e.target.value
                                    })}
                                    type='select'
                                    className="form-control"

                                    style={{ paddingLeft: '30px' }}
                                >
                                    <option >Select time zone</option>
                                    {
                                        timezone?.map((item, index) => <option key={index} value={item.id}>{item.time_zone_area}</option>)
                                    }

                                </select>
                            </div>
                        </div>
                        <div className="mb-3 col-12 col-sm-6">
                            <label>Founded Date</label>

                            <div>
                                <span style={styles}>
                                    <i className="fas fa-calendar-alt"></i>
                                </span>
                                <input
                                    name="founded_date"
                                    onChange={e => setInfo({
                                        ...info,
                                        founded_date: e.target.value
                                    })}
                                    type='date'
                                    className="form-control"

                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>
                        </div>
                        <div className="mb-3 col-12 col-sm-6">
                            <label>Country</label>

                            <div>
                                <span style={styles}>
                                    <i className="fas fa-flag"></i>
                                </span>
                                <select
                                    required
                                    name="country_id"
                                    onChange={e => {
                                        setInfo({
                                            ...info,
                                            country_id: e.target.value
                                        })
                                        allState()
                                        allTimezone()
                                    }}
                                    type='select'
                                    className="form-control"

                                    style={{ paddingLeft: '30px' }}
                                >
                                    <option >Select Country</option>
                                    {
                                        countries?.map((item, index) => <option key={index} value={item.id}>{item.country_name}</option>)
                                    }
                                </select>

                            </div>
                        </div>
                        <div className="mb-3 col-12 col-sm-6">
                            <label>State</label>

                            <div>
                                <span style={styles}>
                                    <i className="fas fa-map-marker"></i>
                                </span>
                                <select

                                    required
                                    name="state_id"
                                    onChange={e => setInfo({
                                        ...info,
                                        state_id: e.target.value
                                    })}
                                    type='select'
                                    className="form-control"
                                    disabled={!states?.length}
                                    style={{ paddingLeft: '30px' }}
                                >
                                    <option >Select State</option>
                                    {
                                        states?.map((item, index) => <option key={index} value={item.id}>{item.state_name}</option>)
                                    }

                                </select>
                            </div>

                        </div>
                        <div className="mb-3 col-12 col-sm-6">
                            <label>Facebook</label>
                            <div>
                                <span style={styles}>
                                    <i className="fab fa-facebook-square"></i>
                                </span>
                                <input
                                    name="facebook_url"
                                    onChange={e => setInfo({
                                        ...info,
                                        facebook_url: e.target.value
                                    })}
                                    className="form-control"
                                    placeholder="Facebook link"
                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>
                        </div>
                        <div className="mb-3 col-12 col-sm-6">
                            <label>Twitter</label>
                            <div>
                                <span style={styles}>
                                    <i className="fab fa-twitter-square"></i>
                                </span>
                                <input
                                    name="twitter_url"
                                    onChange={e => setInfo({
                                        ...info,
                                        twitter_url: e.target.value
                                    })}
                                    className="form-control"
                                    placeholder="Twitter link"
                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>
                        </div>
                        <div className="mb-3 col-12 col-sm-6">
                            <label>Linkdin</label>
                            <div>
                                <span style={styles}>
                                    <i className="fab fa-linkedin"></i>
                                </span>
                                <input
                                    name="linkdin_url"
                                    onChange={e => setInfo({
                                        ...info,
                                        linkdin_url: e.target.value
                                    })}
                                    className="form-control"
                                    placeholder="Facebook link"
                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>
                        </div>
                        <div className="mb-3 col-12 col-sm-6">
                            <label>Instagram (Optional)</label>
                            <div>
                                <span style={styles}>
                                    <i className="fab fa-instagram-square"></i>
                                </span>
                                <input
                                    name="instagram_url"
                                    onChange={e => setInfo({
                                        ...info,
                                        instagram_url: e.target.value
                                    })}
                                    className="form-control"
                                    placeholder="Instagram link"
                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>
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

export default CompanyForm;