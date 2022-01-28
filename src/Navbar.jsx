import React from "react";
import "./NavbarCss.css";
import AddMilk from "./AddMilk";
import Milkhistry from "./Milkhistry";
import "./index.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch,Link } from "react-router-dom";
import Addcustomer from "./Addcustomer";


//import Image from 'react-bootstrap/Image';
const Navbar=()=>{
 
    return(
        <div>
        <BrowserRouter>
        <nav className="navbar">
        {/* <h1 className="navbar-brand" >Milk-Store</h1> */}
    <ul>
      <li>
        <Link to="/">AddCustomer</Link>
      </li>
      <li>
      <Link to="/addmilk">AddMilk</Link>
      </li>
      <li>
      <Link to="/milkhistry">MilkHistry</Link>
      </li>
    

      
    </ul>
    
   
    </nav>
    <div className="component">
    <switch>
    <Route  exact path="/"><Addcustomer/></Route>
    <Route exact path="/addmilk"><AddMilk/> </Route>
    <Route exact path="/milkhistry"><Milkhistry/></Route>
    </switch>
    </div>
  
    
    </BrowserRouter>
    <footer><p>@copyright all right reserved @Gopal Patidar</p></footer>
</div>
    )
}

export default Navbar;






