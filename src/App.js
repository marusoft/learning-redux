import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import { Dasboard } from "./components/dashboard/Dasboard";
import Navbar from "./components/layout/Navbar";
import ProjectDetails from "./components/projects/ProjectDetails";

function App() {
  return (
    <Router>
      <div className="App">
       <Navbar />
       <Switch>
         <Route exact path="/" component={Dasboard} />
         <Route path="/project/:id" component={ProjectDetails} />
         <Route path="/signin" component={SignIn} />
         <Route path="/signup" component={SignUp} />
       </Switch>
      </div>
    </Router>
  );
}

export default App;
