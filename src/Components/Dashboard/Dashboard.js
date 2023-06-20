import React, { useState } from 'react';
import './Dashboard.css';
import { getAuth, signOut} from "firebase/auth";
import {app} from '../../Firebase';
import { useNavigate,Link } from 'react-router-dom';
import MyContext from '../../Mycontext';
import { useContext } from 'react';
import Account from '../Account/Account';
import Messages from '../messages/Messages';
import Orders from '../Orders/Orderes';
import { onAuthStateChanged} from "firebase/auth";
import { Alert } from '@mui/material';


function Dashboard(){

    /* functiona variable changing  */
    const[functionele,setfunele]=useState("account");

    const auth = getAuth(app);
    const navigate=useNavigate();
    const sharedValues=useContext(MyContext);
    function signoutfun(){
        signOut(auth).then(() => {
            Alert("you successfully logged out,please refresh your page");
            navigate('/')
            window.location.reload();
            
            
          }).catch((error) => {
            console.log("error vachiundhi rfa swamy",error);
          });
    }

    const [displaylogin,setdisplaylogin] = useState(false);
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setdisplaylogin(true);
        } else {
          console.log("you are logged out");
          setdisplaylogin(false);
        }

    });
    
   
    return(
        <>
        

        
        <div className='contactus-first-div'>
        <h1>Dashboard</h1>
        </div>
       
        {/* first navbar part of the dashboard*/}
        <div className='whole-navbar-container'>
            <div className='dashboard-navbar'>
            <ul>
                <li><Link to='/dashboard/account' onClick={()=>setfunele("account")}>Account</Link></li>
                {sharedValues.isAdmin?<li><Link to='/Dashboard/orders' onClick={()=>setfunele("orders")}>Deliveries</Link></li>:<li><Link to='/dashboard/orders' onClick={()=>setfunele("orders")}>MyOrders</Link></li>}
                {sharedValues.isAdmin?<li><Link to='/Deleteproducts'>Deleteproducts</Link></li>:<></>}
                {sharedValues.isAdmin?<li><Link to='/dashboard/messages' onClick={()=>setfunele("messages")}>Messages</Link></li>:<></>}
                <div className='dashboard-prime-navbar'>
                <ul>
                <li><Link to='/About' >About</Link></li>
                <li><Link to='/Products' >Products</Link></li>
                <li><Link to='/Contactus' >ContactUs</Link></li>
                {displaylogin?<li><Link to='/addcart' >AddCart</Link></li>:<></>}
                {sharedValues.isAdmin?<li className={sharedValues.isAdmin?'wishlist-addparoducts':'wishlist-addparoducts-inactive'}><Link to='/Addproducts' >Addproducts</Link></li>:<></>}

                </ul>
                </div>
                <li onClick={signoutfun}>SignOut</li>
                
            </ul>
            </div>
            {/* second parft of the dashboard */}
            <div>
            {functionele==="account"?<Account/>:<></>}
            {functionele==="messages"?<Messages/>:<></>}
            {functionele==="orders"?<Orders/>:<></>}
            </div>
        </div>
        
        </>
    );
}
export default Dashboard;