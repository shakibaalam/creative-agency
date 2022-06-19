import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { FaUserEdit } from 'react-icons/fa';

const Profile = () => {
    const [user] = useAuthState(auth);
    const [edit, setEdit] = useState(null);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const { data: mongoUser, isLoading, refetch } = useQuery(['mongoUser', user?.email], () => fetch(`https://gentle-savannah-01985.herokuapp.com/user/${user?.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        console.log(data);
        fetch(`https://gentle-savannah-01985.herokuapp.com/user/${user?.email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(inserted => {
                console.log(inserted);
                if (inserted.modifiedCount) {
                    toast.success('successfully updated')
                    refetch()
                    setEdit(null)
                }
            });

    }
    return (
        <div className='lg:flex lg:mx-32 my-10'>
            <div className='mt-5 pl-4 text-center lg:text-left lg:flex-1'>
                <div className='my-5'>
                    <h2 className='text-3xl text-blue-900 font-bold'>{mongoUser?.name ? mongoUser?.name : user?.displayName} <span className='text-lg text-secondary'>({mongoUser?.role ? mongoUser?.role : 'user'})</span></h2>
                    <h4>{mongoUser?.email}</h4>
                    <p className='mt-2'>Address: {mongoUser?.address}</p>
                    <p className='mt-2'>City: {mongoUser?.city}</p>
                    <p className='mt-2'>State: {mongoUser?.state}</p>
                    <p className='mt-2'>Country: {mongoUser?.country}</p>
                    <p className='mt-2'>Company name: {mongoUser?.company}</p>
                    <p className='mt-2'>Occupation: {mongoUser?.occupation}</p>
                    <p className='mt-2'>Phn no: {mongoUser?.phn}</p>

                    <button onClick={() => setEdit(mongoUser)} className="btn btn-primary my-4 px-4"><FaUserEdit className='mr-2 text-xl'></FaUserEdit> Edit Profile</button>
                </div>
            </div>
            {
                edit && <div className='lg:flex-1'>
                    <div>
                        <h2 className='text-2xl font-bold'>Edit your Profile!!!!</h2>
                        <div className='mt-5'>
                            <form onSubmit={handleSubmit(onSubmit)} className=' grid grid-cols-1 gap-3 justify-items-center'>

                                <div className="form-control w-full max-w-xs text-center">
                                    <input type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Name is required'
                                            }
                                        })} />

                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                                    </label>

                                </div>
                                <div className="form-control w-full max-w-xs text-center">
                                    <input type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'email is required'
                                            }
                                        })} />

                                    <label className="label">
                                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                    </label>

                                </div>
                                <div className="form-control w-full max-w-xs text-center">
                                    <input type="text" placeholder="Enter your address" className="input input-bordered w-full max-w-xs"
                                        {...register("address", {
                                            required: {
                                                value: true,
                                                message: 'address is required'
                                            }
                                        })} />

                                    <label className="label">
                                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-600">{errors.address.message}</span>}
                                    </label>

                                </div>
                                <div className="form-control w-full max-w-xs text-center">
                                    <input type="text" placeholder=" your city" className="input input-bordered w-full max-w-xs"
                                        {...register("city", {
                                            required: {
                                                value: true,
                                                message: 'city is required'
                                            }
                                        })} />

                                    <label className="label">
                                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-600">{errors.city.message}</span>}
                                    </label>

                                </div>

                                <div className="form-control w-full max-w-xs text-center">
                                    <input type="text" placeholder=" your state" className="input input-bordered w-full max-w-xs"
                                        {...register("state")} />
                                </div>

                                <div className="form-control w-full max-w-xs text-center">
                                    <input type="text" placeholder=" your country" className="input input-bordered w-full max-w-xs"
                                        {...register("country")} />
                                </div>

                                <div className="form-control w-full max-w-xs text-center">
                                    <input type="text" placeholder=" your company name" className="input input-bordered w-full max-w-xs"
                                        {...register("company")} />
                                </div>

                                <div className="form-control w-full max-w-xs text-center">
                                    <input type="text" placeholder=" your occupation" className="input input-bordered w-full max-w-xs"
                                        {...register("occupation")} />
                                </div>

                                <div className="form-control w-full max-w-xs text-center">
                                    <input type="number" placeholder="Enter your phone number" className="input input-bordered w-full max-w-xs"
                                        {...register("phn", {
                                            required: {
                                                value: true,
                                                message: 'Provide your phn no.'
                                            }
                                        })} />

                                    <label className="label">
                                        {errors.phn?.type === 'required' && <span className="label-text-alt text-red-600">{errors.phn.message}</span>}
                                    </label>

                                </div>

                                <input className='btn  text-white uppercase font-bold  w-full max-w-xs' value='Add' type="submit" />

                            </form>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Profile;