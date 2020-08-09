import React, { useState, useEffect } from "react";
import { makeStyles, Button, Box, Typography } from "@material-ui/core";
import { Form, Field, Formik, yupToFormErrors } from "formik";
import { TextField, Select, fieldToTextField } from "formik-material-ui";
import * as Yup from "yup";
import Axios from "axios";
const classStyle = makeStyles((theme) => ({
  subjectMain: {
    backgroundColor: "white",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "100%",
    padding: theme.spacing(5),
  },
  headingText: {
    display: "inline-block",
    margin: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function UpdatePersonDetail({ initialValues, close }) {
  const [students, setStudent] = useState([]);
  const classes = classStyle();
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
      await Axios.put("http://localhost:30022/users/register", values, {
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
    fname: Yup.string().required("Name is required"),
    classroom: Yup.string().required("Classroom is required"),
    userid: Yup.string().required("Student Id is required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Phone is required"),
  });

  return (
    <div className={classes.container}>
      <Box boxShadow={3} alignContent="center" className={classes.subjectMain}>
        <Typography
          component="h1"
          variant="h5"
          mt="2"
          className={classes.headingText}
        >
          Edit User Detail
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
                  name="fname"
                  type="text"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  autoFocus
                />
                <br />
                <Field
                  component="select"
                  style={{ width: "100% ", padding: 10 }}
                  name="classroom"
                  placeholder="Class"
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
                  label="Teacher id"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
                <br />
                <Field
                  component={TextField}
                  name="phone"
                  type="text"
                  label="Personal phone number"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
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
                  Update
                </Button>

                <Button
                  variant="contained"
                  color="warning"
                  onClick={close}
                  style={{ marginLeft: 10 }}
                  className={classes.submit}
                >
                  Close
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </div>
  );
}
