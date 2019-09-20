import React from "react";
import User_Input from "./pages/User_Input";
import User_Squat from "./pages/User_Squat";
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
          <Route exact path="/users/:id" component={User_Hub} />
          <Route exact path="/users/:id/squat" component={User_Squat} />
          <Route exact path="/Input" component={User_Input} />
        </div>
      </Router>

          {/* <Route exact path="/users/:id" component={Users} /> */}
          {/* <Route component={NoMatch} /> */}

    </div>
  );
}

export default App;
