import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./index.css";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const Addcustomer=()=>{
 const[nameid,setname]=useState("");
  const[customerid,setCustomerid]=useState("");

  const onchange=(e)=>{
    setname(e.target.value)
  }
  const onchangeid=(e)=>{
    setCustomerid(e.target.value)
  }
  const onsubmit=(e)=>{
         e.preventDefault();
         e.target.reset();
        //console.warn(customer,customerid);
         console.log(nameid,customerid);
      // var form=nameid,customerid; 
        var config = {
          method: 'post',
          url: 'https://dairymilkapi.herokuapp.com/addCustomer',
          headers: { },
          data : nameid,customerid
          };
      axios(config)
        //console.log(nameid,customerid);
        //axios.post("https://dairymilkapi.herokuapp.com/addCustomer",nameid)
         .then((res)=>{
           console.log(res);
          if(res){
            alert("successful added")
          }
         }).catch((error)=>{
              console.log(error)
         })
             
     }

//  const onsubmit=(e)=>{
//      e.preventDefault();
//      e.target.reset();
//     //console.warn(customer,customerid);
//      const data={name,customerid};
//      fetch("https://jsonplaceholder.typicode.com/users",{ method:"post",headers:{},
//     body:data
//      }).then((res)=>{
//        console.log(res);
//          if(res){
//              alert("successs");
//          }
//          else{
//              console.log("error");
//          }
            
//      })
//  }

// return(
// <div>
//     <h1>gopal patoidaha</h1>
//     <form onSubmit={onsubmit}>
//   <div className="form-group">
//     <label>Customer Name</label>
//     <input type="text" value={name} onChange={(e)=>{
//                            setname(e.target.value)
//     }} className="form-control" id="exampleInputEmail1"  placeholder="Customer Name"/>
   
//   </div>
//   <div className="form-group">
//     <label>Customer Id</label>
//     <input type="text" value={customerid} onChange={(e)=>{
//                            setCustomerid(e.target.value)
//     }} className="form-control" id="exampleInputPassword1" placeholder="Customer Id"/>
//   </div>
 
//   <button type="submit" className="btn btn-primary">Submit</button>
// </form>
// </div>
// )


return(
<div>

    <form onSubmit={onsubmit}>
    <h1>Add Customer</h1>
  <div className="form-group">
    <label>Customer Name</label>
    <input type="text" value={nameid} name="name"  onChange={onchange}  className="form-control"   placeholder="Customer Name"/>
   
  </div>
  <div className="form-group">
    <label>Customer Id</label>
    <input type="text" value={customerid} name="customerid" onChange={onchangeid} className="form-control"  placeholder="Customer Id"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
)
}
export default Addcustomer;