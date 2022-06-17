import React from 'react';
import service1 from '../../images/icons/service1.png';
import service2 from '../../images/icons/service2.png';
import service3 from '../../images/icons/service3.png';

const Services = () => {
    return (
        <div>
            <h2 className=' font-sans text-center font-bold text-2xl py-10'>Provide awesome <span className=' text-accent'>services</span></h2>

            <div className=' my-16 lg:mx-32'>
                <div className=' grid lg:grid-cols-3 grid-cols-1'>
                    <div class="card lg:w-96 bg-base-100">
                        <figure class="px-10 pt-10">
                            <div class="avatar">
                                <div class="w-24 rounded-full">
                                    <img src={service1} alt='' />
                                </div>
                            </div>
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Web & Mobile design</h2>
                            <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                        </div>
                    </div>

                    <div class="card lg:w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <div class="avatar">
                                <div class="w-24 rounded-full">
                                    <img src={service2} alt='' />
                                </div>
                            </div>
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Graphic design</h2>
                            <p>Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
                        </div>
                    </div>
                    <div class="card lg:w-96 bg-base-100">
                        <figure class="px-10 pt-10">
                            <div class="avatar">
                                <div class="w-24 rounded-full">
                                    <img src={service3} alt='' />
                                </div>
                            </div>
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Web development</h2>
                            <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;