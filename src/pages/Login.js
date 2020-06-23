import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { TextField } from "formik-material-ui";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import { userLogin } from "../api/user";
import axios from "axios";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  redColor: {
    color: "red",
  },
}));

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const classes = useStyles();

  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = async (
    values,
    { setSubmitting, resetForm, setFieldError }
  ) => {
    console.log("form data", values);
    try {
      const {
        data: { token },
      } = await axios.post("http://localhost:3001/users/login/admin", values);
      localStorage.setItem("token", token);
      resetForm();
      setIsLoggedIn(false);
    } catch (error) {
      setFieldError("general", error.response.data.message);
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  if (!isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form className={classes.form}>
                  <Field
                    component={TextField}
                    name="email"
                    type="email"
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    autoComplete="email"
                    // autoFocus
                  />

                  <Field
                    component={TextField}
                    name="password"
                    type="password"
                    label="Password"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    // autoFocus
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />

                  <Typography variant="subtitle1" color="error">
                    {formik.errors.general}
                  </Typography>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={!formik.isValid || formik.isSubmitting}
                    className={classes.submit}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                  </Grid>
                  <Box mt={5}>
                    <Copyright />
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Grid>
    </Grid>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        AluCoder
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
