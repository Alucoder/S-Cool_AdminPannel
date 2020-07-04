import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SchoolIcon from '@material-ui/icons/School';
import NoteIcon from '@material-ui/icons/Note';
import ClassIcon from '@material-ui/icons/Class';
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({});

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
<<<<<<< HEAD
     <ListItem button>
      <Link to="/classroom">
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Class Room" />
      </Link>
    </ListItem> 
    
    

    <ListItem button>
=======
    <ListItem button component={Link} to="/classroom">
      <ListItemIcon>
        <ClassIcon />
      </ListItemIcon>
      <ListItemText primary="Class" />
    </ListItem>
    <ListItem button component={Link} to="/subject">
>>>>>>> cf52eac2b3c743ac7b73aeb3d6cac5311d7ab686
      <ListItemIcon>
        <MenuBookIcon />
      </ListItemIcon>
      <ListItemText primary="Subject" />
    </ListItem>
    <ListItem button component={Link} to="/student">
      <ListItemIcon>
        <SchoolIcon />
      </ListItemIcon>
      <ListItemText primary="Student" />
    </ListItem>
    <ListItem button component={Link} to="/teacher">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Teacher" />
    </ListItem>
    <ListItem button component={Link} to="/notice">
      <ListItemIcon>
        <NoteIcon />
      </ListItemIcon>
      <ListItemText primary="Notice" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
  </div>
);
