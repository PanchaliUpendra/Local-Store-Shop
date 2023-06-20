import React,{useState,useEffect}from 'react';
import './Deleteproducts.css';

import { doc,getDocs,collection ,getDoc} from "firebase/firestore";
import {  deleteDoc } from "firebase/firestore";
import {db} from '../../Firebase';

function Deleteproducts(){

    const [productData, setProductData] = useState([]);

    async function getEachDoc(docId) {
        try {
          const docRef = doc(db, 'addproducts', `${docId}`);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const documentData = docSnap.data();
            
            return { docId, ...documentData };
          } else {
            console.log('Document not found');
            return null;
          }
        } catch (e) {
          console.log('getEachDoc error:', e);
          return null;
        }
      }
     
      useEffect(() => {
        async function getProductsData() {
          try {
            const querySnapshot = await getDocs(collection(db, 'addproducts'));
            const promises = querySnapshot.docs.map((doc) => {
            const docId = doc.id;
            return getEachDoc(docId);
        });
        const data = await Promise.all(promises);
        setProductData(data.filter((item) => item !== null));
          } catch (e) {
            console.error('Error:', e);
          }
        }
        getProductsData();
      }, []);

      async function handledelete(docId){
        await deleteDoc(doc(db, "addproducts", `${docId}`));
        console.log("successfully deleted");
        alert("successfully deleted ");
        window.location.reload();
      }
    return(
        <>
        <div className='contactus-first-div'>
        <h1>Delete your products carefully</h1>
        </div>
        <div className='delete-all-products'>
            {productData.map((product)=>(
                <div key={product.docId} className='delete-each-product-card'>
                <img src={product.productImage} alt="products-store" className='delete-products-each-img'/>
                <div>
                <p>{product.productName}</p>
                <p>₹{product.productCost}</p>
                <p>{product.productRate}★ </p>
                <p>{product.productDes}</p>
                <p onClick={()=>handledelete(product.docId)} className='delete-items-btn'>Delete</p>
                </div>
                </div>
            ))}
        
        </div>

        </>
    );
}
export default Deleteproducts;