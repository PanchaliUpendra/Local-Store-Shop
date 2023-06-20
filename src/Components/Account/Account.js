import React,{useContext} from 'react';
import './Account.css';
import MyContext from '../../Mycontext';
import { Link } from 'react-router-dom';

function Account(){
    const sharedValues=useContext(MyContext);
    return(
        <>
        <div className='account-container'>
        <div>
        <h1>your Profile</h1>
        </div>
        <div className='account-personal-details'>
            <div className='account-personal-details-each'>
                <p>name:</p>
                <p>{sharedValues.firstname} {sharedValues.lastname}</p>
            </div>

            <div className='account-personal-details-each'>
                <p>phone Number:</p>
                <p>{sharedValues.phoneno}</p>
            </div>

            <div className='account-personal-details-each'>
                <p>gmail:</p>
                <p>{sharedValues.email}</p>
            </div>

            <div className='account-personal-details-each'>
                <p>address:</p>
                <p>{sharedValues.address}</p>
            </div>
        </div>
        <div>
            <p>if you want to edit account?<Link to='/editprofile'>EDIT_PROFILE</Link></p>
        </div>
        </div>
        
        </>
        
    );
}

export default Account;