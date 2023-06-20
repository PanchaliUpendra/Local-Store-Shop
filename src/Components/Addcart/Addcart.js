import React,{useContext, useEffect,useState,useCallback}from 'react';
import MyContext from '../../Mycontext';

import './Addcart.css';
import { doc,getDocs,collection ,getDoc} from "firebase/firestore";
import {db} from '../../Firebase';
import { deleteDoc } from "firebase/firestore";
import {  addDoc } from "firebase/firestore";

function Addcart(){
    const sharedValues=useContext(MyContext);

    const [addcartdata, setaddcart] = useState([]);

    const getEachDoc = useCallback(async (proId) => {
      try {
        const docRef = doc(
          db,
          'addcart',
          `${sharedValues.useruid}`,
          'items',
          `${proId}`
        );
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const documentData = docSnap.data();
          console.log(proId)
          return { proId, ...documentData };
        } else {
          console.log('add cart Document not found');
          return null;
        }
      } catch (e) {
        console.log('addcart getEachDoc error:', e);
        return null;
      }
    }, [sharedValues.useruid]);
    
    const helloaddcart = useCallback(async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'addcart',`${sharedValues.useruid}`,'items'));
        const promises = querySnapshot.docs.map((doc) => {
          const docId = doc.id;
          return getEachDoc(docId);
        });
        const data = await Promise.all(promises);
        setaddcart(data.filter((item) => item !== null));
      } catch (e) {
        console.error('Error:', e);
      }
    }, [getEachDoc, sharedValues.useruid]);
    
    useEffect(() => {
      helloaddcart();
    }, [helloaddcart]);
    
    async function deladdcart(docId){
      await deleteDoc(doc(db, "addcart", `${sharedValues.useruid}`,'items',`${docId}`));
        console.log("successfully deleted");
        alert("successfully deleted");
        window.location.reload();
        
    }
console.log("booka rey:",addcartdata);
/*function add data */
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
        <>
        
        <div className='contactus-first-div'>
        <h1>Addcart</h1>
        </div>

        <div className='Addcart-products-store'>
        {addcartdata.map((product) => (
          <div className='addcart-products-each-card'  key={product.docId}>
            
            
            <img src={product.productImage} alt="products-store" className='addcart-products-each-img'/>
            <div className='buyproducts-about-each-card'>
            <p>{product.productName}</p>
            <p>{product.productRate} Star</p>
            <p>₹{product.productCost}</p>
            <p>{product.productDes}</p>

            <div className='buyproducts-buttons-div'>
            <button onClick={()=>handlingorder(product)}>Buy Now</button>
            <button onClick={()=>deladdcart(product.proId)}>Delete</button>
            </div>
            

            </div>
            
          </div>
        ))}
      </div>

        </>
    );
}

export default Addcart;