import React, { useState, useContext} from 'react';
import './Navbar.css';

import { Link} from 'react-router-dom';
import { app } from '../Firebase';
import { getAuth ,onAuthStateChanged} from "firebase/auth";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MyContext from '../Mycontext';



function Navbar(){

    const auth = getAuth(app);
    const sharedValues=useContext(MyContext);
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
        <div className='navbar-container'>
            <p className='navbar-container-header'><Link to='/' className='navbar-con-link'>Store Shop</Link></p>
            <ul className='navbar-container-ul'>
                {/* <li><Link to='/' className='navbar-con-link'>Home</Link></li> */}
                <li><Link to='/About' className='navbar-con-link'>About</Link></li>
                <li><Link to='/Products' className='navbar-con-link'>Products</Link></li>
                <li><Link to='/Contactus' className='navbar-con-link'>ContactUs</Link></li>
                {displaylogin?<li><Link to='/addcart' className='navbar-con-link'>AddCart</Link></li>:<></>}
                {sharedValues.isAdmin?<li className={sharedValues.isAdmin?'wishlist-addparoducts':'wishlist-addparoducts-inactive'}><Link to='/Addproducts' className='navbar-con-link'>Addproducts</Link></li>:<></>}

            </ul>
            
            
            {displaylogin?(<div className='navbar-profile-access'>
            <Link to='/Dashboard'><AccountCircleIcon sx={{ color: "#FB2E86" }}  fontSize="large"/></Link>
            </div>
            ):
            <div className='navbar-container-login'>
            <p><Link to='/Login' className='navbar-con-link-login'>Login</Link></p>
            </div>
            }
            
            

            
            
            
         
        </div>
        </>
    );
}

export default Navbar;