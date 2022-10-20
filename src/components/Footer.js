import React from "react";
import Form from "./Form";
import './Footer.scss';
import {FaInstagram, FaTwitter, FaFacebook} from "react-icons/fa";

function Footer(){
    return (
        <section className='footer'>
            <div className='footer-left'>
                <div className='footer-left-links'>
                    <a href='https://www.instagram.com/'><FaInstagram/></a>
                    <a href='https://www.twitter.com/'><FaTwitter/></a>
                    <a href='https://www.facebook.com/'><FaFacebook/></a>
                </div>
                <p>© CryptoLook, 2022. All rights reserved.</p>
            </div>
            <Form/>
        </section>
    )
}


export default Footer;
