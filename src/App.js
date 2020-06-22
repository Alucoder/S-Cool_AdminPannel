import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import PrivateRoute from "./utils/PrivateRoute";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route path="/dashboard" component={Dashboard} /> */}
          {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
