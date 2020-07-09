import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
import { TextField } from "formik-material-ui";

const classStyle = makeStyles((theme) => ({
  subjectMain: {
    padding: 20,
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
export default function Subject() {
  const classes = classStyle();
  const [classRoom, setClassRoom] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await Axios.get("http://localhost:30022/class", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setClassRoom(data);

        const teachers = await Axios.get(
          "http://localhost:30022/users/userteacher",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setTeachers(teachers.data);
      } catch (e) {
        throw e;
      }
    })();
  }, []);

  const initialValues = {
    name: "",
    subjectDetail: "",
    classroom: "",
    teacher: "",
  };

  const onSubmit = async (
    values,
    { setSubmitting, resetForm, setFieldError }
  ) => {
    try {
      await Axios.post("http://localhost:30022/subject", values, {
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
    name: Yup.string().required("Required"),
    subjectDetail: Yup.string().required("Required"),
    classroom: Yup.string().required("Required"),
    teacher: Yup.string().required("Required"),
  });

  return (
    <Layout>
      <Box boxShadow={3} alignContent="center" className={classes.subjectMain}>
        <h1 style={{ paddingTop: 8 }}>New Subject</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className={classes.formClass}>
                <Field
                  component={TextField}
                  name="fname"
                  type="text"
                  label="Subject Name"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  autoFocus
                />
                <Field
                  name="classroom"
                  component="select"
                  placeholder="Class"
                  fullWidth
                  className={classes.formClass}
                  style={{ marginBottom: "10px" }}
                >
                  <option aria-label="None" value="">
                    Select Classroom
                  </option>
                  {classRoom.map((room) => (
                    <option value={room._id}>
                      {room.classroom} "{room.section}"
                    </option>
                  ))}
                </Field>
                <Field
                  name="teacher"
                  component="select"
                  placeholder="Teacher"
                  className={classes.formClass}
                >
                  <option aria-label="None" value="">
                    Select Teacher
                  </option>
                  {teachers.map((user) => (
                    <option value={user._id}>{user.fname}</option>
                  ))}
                </Field>
                <Field
                  name="subjectDetail"
                  type="text"
                  label="Description"
                  variant="outlined"
                  component={TextField}
                  margin="normal"
                  fullWidth
                  autoFocus
                />
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
