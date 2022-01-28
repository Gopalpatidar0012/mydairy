import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./index.css";
import SearchIcon from "@material-ui/icons/Search";
import MenuBookIcon from "@material-ui/icons/MenuBook";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./table.css";

const Milkhistry = () => {
  const [error, setError] = useState();
  const [Loaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [num, setNum] = useState();
  const [loading, setLoading] = useState();
  const [total, setTotal] = useState();

  const changevalue = (e) => {
    setNum(e.target.value);
  };

 const getData = async(e) => {
    e.preventDefault(e);
    //setLoaded(false);
    // setLoading(true);
    e.target.reset();
    await axios
      .get(`https://dairymilkapi.herokuapp.com/findMilkdata/${num}`)
      .then((res) => {
        console.log(res);

        if (res.data.milkHistory) {
           console.log(res.data.milkHistory);
          setLoaded(true);
          setItems(res.data.milkHistory);
          var a = 0;
          var f = 0;
          res.data.milkHistory.map((t) => {
            a += t.liter * t.fat * 6.5;
          });
          setTotal(a);
        } else {
          //setLoaded(false);

          return alert("No customer found with this customer ID");
        }
      });
  };

  if (!Loaded) {
    return (
      <div>
        <form onSubmit={getData}>
          <label style={{ textAlign: "center" }}>
            Milk History Id No.{num}
            <input
              style={{ margin: "4px 0px 20px 20px" }}
              type="text"
              className="form-control"
              onChange={changevalue}
              placeholder="enter customer id"
            />
          </label>
          <button
            style={{ margin: "25px " }}
            type="submit"
            className="btn btn-primary"
          >
            show History
          </button>
        </form>
      </div>
    );
  }
  if (loading && !Loaded) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>WelCome your Milk history</h1>
        <table class="table_div">
          <thead>
            <tr>
              <th scope="col">CustomerId</th>
              <th scope="col">Date</th>
              <th scope="col">Liter</th>
              <th scope="col">Fat</th>
            </tr>
          </thead>
          <tbody>
            {items.map((listValue) => {
              return (
                <tr key={listValue._id}>
                  <td>{listValue.customerId}</td>
                  <td>{listValue.createdAt}</td>
                  <td>{listValue.liter}</td>
                  <td>{listValue.fat}</td>
                </tr>
              );
            })}
          </tbody>

          <tfoot>
            <tr>
              <th>total Money:--</th>
              <td>{total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
};

export default Milkhistry;
