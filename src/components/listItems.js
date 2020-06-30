import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import ListSubheader from "@material-ui/core/ListSubheader";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
// import LayersIcon from "@material-ui/icons/Layers";
// import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

// const handleLogout = (props) => {
//   localStorage.removeItem("token");
//   props.history.push("/");
// };

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/classroom">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Class" />
    </ListItem>
    <ListItem button component={Link} to="/subject">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Subject" />
    </ListItem>
    <ListItem button component={Link} to="/student">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Student" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
  </div>
);
