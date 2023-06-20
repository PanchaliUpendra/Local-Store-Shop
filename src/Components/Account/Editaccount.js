import React,{useContext, useState} from 'react';
import './Editaccount';

import { doc, updateDoc } from "firebase/firestore";
import { db } from '../../Firebase';
import MyContext from '../../Mycontext';


function Editaccount(){
    const sharedValues=useContext(MyContext);
    const[updatedfn,setupdatedfn]=useState(sharedValues.firstname);
    const[updatedln,setupdatedln]=useState(sharedValues.lastname);
    const[updatedph,setupdatedph]=useState(sharedValues.phoneno);
    const[updatedadd,setupdatedadd]=useState(sharedValues.address);
    

    

    async function handleprofile(){
        try{
            const washingtonRef = doc(db, "users", `${sharedValues.useruid}`);
            await updateDoc(washingtonRef, {
            firstname:updatedfn,
            lastname:updatedln,
            phone:updatedph,
            address:updatedadd
            });
            alert("successfully updated, please refresh your page");
            
        }catch(e){
            console.log("you got the error in editprofile",e);
        }
    }
    function profilereload(){
        window.location.reload();
    }
   
    return(
        <>
            <div className='contactus-first-div'>
                <h1>Edit Your Profile</h1>
            </div>
            <div className='login-con-sign-up'>
                <form className='editaccount-container'>
                <label>First Name: </label>
                <input type='text' value={updatedfn} onChange={(e)=>setupdatedfn(e.target.value)}/>
                <label>Last Name</label>
                <input type='text' value={updatedln} onChange={(e)=>setupdatedln(e.target.value)}/>
                <label>phone</label>
                <input type='number' value={updatedph} onChange={(e)=>setupdatedph(e.target.value)}/>
                <label>address:</label>
                <textarea value={updatedadd} onChange={(e)=>setupdatedadd(e.target.value)}/>
                </form>
                <div className='editaccount-two-btns'>
                <button onClick={profilereload}>cancel</button>
                <button onClick={()=>handleprofile()}>Update</button>
                </div>
                
            </div>
        </>
    );
}

export default Editaccount;