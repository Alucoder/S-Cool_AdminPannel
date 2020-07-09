import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { makeStyles, Button, Box, Typography } from "@material-ui/core";
import { Form, Field, Formik, yupToFormErrors } from "formik";
import { TextField, Select } from "formik-material-ui";
import * as Yup from "yup";
import Axios from "axios";

const classStyle = makeStyles((theme) => ({
  form: {
    width: "100%",
    padding: theme.spacing(5),
  },
  formDropdown: {
    width: "100%",
    padding: theme.spacing(2),
  },
  headingText: {
    display: "inline-block",
    margin: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function NewStudent() {
  const [students, setStudent] = useState([]);
  const classes = classStyle();

  const initialValues = {
    name: "",
    classroom: "",
    userid: "",
    email: "",
    admin: "student",
    phone: "",
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await Axios.get("http://localhost:30022/class", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setStudent(data);
      } catch (e) {
        throw e;
      }
    })();
  }, []);

  const onSubmit = async (
    values,
    { setSubmitting, resetForm, setFieldError }
  ) => {
    try {
      await Axios.post("http://localhost:30022/users/register", values, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      alert("Sucess");

      resetForm();
    } catch (e) {
      setSubmitting(false);
    }

    console.log("form data", values);
    try {
    } catch (error) {}
  };

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    userid: Yup.string().required("Student Id is required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Phone is required"),
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
          New Student
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
                  label="Full Name"
                  name="name"
                  type="text"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  autoFocus
                />
                <br />
                <Field
                  component="select"
                  className={classes.formDropdown}
                  name="classroom"
                  placeholder="Class"
                  fullWidth
                >
                  <option value="">Choose Class</option>
                  {students.map((room) => (
                    <option value={room._id}>
                      {room.classroom} "{room.section}"
                    </option>
                  ))}
                </Field>
                <Field
                  component={TextField}
                  name="userid"
                  type="text"
                  label="Student ID"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
                <br />
                <Field
                  component={TextField}
                  name="phone"
                  type="text"
                  label="Guardain phone no"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
                {/* <br/>
                <Field
                  component={TextField}
                  name="phone"
                  type="text"
                  label="usertype"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                /> */}
                <br />
                <Field
                  component={TextField}
                  name="email"
                  type="text"
                  label="email"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!formik.isValid || formik.isSubmitting}
                  className={classes.submit}
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
