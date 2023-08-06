import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
/* feature products photos */
import feature1 from '../../Images/feature1.jpg';
import feature2 from '../../Images/feature2.jpg';
import feature3 from '../../Images/feature3.jpg';
import feature4 from '../../Images/feature4.jpg';

/*let product photos */
import letp1 from '../../Images/letp1.jpg';
import letp2 from '../../Images/letp2.jpg';
import letp3 from '../../Images/letp3.jpg';
import letp4 from '../../Images/letp4.jpg';
import letp5 from '../../Images/letp5.jpg';

/* feature products photos */
import tfby71 from '../../Images/tfby71.PNG';
import tfby72 from '../../Images/tfby72.PNG';
import tfby73 from '../../Images/tfby73.PNG';
import tfby74 from '../../Images/tfby74.PNG';

/* uniques peoducts */
import unq1 from '../.././Images/unique1.PNG';

/* top catogeries */
import top2 from '../../Images/top2.PNG';
import top3 from '../../Images/top3.PNG';
import top4 from '../../Images/top4.PNG';
import top5 from '../../Images/top5.PNG';

/*imnporting the links */

import Footer from '../../Footer/Footer';



function Homepage(){
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: "smooth" });
    },[]);
    const navigate=useNavigate()
    function handlenavigate(){
        navigate('/products')
    }
    return(
        <>
        <div className='homepage-container'>
            <div className='homepage-container-frontview'>
                <div className='home-frontview-div1'>
                <h3>Best shopping For Your Castle....</h3>
                <h2>New Shopping Collection Trends in 2023</h2>
                <p> expect cutting-edge shopping collections that embrace
                 sustainability, personalization, and tech-infused experiences.</p>
                <button onClick={handlenavigate}>Shop Now</button>
                </div>
                <div className='home-frontview-second-div'>
                </div>
            </div>
            {/* Second part of the home page*/}
            <div className='homepage-container-second-part'>
            <h1>Featured Products</h1>
            <div className='homapage-container-feature-products'>
                 {/* feature part1*/}
                <div className='homepage-feature-parts'>
                    <img src={feature1} alt="feature-product-1" className='homepage-feature-part-img'/>
                    <div className='feature-products-bottom-content'>
                    <h1>shirt + pant + shoes</h1>
                    <p>Code - Y523201</p>
                    <p>$40.00</p>

                    </div>
                </div>
                {/* feature part2*/}
                <div className='homepage-feature-parts'>
                <img src={feature2} alt="feature-product-2" className='homepage-feature-part-img'/>
                <div className='feature-products-bottom-content'>
                <h1>girls Top</h1>
                <p>Code - Y523202</p>
                <p>$50.00</p>

                </div>
                </div>
                {/* feature part3*/}
                <div className='homepage-feature-parts'>
                <img src={feature3} alt="feature-product-3" className='homepage-feature-part-img'/>
                <div className='feature-products-bottom-content'>
                <h1>sweat shirt</h1>
                <p>Code - Y523203</p>
                <p>$67.00</p>

                </div>
                </div>
                {/* feature part4*/}
                <div className='homepage-feature-parts'>
                <img src={feature4} alt="feature-product-4" className='homepage-feature-part-img'/>
                <div className='feature-products-bottom-content'>
                <h1>hoodies + pant</h1>
                <p>Code - Y523204</p>
                <p>$96.00</p>
                </div>
                </div>

            </div>
            </div>
            {/* Latest Products */}
            <div className='homepage-latest-products'>
                {/* Latest Products Heading*/}
                <div className='Latest-Products-Heading'>
                    <h1>Leatest Products</h1>
                </div>
                {/* Latest Products routes heading */}
                <ul className='Latest-Products-routes-heading'>
                    <li>New Arrival</li>
                    <li>Best Seller</li>
                    <li>Featured</li>
                    <li>Special Offer</li>
                </ul>
                {/* Latest Products all products*/}
                <div className='homapage-container-feature-products'>
                <div className='homepage-feature-parts'>
                    <img src={letp1} alt="feature-product-1" className='homepage-feature-part-img'/>
                    <div className='feature-products-bottom-content'>
                    <h1>girls wear</h1>
                    <p>Code - Y523205</p>
                    <p>start's from $30.00</p>

                    </div>
                </div>
                <div className='homepage-feature-parts'>
                    <img src={letp2} alt="feature-product-1" className='homepage-feature-part-img'/>
                    <div className='feature-products-bottom-content'>
                    <h1>t-shirt combo</h1>
                    <p>Code - Y5231324</p>
                    <p>$49.00</p>

                    </div>
                </div>
                <div className='homepage-feature-parts'>
                    <img src={letp3} alt="feature-product-1" className='homepage-feature-part-img'/>
                    <div className='feature-products-bottom-content'>
                    <h1>hoodies + combo</h1>
                    <p>Code - Yadferf32</p>
                    <p>$59.00</p>

                    </div>
                </div>
                <div className='homepage-feature-parts'>
                    <img src={letp4} alt="feature-product-1" className='homepage-feature-part-img'/>
                    <div className='feature-products-bottom-content'>
                    <h1>shoes</h1>
                    <p>Code - Y51123</p>
                    <p>$52.00</p>

                    </div>
                </div>
                <div className='homepage-feature-parts'>
                    <img src={letp5} alt="feature-product-1" className='homepage-feature-part-img'/>
                    <div className='feature-products-bottom-content'>
                    <h1>t-shirts</h1>
                    <p>Code - Y565432</p>
                    <p>$22.00</p>

                    </div>
                </div>
                <div className='homepage-feature-parts'>
                    <img src={feature1} alt="feature-product-1" className='homepage-feature-part-img'/>
                    <div className='feature-products-bottom-content'>
                    <h1>shirt + pant + shoes</h1>
                    <p>Code - Ymkadjgb2</p>
                    <p>$92.00</p>

                    </div>
                </div>

                </div>
            </div>
            {/* what store shop offers*/}
            <div className='what-store-shop-offers'>
                <div className='what-store-shop-offers-header'>
                    <h1>What Shopex Offer!</h1>
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
            {/*ends here */}
            {/*unique features */}
            <div className='unique-features-container'>
                <div>
                    <img src={unq1} alt="unique-pictures" className='unique-container-img'/>
                </div>
                <div className='unique-feature-div-part2'>
                    <h1>Unique Features Of leatest & Trending Poducts</h1>
                    <ul>
                        <li>Discover the latest and trending products boasting innovative features and unmatched quality.</li>
                        <li>Explore our curated selection of unique products, setting new trends in style and functionality.</li>
                        <li>Experience the ultimate in cutting-edge designs and groundbreaking technology with our newest arrivals.</li>
                    </ul>
                    <div className='unique-container-shop-now'>
                        <button onClick={handlenavigate}>Shop Now</button>
                    </div>
                </div>
            </div>
            {/* top categories container */}
            <div className='top-categories-container'>
                <div className='top-containers-header'>
                <h1>Top Categories</h1>
                </div>
                <div className='top-categories-containers-img-cards' >
                {/* cards starts here */}
                    <div>
                    <div className='top-categories-cards'>
                    <img src={top2} alt="top2-cards" className='top-categories-img'/>
                    </div>
                    <p>Arm chair</p>
                    <p>$99.00</p>
                    </div>
                {/* cards ends here */}
                {/* cards starts here */}
                <div>
                    <div className='top-categories-cards'>
                    <img src={top3} alt="top2-cards" className='top-categories-img'/>
                    </div>
                    <p>Recliner Chair</p>
                    <p>$66.00</p>
                    </div>
                {/* cards ends here */}
                {/* cards starts here */}
                <div>
                    <div className='top-categories-cards'>
                    <img src={top4} alt="top2-cards" className='top-categories-img'/>
                    </div>
                    <p>Accent Chair</p>
                    <p>$46.00</p>
                    </div>
                {/* cards ends here */}
                {/* cards starts here */}
                <div>
                    <div className='top-categories-cards'>
                    <img src={top5} alt="top2-cards" className='top-categories-img'/>
                    </div>
                    <p>Dining Chair</p>
                    <p>$56.00</p>
                    </div>
                {/* cards ends here */}
                </div>
            </div>

            {/*last shop now contianer */}
            <div className='last-shop-now-container'>
                <h1>Get Leatest Update By Subscribe Our Newslater</h1>
                <button onClick={handlenavigate}>Shop Now</button>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Homepage;