import React, { useState } from "react";
import Layout from "../../components/Layout";
import {
  makeStyles,
  Container,
  Button,
  Box,
  Grid,
  Typography,
  Select,
} from "@material-ui/core";
import { Form, Field, Formik } from "formik";
import MenuItem from "@material-ui/core/MenuItem";
import * as Yup from "yup";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { TextField } from "formik-material-ui";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const classStyle = makeStyles((theme) => ({
  subjectMain: {
    height: "60vh",
    width: "100%",
    borderRadius: 14,
    backgroundColor: "#ffffff",
    margin: theme.spacing(8, "auto"),
  },
  headingText: {
    display: "inline-block",
    margin: theme.spacing(2, 0),
  },
  formClass: {
    width: "100%",
  },
  btnClassPost: {
    borderRadius: 14,
  },
}));

export default function classroom() {
  // const [isPosted, setPosted] = useState(true)
  const classes = classStyle();

  const initialValues = {
    classroom: "",
    section: "",
  };

  const onSubmit = async (
    values,
    { setSubmitting, resetForm, setFieldError }
  ) => {
    try {
      console.log("form data", values);

      await axios.post("http://localhost:3002/class", values, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      resetForm();
    } catch (error) {
      setFieldError("general", error.response.data.message);
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object({
    classroom: Yup.string().required("class is required"),
    section: Yup.string().required("section is required"),
  });

  return (
    <Layout>
      <Box boxShadow={3} alignContent="center" className={classes.subjectMain}>
        <Typography
          component="h1"
          variant="h5"
          mt="2"
          className={classes.headingText}
        >
          New Class
        </Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className={classes.formClass}>
                <div>
                  <Field name="classroom" as="select">
                    <option aria-label="None" value="">
                      Select Classroom
                    </option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                    <option value={4}>Four</option>
                    <option value={5}>Five</option>
                    <option value={6}>Six</option>
                    <option value={7}>Seven</option>
                    <option value={8}>Eight</option>
                    <option value={9}>Nine</option>
                  </Field>
                </div>
                <br />
                <FormControl>
                  <Field
                    component={TextField}
                    name="section"
                    type="text"
                    label="Section"
                    variant="outlined"
                    margin="normal"
                    required
                    autoComplete="email"
                    className={classes.txtSection}
                  />
                </FormControl>
                <Typography variant="subtitle1" color="error">
                  {formik.errors.general}
                </Typography>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  // disabled={!formik.isValid || formik.isSubmitting}
                  className={classes.btnClassPost}
                >
                  Post
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Layout>
  );
}
