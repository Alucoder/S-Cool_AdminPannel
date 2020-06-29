import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import { Line } from "react-chartjs-2";
import axios from "axios";
import Calendar from "react-calendar";
import DoughnutChart from "../components/DoughnutChart";
import "react-calendar/dist/Calendar.css";
import BarChart from "../components/BarChart";
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
    // borderRadius: 14,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  fixedHeight: {
    height: 265,
  },
}));

// const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

export default function Dashboard() {
  const classes = useStyles();

  const SmallBox = () => (
    <>
      <Grid item xs={6} sm={6}>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <LibraryBooksIcon color="primary" style={{ fontSize: 70 }} />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h3">101</Typography>
              <Typography noWrap>Students</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={6}>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <LibraryBooksIcon color="primary" style={{ fontSize: 70 }} />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h3">10</Typography>
              <Typography noWrap>Teachers</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={6}>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <LibraryBooksIcon color="primary" style={{ fontSize: 70 }} />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h3">101</Typography>
              <Typography noWrap>Attendance</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={6}>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <LibraryBooksIcon color="primary" style={{ fontSize: 70 }} />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h3">101</Typography>
              <Typography noWrap>Students</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid container item xs={12} md={6} spacing={5}>
          <SmallBox />
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className={(classes.paper, classes.fixedHeight)}>
            <DoughnutChart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={7}>
          <Paper className={classes.paper}>
            <BarChart />
          </Paper>
        </Grid>
        <Grid container item xs={12} md={5}>
          <Paper className={classes.paper}>
            <Calendar value={new Date()} />
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}
