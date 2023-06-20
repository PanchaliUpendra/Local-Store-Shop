import React,{useState,useEffect} from 'react';
import './Messages.css';
import {  deleteDoc } from "firebase/firestore";
import { doc,getDocs,collection ,getDoc} from "firebase/firestore";
import {db} from '../../Firebase';

function Messages(){
    const [MessageData, setMessageData] = useState([]);
    async function getEachDoc(docId) {
        try {
          const docRef = doc(db, 'messages', `${docId}`);
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
            const querySnapshot = await getDocs(collection(db, 'messages'));
            const promises = querySnapshot.docs.map((doc) => {
            const docId = doc.id;
            return getEachDoc(docId);
        });
        const data = await Promise.all(promises);
        setMessageData(data.filter((item) => item !== null));
          } catch (e) {
            console.error('Error:', e);
          }
        }
        getProductsData();
      }, []);
      
      async function handledeletmessage(docId){
        await deleteDoc(doc(db, "messages", `${docId}`));
        alert("successfully deleted");
        window.location.reload();
      }

    return(
        <>
        <div className='messages-container'>
        <div className='messages-header'>
        <h2>See All Your Messages</h2>
        </div>
        <div>
            {MessageData.map((messages)=>(
                <div key={messages.docId} className='messagedata-each-card'>
                    <p>username:<span className='messagedata-each-span'>{messages.username}</span></p>
                    <p>usermail:<span className='messagedata-each-span'>{messages.usermail}</span></p>
                    <p>Subject:<span className='messagedata-each-span'>{messages.usersub}</span></p>
                    <p>Description:<span className='messagedata-each-span'>{messages.userdes}</span></p>
                    <button className='messagedata-delete' onClick={()=>handledeletmessage(messages.docId)}>Delete</button>
                </div>
            ))}
        </div>
        </div>
        
        </>
    );
}

export default Messages;