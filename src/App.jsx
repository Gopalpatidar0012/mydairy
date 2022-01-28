import React from "react";
import Header from "./Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Addcustomer from "./Addcustomer";
import AddMilk from "./AddMilk";
import Milkhistry from "./Milkhistry";
import { Footer } from "./Footer";
import { Container } from "react-bootstrap";
import { Home } from "./Home";

const App = () => {
  return (
    <div>
      <Header />

      <Container fluid style={{ padding: "10%", background: "pink" }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Addcustomer />
            </Route>
            <Route exact path="/add">
              <AddMilk />
            </Route>
            <Route exact path="/history">
              <Milkhistry />
            </Route>
            <Route exact path="/home">
            <Home/>
            </Route>
          </Switch>
        </BrowserRouter>
      </Container>

      <Footer />
    </div>
  );
};
export default App;
