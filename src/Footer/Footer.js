import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

function Footer(){
    return(
        <>
        <div className='footer-container'>
            <div>
                <h1>Store Shop</h1>
                <p>Contact Info</p>
                <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
            <div>
                <h1>Catagories</h1>
                <p>Laptops & Computers</p>
                <p>Cameras & Photography</p>
                <p>Smart Phones & Tablets</p>
                <p>Video Games & Consoles</p>
                <p>Waterproof Headphones</p>
            </div>
            <div>
                <h1>Customer Care</h1>
                <p>My Account</p>
                <p>Discount</p>
                <p>Returns</p>
                <p>Orders History</p>
                <p>Order Tracking</p>
            </div>
            <div>
                <h1>Pages</h1>
                <p>Blog</p>
                <p>Browse the Shop</p>
                <p>Category</p>
                <p>Pre-Built Pages</p>
                <p>Visual Composer Elements</p>
                <p>WooCommerce Pages</p>
            </div>
        </div>
        <div className='footer-second-container'>
            <p>©2023 - storeshop - All Rights Reserved -<NavLink to='/privacy'>Privacy-Policy</NavLink> </p>
        </div>
        </>
    );
}
export default Footer;