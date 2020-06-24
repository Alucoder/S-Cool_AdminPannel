import React from "react";
import Layout from "../components/Layout";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

// const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

export default function Dashboard() {
  // const classes = useStyles();

  return (
    <Layout>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          heloo
          {/* <Paper className={fixedHeightPaper}>hello<Chart /></Paper> */}
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          vb
          {/* <Paper className={fixedHeightPaper}><Deposits /></Paper> */}
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          dg
          {/* <Paper className={classes.paper}><Orders /></Paper> */}
          <a href="#">Welcome</a>

        </Grid>
      </Grid>
    </Layout>
  );
}
