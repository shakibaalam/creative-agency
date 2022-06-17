import React from 'react';
import frame from '../../images/logos/Frame.png';

const Banner = () => {
    return (
        <div className="hero bg-primary lg:h-[60vh] mt-8 lg:mt-0">
            <div className="hero-content flex-col lg:flex-row">
                <div className=' lg:w-1/2'>
                    <h1 class="text-5xl font-bold">Let’s Grow Your
                        Brand To The
                        Next Level</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-secondary">Get Started</button>
                </div>
                <img src={frame} className="lg:max-w-sm md:w-1/2 rounded-lg shadow-2xl" alt='' />
            </div>
        </div>
    );
};

export default Banner;