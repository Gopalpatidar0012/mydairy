import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



const AddMilk=()=>{

const[Data,setFormData]=useState({
  customerId:null,
  liter:null,
  fat:null
});

    const onchange=(e)=>{
      setFormData({...Data,[e.target.name]:Number(e.target.value)});
    }


    const onsubmit=(e)=>{
        
        e.preventDefault();
       e.target.reset();
       console.log(Data);

      var config={
          method:'post',
          url:"https://dairymilkapi.herokuapp.com/addMilk",
          headers:{},
          data:Data
         };
      axios(config).then((res)=>{
        console.log(res);
        if(res.data.User){
         alert("successful added!!!!")
        }

       }).catch((error)=>{
               console.log(error);
       })
    }
    return(
        <div>
    <h1>Add Milk </h1>
    <form onSubmit={onsubmit}>
  <div className="form-group">
    <label>Customer Id</label>
    <input type="text"  name="customerId"  onChange={onchange}   className="form-control" 
    id="exampleInputEmail1"  placeholder="Customer Id"/>
   
  </div>
  <div className="form-group">
    <label>Milk in liter</label>
    <input type="text" name="liter"  onChange={onchange} className="form-control"
     id="exampleInputPassword1" placeholder="milk"/>
  </div>

  <div className="form-group">
    <label>Fat</label>
    <input type="text"  name="fat"  onChange={onchange} className="form-control" 
    id="exampleInputPassword1" placeholder="fat"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    )
    
}


export default AddMilk;
