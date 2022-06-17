import React from 'react';
import google from '../../images/logos/google.png';
import slack from '../../images/logos/slack.png';
import netflix from '../../images/logos/netflix.png';
import uber from '../../images/logos/uber.png';
import airbnb from '../../images/logos/airbnb.png';

const Icon = () => {
    return (
        <div className=' lg:mx-32 my-20'>
            <div className=' grid lg:grid-cols-5 grid-cols-2'>
                <div className=' mx-auto'>
                    <img width={129} src={google} alt="" />
                </div>
                <div className=' mx-auto'>
                    <img width={140} src={slack} alt="" />
                </div>
                <div className=' mx-auto'>
                    <img width={120} src={netflix} alt="" />
                </div>
                <div className=' mx-auto'>
                    <img width={161} src={airbnb} alt="" />
                </div>
                <div className=' mx-auto'>
                    <img width={99} src={uber} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Icon;