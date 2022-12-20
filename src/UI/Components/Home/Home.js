import React from 'react';
import About from './About/About';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
import Features from './Features/Features';
import FormBanner from './FormBanner/FormBanner';
import Portfolio from './Portfolio/Portfolio';
import Service from './Service/Service';
import Slider from './Slider/Slider';
import '../../UIApps.css'

const Home = () => {
    return (
        <div>
            <Slider />
            <About />
            <Service />
            <Features />
            <Portfolio />
            <Banner />
            <Blog />
            <FormBanner />
            <Login />
            <Register />
        </div>
    );
};

export default Home;
