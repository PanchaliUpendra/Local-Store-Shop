import React ,{useContext, useState,useEffect}from 'react';
import './Buyproducts.css';
import { useLocation,useNavigate } from 'react-router-dom';
import MyContext from '../../Mycontext';
import { collection, addDoc } from "firebase/firestore";
import {db} from '../../Firebase';

function Buyproducts(){
    const location = useLocation();
    const navigate = useNavigate();
    const productId = new URLSearchParams(location.search).get('productId');
    const[relatedid,setrelatedid]=useState(false);
    
    const sharedValues=useContext(MyContext);

    const handleBuy = (productId) => {
      navigate(`/buyproducts?productId=${productId}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
      };


    /* add CART function handling  */
    async function handlingaddcart(product){
      if(sharedValues.currentuser){
        try {
          const docRef = await addDoc(collection(db, "addcart",`${sharedValues.useruid}`,"items"),product);
          console.log("Document written with ID: ", docRef.id);
          alert("successfully added");
          window.location.reload();
  
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      
      }
      else{
        alert("please login");
        navigate('/login')
      }
        
    }
    useEffect(()=>{
      window.scrollTo({ top: 0, behavior: "smooth" });
  },[]);

  /* buy products  */
  async function handlingorder(product){
    try {
    const docRef = await addDoc(collection(db, "orders"), {
      ufname:sharedValues.firstname,
      ulname:sharedValues.lastname,
      uemail:sharedValues.email,
      uaddress:sharedValues.address,
      uphone:sharedValues.phoneno,
      status:false,
      ...product
    });
    console.log("Document written with ID: ", docRef.id);
    alert("our order placed successfully");
    window.location.reload();
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  }
    return(
        <div className='buyproducts-container'>
        {sharedValues.updatedata.filter((doc)=>doc.docId===productId).map((product) => (
          <div   key={product.docId} className='buyproducts-each-card' onLoad={()=>setrelatedid(product.ProductCate)}>
            
            
            <img src={product.productImage} alt="products-store" className='buyproducts-each-card-img'/>
            <div className='buyproducts-about-each-card'>
            <p>{product.productName}</p>
            <p>{product.productRate} Star</p>
            <p>₹{product.productCost}</p>
            <p>{product.productDes}</p>

            <div className='buyproducts-buttons-div'>
            <button onClick={()=>handlingorder(product)}>Buy Now</button>
            <button onClick={()=>handlingaddcart(product)}>Add Cart</button>
            </div>
            

            </div>
          </div>
          
        ))}
        <div className='buyproducts-related-head'>
          <h1>related items</h1>
        </div>
        <div className='buyproducts-related-items-card'>
        {sharedValues.updatedata.filter((data)=>data.ProductCate===relatedid).map((product) => (
          <div className='products-each-card'  key={product.docId} onClick={()=>handleBuy(product.docId)}>
            
            
            <img src={product.productImage} alt="products-store" className='products-each-img'/>
            <div className='product-cost-name'>
            <p>₹{product.productCost}</p>
            <p>{product.productName}</p>
            <p></p>
            </div>
            
          </div>
        ))}
        </div>
        
        </div>
    );
}
export default Buyproducts;