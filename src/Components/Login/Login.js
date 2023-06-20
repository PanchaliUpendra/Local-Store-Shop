import React, { useState ,useEffect ,useContext} from 'react';
import MyContext from '../../Mycontext';
import './Login.css';
import registered from '../../Images/signedin.gif'
import { app } from '../../Firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {  useNavigate } from 'react-router-dom';


import { doc, setDoc } from "firebase/firestore";
import {db} from '../../Firebase';


function Login(){
    const sharedValues=useContext(MyContext);
    const navigate = useNavigate();
    const[signin,setsignin]=useState(false);
    const[register,setregister]=useState(false);
    
    /* content of the sign up */
    const[getmail,setmail]=useState("");
    const[getpassword,setpassword]=useState("");
    const[getconfirmpass,setconfirmpass]=useState("");
    /* content of sign in */

    const[givemail,verfiymail]=useState("");
    const[givepassword,verfiypassword]=useState("");
    const auth = getAuth(app);
    /* sing in users for login the users */
    function signinhandle(event){
        event.preventDefault();
        signInWithEmailAndPassword(auth, givemail, givepassword)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("u are successfullyu logged in",user);
            // ...
        })
        .catch((error) => {
            const errorCodeone = error.code;
            const errorMessageone = error.message;
            console.log("error vachindhi ra swamy",errorCodeone,errorMessageone);
            alert("incoorect user or password");
            window.location.reload();
        });
        
    }
    
    

    /* sign up funtions for creating the users */
    
    function funsignup(event){
        event.preventDefault();
        if(getpassword === getconfirmpass && getpassword!=="" && getconfirmpass!==""){
           
        createUserWithEmailAndPassword(auth,getmail, getpassword)
            .then((userCredential) => {
                // Signed in 
                const userone = userCredential.user;
                
                console.log(userone)
                setregister(true);
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("pakka ki poyi aduko amma",errorCode,errorMessage);
                alert("error vachidhi sir");
            });
        }
        else{
            alert("please fill all the input boxes correctly");
            window.location.reload();
        }
    }

    /* checking the user is signed in or not 
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          setreguid(user.uid);
          console.log("you login with the user uid",uid);
         setcurrentuser(true);
        } else {
          console.log("you are logged out");
          setcurrentuser(false);
        }

    });
    */

      async function adduserfirestore(reguid){
        try {
          await setDoc(doc(db, "users", `${reguid}`), {
            mail:getmail,
            admin:false,
            firstname:"please edit your first name",
            lastname:" please edit your last name",
            phone:"+91-XXXXXXXXXX",
            address:"add your address"
          });
            console.log("user or client have created his/her account");
          } catch (e) {
            console.error("Error adding document: ", e);
          }
      }

      
      
      if(register){
        adduserfirestore(sharedValues.useruid);
      }

      
      
      
      
      
      useEffect(() => {
        if (sharedValues.currentuser) {
            navigate('/');
        }
      }, [sharedValues.currentuser, navigate,sharedValues.useruid,register]);

      

    
    return(
        <>
            <div className={sharedValues.currentuser?'inactive-login-container':'login-container'}>
            {/*sign in box using firebase */}
            <div className={signin?'login-con-inactive':'login-con-sign-up'}>
                <h1>Sign In</h1>
                <form>
                    <label>Gmail</label>
                    <input type='email' placeholder='email' onChange={(e)=>verfiymail(e.target.value)} />
                    <label>Password:</label>
                    <input type='password' placeholder='password' onChange={(e)=>verfiypassword(e.target.value)}/>
                    <button  onClick={(event) =>signinhandle(event)}>Sign In</button>
                </form>
                <p>Don’t have an Account?<span onClick={()=> setsignin(!signin)} className='login-final-decision-btn'> Create account </span></p>
                </div>
            
            {/*sign up box using firebase */}
                <div className={signin?'login-con-sign-up':'login-con-inactive'}>
                <h1>Sign Up</h1>
                <form>
                    <label>Gmail</label>
                    <input type='email' placeholder='email' onChange={(e)=>setmail(e.target.value)}/>
                    <label>Password:</label>
                    <input type='password' placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>
                    <label>Confirm Passwords:</label>
                    <input type='password' placeholder='confirm password' onChange={(e)=>setconfirmpass(e.target.value)}/>
                    <button onClick={(event) =>funsignup(event)}>Sign Up</button>
                </form>
                <p>Already have an Account? <span onClick={()=> setsignin(!signin)} className='login-final-decision-btn'>Sign In</span></p>
                </div>
            {/* successfully registered  */}
                <div className={register?'login-register-successfully':'inactive-reg-successfully'}>
                <img src={registered} alt="registered" className='registered-img'/>
                </div>

            </div>
        </>
    );
}

export default Login;