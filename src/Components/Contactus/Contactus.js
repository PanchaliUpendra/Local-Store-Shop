import React,{useEffect, useState,useContext} from 'react';
import './Contactus.css';
import contactus1 from '../../Images/contactus1.PNG';

import contpnt1 from '../../Images/contpnt1.PNG';
import contpnt2 from '../../Images/contpnt2.PNG';
import contpnt3 from '../../Images/contpnt3.PNG';
import contpnt4 from '../../Images/contpnt4.PNG';

import orbitcontact from '../../Images/contactorbit.PNG';
import { collection, addDoc } from "firebase/firestore";
import Footer from '../../Footer/Footer';

import {db} from '../../Firebase'
import MyContext from '../../Mycontext';

function Contactus(){
    const[username,setusername]=useState("");
    const[usermail,setusermail]=useState("");
    const[usersub,setusersub]=useState("");
    const[userdes,setuserdes]=useState("");
    const sharedValues=useContext(MyContext);
    async function handlemessages(){
        if(sharedValues.currentuser){
            try {
                const docRef = await addDoc(collection(db, "messages"), {
                  username:username,
                  usermail:usermail,
                  usersub:usersub,
                  userdes:userdes
                });
                alert("message sent successfully",docRef.id);
                window.location.reload();

              } catch (e) {
                console.error("Error adding document: ", e);
              }
        }
        else{
            alert("please login");
            window.location.reload();
        }
        
          
    }

    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: "smooth" });
    },[]);
    return(
        <>
        <div className='contactus-first-div'>
        <h1>Contact Us</h1>
        </div>
        
        <div className='contactus-second-div'>
            {/* information about us */}
            <div className='contactus-informaion'>
            <h1>Information About us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis 
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique 
            amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis 
            bibendum quam.</p>
            <img src={contactus1} alt="contactus1" className='contactus-img-first-div'/>
            </div>
            
            {/*contact way in contact us */}
            <div className='contact-way-contact-us'>
                <h1>Contact Way</h1>
                <div>
                <div className='contactus-contactway-div-part'>
                    <img src={contpnt1} alt='contpnt1' className='contact-way-img'/>
                    <div className='contactway-para-parts'>
                    <p>Tel: 877-67-88-99</p>
                    <p>E-Mail: shop@store.com</p>
                    </div>
                
                </div>

                <div className='contactus-contactway-div-part'>
                    <img src={contpnt2} alt="contactpnt2" className='contact-way-img'/>
                    <div className='contactway-para-parts'>
                    <p>Support Forum</p>
                    <p>For over 24hr</p>
                    </div>
                </div>
                
                <div className='contactus-contactway-div-part'>
                    <img src={contpnt3} alt="contpnt3" className='contact-way-img'/>
                    <div className='contactway-para-parts'>
                    <p>20 Margaret st, London</p>
                    <p>Great britain, 3NM98-LK</p>
                    </div>
                </div>

                <div className='contactus-contactway-div-part'>
                    <img src={contpnt4} alt="contpnt4" className='contact-way-img'/>
                    <div className='contactway-para-parts'>
                    <p>Free standard shipping</p>
                    <p>on all orders.</p>
                    </div>
                </div>
                </div>

            </div>

        </div>
        {/* get in touch starts here */}
        <div className='get-in-touch-div'>
        <div className='get-in-touch-form'>
            <h1>Get In Touch</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Mattis neque ultrices  tristique amet erat vitae eget dolor los 
            vitae lobortis quis bibendum quam.</p>
            <form>
            <div className='get-in-touch-form-part1'>
            <input placeholder='Name*' type="text" onChange={(e)=>setusername(e.target.value)}/>
            <input placeholder='Email*' type='email' onChange={(e)=>setusermail(e.target.value)}/>
            </div>
            
            <input placeholder='Subject*' type='text' onChange={(e)=> setusersub(e.target.value)}/>
            <textarea placeholder='description' onChange={(e)=>setuserdes(e.target.value)} />

            </form>
            <button onClick={()=>handlemessages()}>Send Mail</button>
        </div>
        <img src={orbitcontact} alt="orbitcontact" className='contactus-oribit-img'/>
        </div>
        {/* get in touch ends here */}
        <Footer/>

        </>
    );
}

export default Contactus;