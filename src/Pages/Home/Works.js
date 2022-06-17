import React from 'react';
import carousel1 from '../../images/carousel-1.png';
import carousel2 from '../../images/carousel-2.png';
import carousel3 from '../../images/carousel-3.png';
import carousel4 from '../../images/carousel-4.png';
import carousel5 from '../../images/carousel-5.png';

const Works = () => {
    return (
        <div className=' bg-neutral py-10 my-20'>
            <h2 className=' text-white font-sans text-center font-bold text-2xl py-10'>Here are some of <span className=' text-accent'> our works</span></h2>
            <div class="carousel carousel-center flex items-center max-w-full p-4 space-x-4 ">
                <div id='item1' class="carousel-item max-w-xl">
                    <img width={650} height={300} src={carousel1} class="max-w-xl rounded-box" alt='' />
                </div>
                <div id='item2' class="carousel-item max-w-xl">
                    <img width={650} height={300} src={carousel2} class="max-w-xl rounded-box" alt='' />
                </div>
                <div id='item3' class="carousel-item max-w-xl">
                    <img width={360} src={carousel3} class="max-w-xl rounded-box" alt='' />
                </div>
                <div id='item4' class="carousel-item max-w-xl">
                    <img width={650} src={carousel4} class="max-w-xl rounded-box" alt='' />
                </div>
                <div id='item5' class="carousel-item max-w-xl">
                    <img width={650} src={carousel5} class="max-w-xl rounded-box" alt='' />
                </div>
            </div>
            <div class="flex justify-center w-full py-5 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
                <a href="#item5" class="btn btn-xs">5</a>
            </div>
        </div>
    );
};

export default Works;