import React from 'react';
import Banner from './Banner';
import Feedback from './Feedback';
import Footer from './Footer';
import Icon from './Icon';
import Services from './Services';
import Works from './Works';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Icon></Icon>
            <Services></Services>
            <Works></Works>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;