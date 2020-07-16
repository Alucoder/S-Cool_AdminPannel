import React from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import { Grid, Paper, ButtonBase } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { makeStyles } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
const studentStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  stdDashboardContainer: {
    backgroundColor: "#fff",
    borderRadius: 14,
  },
  gridItemNavigate: {
    backgroundColor: "#5060BC",
    padding: theme.spacing(3),
    color: "#fff",
  },
}));

export default function Students() {
  const classes = studentStyle();

  return (
    <Layout>
      <div className={classes.root}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          className={classes.stdDashboardContainer}
        >
          <Grid item xs={4} button component={Link} to="/newstudent">
            <Paper className={classes.gridItemNavigate}>
              <AddCircleIcon />
              <div>New Students</div>
            </Paper>
          </Grid>
          <Grid item xs={4} button component={Link} to="/studentsinfo">
            <Paper className={classes.gridItemNavigate}>
              <FaceIcon />
              <div>Students Info</div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}
