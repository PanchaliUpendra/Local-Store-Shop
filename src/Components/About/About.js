import React, { useEffect } from 'react';
import './About.css';

/* features we offer */
import tfby71 from '../../Images/tfby71.PNG';
import tfby72 from '../../Images/tfby72.PNG';
import tfby73 from '../../Images/tfby73.PNG';
import tfby74 from '../../Images/tfby74.PNG';

/* about page image1  */

import About1 from '../../Images/about1.PNG';
import Footer from '../../Footer/Footer';

import { Link } from 'react-router-dom';

function About(){

    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: "smooth" });
    },[]);
    
    return(
        <>
        {/* about us  */}
        <div className='contactus-first-div'>
        <h1>About</h1>
        </div>
        <div className='about-container-first-div'>
        <img src={About1} alt='discussion history' className='about1-cont-img'/>
        <div  className='about-container-first-div-content'>
            <h2>Know About Our Ecomerce Business, History</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
             neque ultrices mattis aliquam, malesuada diam est. Malesuada sem 
             tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae 
             lobortis quis bibendum quam.</p>
             <Link to='/Contactus'><button className='about-container-fir-div-cont-btn'>Contact Us</button></Link>
        </div>
        </div>
        {/* what store shop offers*/}
        <div className='what-store-shop-offers'>
                <div className='what-store-shop-offers-header'>
                    <h1>Our Features</h1>
                </div>
                <div className='what-store-shop-offer-products'>
                    <div className='store-shop-products'>
                    <img src={tfby71} className='store-shop-products-img' alt='tfby1'/>
                    <h2>24/7 Support</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    <div className='store-shop-products'>
                    <img src={tfby72} className='store-shop-products-img' alt="tfby2"/>
                    <h2>24/7 Support</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    <div className='store-shop-products'>
                    <img src={tfby73} className='store-shop-products-img' alt="tfby3"/>
                    <h2>24/7 Support</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    <div className='store-shop-products'>
                    <img src={tfby74} className='store-shop-products-img' alt="tfby4"/>
                    <h2>24/7 Support</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>

                </div>
            </div>
        {/* know more about us */}
        <div className='know-more-about-us'>
            <h1>Know More About Us</h1>
            <p>
            We're a family-owned [type of business] that has been providing high-quality [products/services] 
            to customers in [location/online] since [year founded]. Our company was founded on the belief that
             everyone deserves access to [product/service], and we've been working hard to make that a reality 
             ever since.
            </p>
            <p>
            At [Company Name], our mission is to make [product/service] accessible to all. We believe that 
            [product/service] should be [benefit or value proposition], and we work hard every day to make 
            sure that our customers have access to the best [product/service] at an affordable price.
            </p>
            <p>
            Our commitment to quality is evident in everything we do. From sourcing the best materials to 
            carefully crafting each [product], we take pride in delivering products that are built to last. 
            We also believe in providing exceptional customer service, which is why we offer a [guarantee or
             unique customer experience].
            </p>
            <p>
            Our team is made up of [number] dedicated individuals who share our vision for making [product/service]
             accessible to all. Whether it's answering customer questions or carefully packaging each order, we're 
             committed to providing the best possible experience for our customers.
            </p>
        </div>
        <Footer/>
        </>
    );
}
export default About;