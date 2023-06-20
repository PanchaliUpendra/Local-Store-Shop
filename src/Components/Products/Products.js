import React,{  useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';

import { doc,getDocs,collection ,getDoc} from "firebase/firestore";
import {db} from '../../Firebase';

function Products(){
    
    const [productData, setProductData] = useState([]);
   
    const navigate = useNavigate();
    const handleBuy = (productId) => {
    navigate(`/buyproducts?productId=${productId}`);
    };


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
      
 
    return(
        <div>
        <div className='contactus-first-div'>
        <h1>products</h1>
        </div>
        <div className='whole-products-store'>
        {productData.map((product) => (
          <div className='products-each-card' onClick={()=>handleBuy(product.docId)} key={product.docId}>
            
            
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

export default Products;