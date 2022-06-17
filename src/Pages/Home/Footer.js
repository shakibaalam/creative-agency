import React from 'react';
import { useForm } from 'react-hook-form';

const Footer = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-primary lg:px-32  pt-20 pb-5'>
            <div class=" grid lg:grid-cols-2 grid-cols-1">
                <div class="">
                    <h1 class="text-4xl text-secondary font-bold">Let us handle your project, professionally.</h1>
                    <p class="py-6">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div class=" text-center">
                    <form >
                        <input type="email" placeholder="Your email address" className="input input-bordered w-full max-w-xs my-3"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                }
                            })} />
                        <input type="text" placeholder="Your name/company name" className="input input-bordered w-full max-w-xs my-3"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'name is required'
                                }
                            })} />
                        <textarea type="text" placeholder="your message" className="textarea h-24 w-full max-w-xs my-3"
                            {...register("message", {
                                required: {
                                    value: true,
                                    message: 'message is required'
                                }
                            })} />

                        <div>
                            <input className='btn px-8 btn-secondary' type="submit" />
                        </div>
                    </form>
                </div>
            </div>
            <p className='text-center pt-24'>Copyright @{year} <span className='text-secondary font-bold'> creative agency </span> All rights reserved</p>
        </div>
    );
};

export default Footer;