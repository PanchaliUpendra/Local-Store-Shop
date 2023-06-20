import React,{useState,useEffect,useContext} from 'react';
import MyContext from '../../Mycontext';
import './Orders.css';
import { doc,getDocs,collection ,getDoc} from "firebase/firestore";
import {db} from '../../Firebase';
import {  deleteDoc ,updateDoc } from "firebase/firestore";

function Orders(){
    const [ordersData, setordersData] = useState([]);

    const sharedValues=useContext(MyContext);

    async function getEachDoc(orderId) {
        try {
          const docRef = doc(db, 'orders', `${orderId}`);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const documentData = docSnap.data();
            
             return { orderId, ...documentData };
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
            const querySnapshot = await getDocs(collection(db, 'orders'));
            const promises = querySnapshot.docs.map((doc) => {
            const docId = doc.id;
            return getEachDoc(docId);
        });
        const data = await Promise.all(promises);
        setordersData(data.filter((item) => item !== null));
          } catch (e) {
            console.error('Error:', e);
          }
        }
        getProductsData();
      }, []);
      console.log(ordersData);
      async function delbuyproduct(docId){
        try{
            await deleteDoc(doc(db, "orders", `${docId}`));
            alert("successfully cancelled your product");
            window.location.reload();
        }catch(e){
            alert("annayya delete product error vachindhi");
        }
      }
      /* please update your data */
      async function updatedelivery(orderId){
        try{
            const washingtonRef = doc(db, "orders", `${orderId}`);
            await updateDoc(washingtonRef, {
            status:true,
            ...ordersData
            });
            alert("congraulations you successfully delivered")
            document.location.reload();
        }catch(e){
            alert("you got error while updating");
        }
      }
    return(
        <div className='orders-container'>
        {
            sharedValues.isAdmin?
            <div className='server-side-deliveries'>
            <h1>Your Deliveries</h1>
        <div className='orders-products-store'>
        {ordersData.map((product) => (
          <div className='addcart-products-each-card'  key={product.docId}>
            
            
            <img src={product.productImage} alt="products-store" className='addcart-products-each-img'/>
            <div className='buyproducts-about-each-card'>
            <p>{product.productName}</p>
            <p>{product.productRate} Star</p>
            <p>₹{product.productCost}</p>
            <p>{product.productDes}</p>
            {!product.status?<p>status:pending</p>:<p>status:delivered</p>}
            <p>customer:<b>{product.ufname} {product.ulname}</b> with <b>mobile no:{product.uphone} </b></p>
            <p>address:{product.uaddress} and given mail id:{product.uemail}</p>

            {!product.status?
            <div className='buyproducts-buttons-div'>
            <button onClick={()=>delbuyproduct(product.orderId)}>Cancel</button>
            <button onClick={()=>updatedelivery(product.orderId)}>Completed</button>
            </div>:
            <div className='buyproducts-buttons-div'>
            <button onClick={()=>delbuyproduct(product.orderId)}>Cancel</button>
            <button>Delivered</button>
            </div>
            }
            

            </div>
            
          </div>
        ))}
      </div>
      </div>:
      <div className='client-side-orders'>
      <h1>Your Orders</h1>
        <div className='orders-products-store'>
        {ordersData.filter((doc)=>doc.uemail===sharedValues.email).map((product) => (
          <div className='addcart-products-each-card'  key={product.docId}>
            
            
            <img src={product.productImage} alt="products-store" className='addcart-products-each-img'/>
            <div className='buyproducts-about-each-card'>
            <p>{product.productName}</p>
            <p>{product.productRate} Star</p>
            <p>₹{product.productCost}</p>
            <p>{product.productDes}</p>
            {!product.status?<p>status:pending</p>:<p>status:delivered</p>}
            <div className='buyproducts-buttons-div'>
            {!product.status?<button onClick={()=>delbuyproduct(product.orderId)}>Cancel</button>:<button>Delivered</button>}
            </div>
            

            </div>
            
          </div>
        ))}
      </div>
      </div>
        }
        
        
        </div>
    );
}

export default Orders;