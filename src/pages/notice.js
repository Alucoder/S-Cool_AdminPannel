import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import {
  makeStyles,
  Button,
  Box,
  Typography,
} from "@material-ui/core";
import { Form, Field, Formik, yupToFormErrors} from "formik";
import { TextField, Select} from "formik-material-ui";
import * as Yup from "yup";
import Axios from "axios";
    
const classStyle = makeStyles((theme) => ({
  form: {
    width: "100%",
    padding: theme.spacing(5)
  },
  headingText: {
    display: "inline-block",
    margin: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formDropdown: {
      width: "100%",    
      padding: theme.spacing(2),
  },
  typo: {
      margin: theme.spacing(2, 0, 2, 0)
  }
}));

export default function NewNotice() {
  const [students, setStudent] = useState([]);
  const classes = classStyle();

  const initialValues = {
    noticeType: "",
    title: "",
    desc: "",
    date: "",
    time: "",
    venue: "",
    classroom: "",
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
      await Axios.post("http://localhost:30022/notice", values, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      resetForm();
    } catch (e) {
      setSubmitting(false);
    }

    console.log("form data", values);
    try {
    } catch (error) {}
  };


  const validationSchema = Yup.object({
    // "noticeType": Yup.string().required("Notice type is required"),
    "title": Yup.string().required("Title type is required"),
    "desc": Yup.string().required("Title type is required"),
    "date": Yup.string().required("Date type is required"),
    "time": Yup.string().required("Time type is required"),
    "venue": Yup.string().required("Venue type is required"),
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
          New Notice
        </Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className={classes.form}>
                <Typography className = {classes.typo}>Notice Type</Typography>
                <Field fullWidth component="Select" name="noticeType" placeholder="Class" className = {classes.formDropdown}>
                    <option aria-label="None" value="Academic">Academic</option>
                    <option aria-label="None" value="Holiday">Holiday</option>
                    <option aria-label="None" value="Program">Program</option>
                    <option aria-label="None" value="Important">Important</option>
                </Field>
                <br/>
                <Field
                  component={TextField}
                  name="title"
                  type="text"
                  label="Notice Title"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
                <br />
                <Field
                  component={TextField}
                  name="desc"
                  type="text"
                  label="Description"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
                <br />
                <Field
                  component={TextField}
                  name="date"
                  type="date"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
                <br />
                <Field
                  component={TextField}
                  name="time"
                  type="time"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
                <br />
                <Field
                  component={TextField}
                  name="venue"
                  type="text"
                  label="Venue : school premise, community hall, tokha, kathmandu"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
                <br />
                <Typography className = {classes.typo}>Notice for</Typography>
                <Field fullWidth component="Select" name="classroom" placeholder="Class" className = {classes.formDropdown}>
                  {students.map((room) => (
                    <option value={room._id}>
                      Class {room.classroom} "{room.section}"
                    </option>
                  ))}
                </Field>
                <br/>
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
