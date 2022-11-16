import React from 'react';
import img1 from '../../../assets/images/chair.png';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="hero banner-bg md:h-[65vh] lg:min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse p-5 justify-between">
                    <img src={img1} className="lg:w-1/2 rounded-lg" alt='banner' />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white border-none">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;