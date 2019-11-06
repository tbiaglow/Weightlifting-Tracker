import React from "react";
import User_Input from "./pages/User_Input";
import User_Remove from "./pages/User_Remove";
import User_Squat from "./pages/User_Squat";
import User_Press from "./pages/User_Press";
import User_BenchPress from "./pages/User_BenchPress";
import User_Deadlift from "./pages/User_Deadlift";
import User_CleanAndJerk from "./pages/User_CleanAndJerk";
import User_Snatch from "./pages/User_Snatch";
import User_PauseSquat from "./pages/User_PauseSquat";
import User_TempoSquat from "./pages/User_TempoSquat";
import User_PinSquat from "./pages/User_PinSquat";
import User_RackPull from "./pages/User_RackPull";
import User_PauseDeadlift from "./pages/User_PauseDeadlift";
import User_PendlayRow from "./pages/User_PendlayRow";
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
          <Route exact path="/users/:id/press" component={User_Press} />
          <Route exact path="/users/:id/benchpress" component={User_BenchPress} />
          <Route exact path="/users/:id/deadlift" component={User_Deadlift} />
          <Route exact path="/users/:id/cleanandjerk" component={User_CleanAndJerk} />
          <Route exact path="/users/:id/snatch" component={User_Snatch} />
          <Route exact path="/users/:id/pausesquat" component={User_PauseSquat} />
          <Route exact path="/users/:id/temposquat" component={User_TempoSquat} />
          <Route exact path="/users/:id/pinsquat" component={User_PinSquat} />
          <Route exact path="/users/:id/rackpull" component={User_RackPull} />
          <Route exact path="/users/:id/pausedeadlift" component={User_PauseDeadlift} />
          <Route exact path="/users/:id/pendlayrow" component={User_PendlayRow} />
          <Route exact path="/users/:id/Input" component={User_Input} />
          <Route exact path="/users/:id/Remove" component={User_Remove} />
          <Route exact path="/createaccount" component={CreateAccount} />
        </div>
      </Router>
    </div>
  );
}

export default App;
