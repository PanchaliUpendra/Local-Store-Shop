// MyProvider.js
import React, { useEffect, useState } from 'react';
import MyContext from './Mycontext';
import { getAuth,onAuthStateChanged} from "firebase/auth";
import { doc,getDoc,getDocs,collection  } from "firebase/firestore";
import {app} from './Firebase';
import {db} from './Firebase';



const MyProvider = ({ children }) => {
    const auth=getAuth(app);
    const[currentuser,setcurrentuser]=useState(false);
    const[useruid,setuseruid]=useState(null);
    const[isAdmin,setisAdmin]=useState(false);
    const[firstname,setfirstname]=useState("");
    const[lastname,setlastname]=useState("");
    const[phoneno,setphoneno]=useState(null);
    const[address,setaddress]=useState("");
    const[email,setemail]=useState("");
    const [productData, setProductData] = useState([]);
    
    /* on auth state changed */
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          setuseruid(user.uid);
          console.log("you login with the user uid",uid);
         setcurrentuser(true);
        } else {
          console.log("you are logged out");
          setcurrentuser(false);
        }

    });

    
    
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

    /* providing the specific data */
    useEffect(()=>{
        if(currentuser){
            async function getUserDataFromFirestore(reguid) {
                try {
                  const docRef = doc(db, "users", `${reguid}`);
                  const docSnap = await getDoc(docRef);
              
                  if (docSnap.exists()) {
                    const userData = docSnap.data();
                    // Access the user's mail and admin properties
                    const mail = userData.mail;
                    setisAdmin(userData.admin);
                    setfirstname(userData.firstname);
                    setlastname(userData.lastname);
                    setphoneno(userData.phone);
                    setaddress(userData.address);
                    setemail(userData.mail);
                    console.log("User data:", userData);
                    console.log("Mail:", mail);
                    console.log("Admin:", isAdmin);
                  } else {
                    console.log("User data not found");
                  }
                } catch (e) {
                  console.error("Error retrieving document: ", e);
                }
              }
           
              getUserDataFromFirestore(useruid);

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
        }
        
    },[currentuser,isAdmin,useruid])
    
  const sharedValues = {
    name: 'John Doe',
    age: 25,
    city: 'New York',
    currentuser:currentuser,
    useruid:useruid,
    isAdmin:isAdmin,
    firstname:firstname,
    lastname:lastname,
    email:email,
    address:address,
    phoneno:phoneno,
    updatedata:productData,
    
    

  };
  return <MyContext.Provider value={sharedValues}>{children}</MyContext.Provider>;
};

export default MyProvider;
