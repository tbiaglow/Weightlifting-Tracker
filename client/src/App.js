import React from "react";
import Users from "./pages/Users";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      {/* <Users /> */}
      <Router>
        <div>
          <Route exact path="/" component={Users} />
          <Route exact path="/users" component={Users} />
        </div>
      </Router>

          {/* <Route exact path="/users/:id" component={Users} /> */}
          {/* <Route component={NoMatch} /> */}

    </div>
  );
}

export default App;
