import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import PrivateRoute from "./utils/PrivateRoute";
import ClassRoom from "./pages/sidebar/classroom";
import { ThemeProvider } from "@material-ui/core";
// import ClassRoom from "./pages/sidebar/";
function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            {/* <Route path="/dashboard" component={Dashboard} /> */}
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/classroom" component={ClassRoom} />
            {/* <PrivateRoute path="/subject" component={Subject} /> */}
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
