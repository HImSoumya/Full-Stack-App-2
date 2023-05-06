
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Form = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:8082/postdata', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            });
            const responseData = await response.json();
            console.log(responseData);
            Swal.fire({
                icon: 'success',
                title: 'Data Successfully submitted',
                showConfirmButton: false,
                timer: 1500
            })
            reset();
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }

    }
    return (
        < >
            <div className="container p-4">
                <div className="mainHeading text-center">
                    <h2>Registration Form</h2>
                </div>
                <div className="heading0">
                    <h5>Personal Details</h5>
                    <hr />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-field">
                                <label>Name<span className="text-danger">*</span></label>
                                <input {...register('name', { required: 'name is a required field.' })} type="text" className="form-control" placeholder="Enter Name" />
                                <p className='text-danger'>{errors.name?.message}</p>
                            </div>
                            <div className="input-field">
                                <label>Mobile</label>
                                <input {...register('mobile', {
                                    minLength: {
                                        value: 10,
                                        message: 'Mobile number should have a minimum length of 10 characters.',
                                      },
                                    maxLength: {
                                        value: 10,
                                        message: 'Mobile number should have a maximum length of 10 characters.'
                                    }
                                })} type="number" className="form-control" placeholder="Enter Mobile Number" />
                                <p className='text-danger'>{errors.mobile?.message}</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-sm-8">
                                    <div className="input-field">
                                        <label>Date of Birth or Age<span className="text-danger">*</span></label>
                                        <input {...register('age', { required: 'date of birth or age is a required field.' })} type="text" className="form-control" placeholder="DD/MM/YY or Age In Years" />
                                        <p className='text-danger'>{errors.age?.message}</p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <label>Sex<span className="text-danger">*</span></label>
                                    <select className="form-select" {...register('sex', { required: 'sex is a required field.' })}>
                                        <option selected disabled>Select Sex</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>
                                    </select>
                                    <p className='text-danger'>{errors.sex?.message}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <label>Govt Issued ID</label>
                                    <select className="form-select" {...register('govttype')}>
                                        <option selected disabled>Select ID Type</option>
                                        <option value="Aadhar Card">Aadhar Card</option>
                                        <option value="Pan Card">Pan Card</option>
                                    </select>
                                </div>
                                <div className="col-sm-8">
                                    <div className="input-field">
                                        <label>Govt ID</label>
                                        <input {...register('govtid',{
                                    minLength: {
                                        value: 10,
                                        message: 'enter a valid govt id',
                                      },
                                    maxLength: {
                                        value: 12,
                                        message: 'enter a valid govt id'
                                    }
                                })} type="text" className="form-control" placeholder="Enter Govt ID" />
                                        <p className='text-danger'>{errors.govtid?.message}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="heading1 my-3">
                        <h5>Contact Details</h5>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="input-field">
                                        <label>P/Guardian Details</label>
                                        <select className="form-select" {...register('guardiantype')}>
                                            <option selected disabled>Enter Label</option>
                                            <option value="father">Father</option>
                                            <option value="mother">Mother</option>
                                            <option value="Relative">Relative</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="input-field">
                                        <label>p/Guardian Name</label>
                                        <input {...register('guardianname')} type="text" className="form-control" placeholder="Enter Guardian Name" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="input-field">
                                        <label>Email</label>
                                        <input {...register('email')} type="email" className="form-control" placeholder="Enter Email" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-field">
                                        <label>Emergency Contact Number</label>
                                        <input {...register('emergmobile', {
                                            maxLength: {
                                                value: 10,
                                                message: 'Enter a valid Indian Mobile Number'
                                            }
                                        })} type="number" className="form-control" placeholder="Enter Emergency No." />
                                        <p className='text-danger'>{errors.emergmobile?.message}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="heading2 my-3">
                        <h5>Address Details</h5>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-field">
                                <label>Address</label>
                                <input {...register('address')} type="text" className="form-control" placeholder="Enter Address" />
                            </div>
                            <div className="input-field">
                                <label>Country</label>
                                <select className="form-select" {...register('country')}>
                                    <option selected disabled>Enter Country</option>
                                    <option value="India">India</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="input-field">
                                        <label>State</label>
                                        <select className="form-select" {...register('state')}>
                                            <option selected disabled>Enter State</option>
                                            <option value="OD">Odisha</option>
                                        </select>
                                    </div>
                                    <div className="input-field">
                                        <label>Pincode</label>
                                        <input {...register('pincode')} type="number" className="form-control" placeholder="Enter Pincode" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-field">
                                        <label>City</label>
                                        <input {...register('city')} type="text" className="form-control" placeholder="Enter City/Town/Village" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="heading3 my-3">
                        <h5>Other Details</h5>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="input-field">
                                <label>Occupation</label>
                                <input {...register('occupation')} type="text" className="form-control" placeholder="Enter Occupation" />
                            </div>
                            <div className="input-field">
                                <label>Nationality</label>
                                <input {...register('nationality')} type="text" className="form-control" placeholder="Enter Nationality" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="input-field">
                                <label>Religion</label>
                                <select className="form-select" {...register('religion')}>
                                    <option selected disabled>Enter Religion</option>
                                    <option value="Hinduism">Hinduism</option>
                                    <option value="Sikhism">Sikhism </option>
                                    <option value="Christianity">Christianity</option>
                                    <option value="Islam">Islam</option>
                                    <option value="Buddhism">Buddhism</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="input-field">
                                <label>Marital Status</label>
                                <select className="form-select" {...register('mstatus')}>
                                    <option selected disabled>Enter Martial Status</option>
                                    <option value="single">single</option>
                                    <option value="married">married </option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="input-field">
                                <label>Blood Group</label>
                                <select className="form-select" {...register('bloodgroup')}>
                                    <option selected disabled >Enter Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-success my-3" style={{ width: '100%' }}>submit</button>

                </form>
            </div>
        </>
    )
}

export default Form
