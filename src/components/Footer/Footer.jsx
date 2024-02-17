import React from 'react';
import "./Footer.scss";
import { FaLocationArrow,FaMobileAlt,FaEnvelope } from "react-icons/fa";
import "./Footer.scss";
import Payment from "../../assets/payments.png"
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                We are a company that sells high-end audio earphones and 
                headphones under its own brand final as well as conducting 
                component technology development, product planning, design, 
                planning, manufacturing and sales of other companies brands.
                </div>
            </div>
            <div className="col"><div className="title">Contact</div>
            <div className="c-item">
                <FaLocationArrow/>
                <div className="text">
                111 SW 5th Avenue Suite 3150,Portland
                </div>
            </div>
            <div className="c-item">
                <FaMobileAlt/>
                <div className="text">
                Phone : +1(503) 555-4099
                </div>
            </div>
            <div className="c-item">
                <FaEnvelope/>
                <div className="text">
                Email : suchitadevstore@istore.com
                </div>
            </div>
            </div>
            <div className="col"><div className="title">Categories</div>
            <span className="text">Gaming Headphones with Mic</span>
            <span className="text">RGB Light Headphones</span>
            <span className="text">Portable Speakers</span>
            <span className="text">Waterproof Bluetooth Speakers</span>
            <span className="text">Dolby Soundbars</span>
            <span className="text">Wireless Charger</span>
            <span className="text">Smart Watches</span>
            </div>
            <div className="col"><div className="title">Pages</div>
            <span className="text">Home</span>
            <span className="text">About</span>
            <span className="text">Privacy Policy</span>
            <span className="text">Returns</span>
            <span className="text">Terms and Conditions</span>
            <span className="text">Contact Us</span>
            </div>
            <div className="col"><div className="title">Help</div>
            <span className="text">Track Your Order</span>
            <span className="text">Warranty and Support</span>
            <span className="text">Return Policy</span>
            <span className="text">Service</span>
            <span className="text">Bulk Orders</span>
            <span className="text">Why Buy Direct</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    SUCHITADEVSTORE 2023 CREATED BY SUCHITA.PREMIUM E-COMMERCE
                    SOLUTIONS.
                </div>
                <img src={Payment} alt=""/>
            </div>
        </div>
    </footer>;
};

export default Footer;
