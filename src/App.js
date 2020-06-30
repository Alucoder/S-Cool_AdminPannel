import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import NoMatch from "./components/NoMatch";
// import PrivateRoute from "./utils/PrivateRoute";
import ClassRoom from "./pages/sidebar/classroom";
import Subject from "./pages/sidebar/Subject";
import NewStudent from "./pages/sidebar/NewStudent";
import NewTeacher from "./pages/sidebar/NewTeacher";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route path="/dashboard" component={Dashboard} /> */}
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/classroom" component={ClassRoom} />
          <Route path="/subject" component={Subject} />
          <Route path="/newstudent" component={NewStudent} />
          <Route path="/newteacher" component={NewTeacher} />
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
