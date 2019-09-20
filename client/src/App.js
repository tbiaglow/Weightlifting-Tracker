import React from "react";
import Input from "./pages/Input";
import User_Hub from "./pages/User_Hub";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      {/* <Users /> */}
      <Router>
        <div>
          <Route exact path="/" component={User_Hub} />
          <Route exact path="/Input" component={Input} />
        </div>
      </Router>

          {/* <Route exact path="/users/:id" component={Users} /> */}
          {/* <Route component={NoMatch} /> */}

    </div>
  );
}

export default App;
