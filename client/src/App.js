import React from "react";
import User_Input from "./pages/User_Input";
import User_Squat from "./pages/User_Squat";
import User_Hub from "./pages/User_Hub";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Sets up all possible URL routes
function App() {
  return (
    <div>
      <Nav />
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/users/:id" component={User_Hub} />
          <Route exact path="/users/:id/squat" component={User_Squat} />
          <Route exact path="/users/:id/Input" component={User_Input} />
          <Route exact path="/createaccount" component={CreateAccount} />
        </div>
      </Router>

          {/* <Route exact path="/users/:id" component={Users} /> */}
          {/* <Route component={NoMatch} /> */}

    </div>
  );
}

export default App;
