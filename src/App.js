import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import PrivateRoute from "./utils/PrivateRoute";
import ClassRoom from "./pages/sidebar/classroom";
import Subject from "./pages/sidebar/Subject";
import Student from "./pages/sidebar/Students";
import Teacher from "./pages/sidebar/Teachers";
import newStudent from "./pages/newstudent";
import studentInfo from "./pages/studentinfo";
import newTeacher from "./pages/newteacher";
import Teacherinfo from "./pages/Teacherinfo";
import notice from "./pages/notice";

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
          <Route path="/student" component={Student} />
          <Route path="/teacher" component={Teacher} />
          <Route path="/newstudent" component={newStudent} />
          <Route path="/studentsinfo" component={studentInfo} />
          <Route path="/newteacher" component={newTeacher} />
          <Route path="/teacherinfo" component={Teacherinfo} />
          <Route path="/notice" component={notice} />

          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
