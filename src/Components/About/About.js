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
            <p>Our eCommerce business has a rich history of growth and 
            innovation since its inception. Founded with a vision to 
            revolutionize online shopping, we have been serving customers 
            worldwide with a wide range of products and exceptional service. 
            Over the years, we have continuously adapted to market trends, expanding 
            our offerings and enhancing the customer experience to become a trusted destination for online shoppers.</p>
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
                    <h2>fast delivery</h2>
                    <p>"Experience lightning-fast delivery for a seamless shopping journey at our store."</p>
                    </div>
                    <div className='store-shop-products'>
                    <img src={tfby72} className='store-shop-products-img' alt="tfby2"/>
                    <h2>more discount</h2>
                    <p>"Unlock bigger savings with every purchase through our exclusive 'more buy, more discount' offer."</p>
                    </div>
                    <div className='store-shop-products'>
                    <img src={tfby73} className='store-shop-products-img' alt="tfby3"/>
                    <h2>earn coins</h2>
                    <p>"Accumulate coins with every purchase and unlock exciting rewards!"</p>
                    </div>
                    <div className='store-shop-products'>
                    <img src={tfby74} className='store-shop-products-img' alt="tfby4"/>
                    <h2>24/7 Support</h2>
                    <p>"Enjoy round-the-clock support for any assistance, anytime, anywhere."</p>
                    </div>

                </div>
            </div>
        {/* know more about us */}
        <div className='know-more-about-us'>
            <h1>Know More About Us</h1>
            <p>
            We're a family-owned shopping business that has been providing high-quality [products/services] 
            to customers in salur/online  since 2020 . Our company was founded on the belief that
             everyone deserves access to all products, and we've been working hard to make that a reality 
             ever since.
            </p>
            <p>
            At store-shop, our mission is to make product accessible to all. We believe that 
            product should be [benefit or value proposition], and we work hard every day to make 
            sure that our customers have access to the best product at an affordable price.
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