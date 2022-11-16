import React from 'react';
import { Link } from 'react-router-dom';
import footerimg from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer
            style={{
                background: `url(${footerimg})`,
                backgroundSize: 'cover'
            }}
            className="p-10">
            <div className='footer grid justify-between'>
                <div className='w-44'>
                    <span className="footer-title">Services</span>
                    <Link to="/" className="link link-hover">Emergency Checkup</Link>
                    <Link to="/" className="link link-hover">Monthly Checkup</Link>
                    <Link to="/" className="link link-hover">Weekly Checkup</Link>
                    <Link to="/" className="link link-hover">Deep Checkup</Link>
                </div>
                <div className='w-44'>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link to="/" className="link link-hover">Fluoride Treatment</Link>
                    <Link to="/" className="link link-hover">Cavity Filling</Link>
                    <Link to="/" className="link link-hover">Teath Whitening</Link>

                </div>
                <div className='w-44'>
                    <span className="footer-title">OUR ADDRESS</span>
                    <p>New York - 101010 Hudson</p>

                </div>
            </div>
            <div className='text-center mt-32'>
                <p>Copyright © 2022 All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;