import React ,{useContext} from 'react';
import MyContext from './Mycontext';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import About from './Components/About/About';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Contactus from './Components/Contactus/Contactus';
import Products from './Components/Products/Products';
import Addproducts from './Components/Addproducts/Addproducts';
import Notfound from './Notfound';
import Deleteproducts from './Components/Deleteproducts/Deleteproducts';
import Account from './Components/Account/Account';
import Messages from './Components/messages/Messages';
import Editaccount from './Components/Account/Editaccount';
import Buyproducts from './Components/Buyproducts/Buyproducts';
import Addcart from './Components/Addcart/Addcart';
import Orders from './Components/Orders/Orderes';
function App() {

  const sharedValues=useContext(MyContext);

  

  
  
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
      
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Products' element={<Products />}/>
          
          <Route path='/Dashboard' element={<Dashboard/>}>
          <Route path='/Dashboard/account' element={<Account/>}/>
          <Route path='/Dashboard/messages' element={<Messages/>}/>
          <Route path='/Dashboard/orders' element={<Orders/>}/>
          </Route>

          <Route path='/Contactus' element={<Contactus/>}/>
            
          {sharedValues.isAdmin?<Route path={sharedValues.isAdmin?'/Addproducts':'*'} element={sharedValues.isAdmin?<Addproducts/>:<Notfound/>}/>:<></>}
          {sharedValues.isAdmin?<Route path={sharedValues.isAdmin?'/Deleteproducts':'*'} element={sharedValues.isAdmin?<Deleteproducts/>:<Notfound/>}/>:<></>}
          <Route path='*' element={<Notfound/>}/>
          <Route path='/editprofile' element={<Editaccount/>}/>
          <Route path='/buyproducts' element={<Buyproducts/>}/>
          <Route path='/addcart' element={<Addcart/>}/>
        </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
