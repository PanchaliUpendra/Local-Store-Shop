import React, { useState }  from 'react';
import './Addproducts.css';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from "firebase/firestore";
import {db} from '../../Firebase';
import {storage} from '../../Firebase';
import { Link } from 'react-router-dom';




function Addproducts(){

    const [proName,setProName]=useState(null);
    const [proCost,setProCost]=useState(null);
    const [proImage,setProImg]=useState(null);
    const [proRate,setProRate]=useState(null);
    const [proCategory,setProCate]=useState(null);
    const [proDescript,setProDescript]=useState(null);
    

    async function handleImageUpload(e){
        const file = e.target.files[0];
        setProImg(file);
      };

      /* uploading an image using the function */

      /* alert message using the firestore */
      function alertmessage(){
        alert("successfully added your data");
        window.location.reload();
      }

    async function addproductsubmit(){
        
        if(proName!==null && proCost!==null && proImage!==null && proRate!==null && proCategory!==null && proDescript!==null){
            try {
              const storageRef = ref(storage, proImage.name);
              await uploadBytes(storageRef, proImage);
              const downloadURL = await getDownloadURL(storageRef);
              console.log("please wait its takes tim to add product")
                const docRef = await addDoc(collection(db, "addproducts"), {
                  productName: proName,
                  productCost: proCost,
                  productImage:downloadURL,
                  productRate:proRate,
                  ProductCate:proCategory,
                  productDes:proDescript,
                  addcart:false
                });
                
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
        }
        alertmessage();
        
    }
    
    return(
        <>
        <div className='contactus-first-div'>
        <h1>please add your products</h1>
        </div>
        <div className='add-products-form-upload'>
        <div className='get-in-touch-form'>
            <h1>Add Products</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Mattis neque ultrices  tristique amet erat vitae eget dolor los 
            vitae lobortis quis bibendum quam.</p>
            <form>
            <input placeholder='Product Name' type='text' onChange={(e)=>setProName(e.target.value)}/>
            <div className='get-in-touch-form-part1'>
            <input placeholder='Product cost*' type='number' onChange={(e)=>setProCost(e.target.value)}/>
            <input placeholder='Stars*' type='number' onChange={(e)=>setProRate(e.target.value)}/>
            </div>
            <label className='addproducts-classname'>Product Image</label>
            <div className='product-plus-categories'>
            <input placeholder='Product IMage' type='file' onChange={handleImageUpload}/>
            <input placeholder='categories' type='text' onChange={(e)=>setProCate(e.target.value)}/>
            </div>
            
            <textarea placeholder='description' onChange={(e)=>setProDescript(e.target.value)} />

            </form>
            <button onClick={()=>addproductsubmit()}>Add Product</button>
        </div>
        </div>
        <div className='addproducts-deleted-link'>
        <p>If you want to delete the added products? <span><Link to='/Deleteproducts'>Click Here</Link></span></p>
        </div>
        </>
        
    );
}

export default Addproducts;