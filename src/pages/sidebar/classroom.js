import React, { useState } from "react";
import Layout from "../../components/Layout";
import { makeStyles, Button, Box, Typography } from "@material-ui/core";
import { Form, Field, Formik } from "formik";
import MenuItem from "@material-ui/core/MenuItem";
import * as Yup from "yup";
import axios from "axios";
import { TextField } from "formik-material-ui";

const classStyle = makeStyles((theme) => ({
  subjectMain: {
    width: "100%",
    borderRadius: 14,
    backgroundColor: "#fff",
    margin: theme.spacing(8, "auto"),
  },
  headingText: {
    display: "inline-block",
    margin: theme.spacing(2, 0),
  },
  formClass: {
    width: "100%",
    padding: "16px",
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

      await axios.post("http://localhost:30022/class", values, {
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
        <h1 style={{ paddingTop: 8 }}>New Class</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className={classes.formClass}>
                <Field
                  placeholder="Class"
                  name="classroom"
                  as="select"
                  className={classes.formClass}
                >
                  <option value="">Choose Class</option>
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
                <br />
                <Field
                  component={TextField}
                  name="section"
                  type="text"
                  placeholder="Section"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                />
                <Typography variant="subtitle1" color="error">
                  {formik.errors.general}
                </Typography>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!formik.isValid || formik.isSubmitting}
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
