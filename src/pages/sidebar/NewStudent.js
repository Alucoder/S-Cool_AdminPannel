import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";

const classStyle = makeStyles((theme) => ({}));

export default function NewStudent() {
  const [classRoom, /*setClassRoom*/] = useState([]);
  const classes = classStyle();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data } = await Axios.get("http://localhost:3002/class", {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       });
  //       setClassRoom(data);
  //     } catch (e) {
  //       throw e;
  //     }
  //   })();
  // }, []);
  // const [isPosted, setPosted] = useState(true)

  const initialValues = {
    name: "",
    classroom: "",
    email: "",
    phone: "",
  };

  const onSubmit = async (
    values,
    { setSubmitting, resetForm, setFieldError }
  ) => {
    try {
      await Axios.post("http://localhost:3002/user", values, {
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
    classroom: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
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
              <Form className={classes.form}>
                <Field
                  placeholder="Full Name"
                  name="name"
                  type="text"
                  label="Full Name"
                  variant="outlined"
                  margin="normal"
                  fullwidth
                  className={classes.txtSection}
                  // autoFocus
                />

                <Field name="classroom" component="select" placeholder="Class">
                  {classRoom.map((room) => (
                    <option value={room._id}>
                      {room.classroom} "{room.section}"
                    </option>
                  ))}
                </Field>

                <Field
                  placeholder="Guardain phone no"
                  name="phone"
                  type="text"
                  label="Guardain phone no"
                  variant="outlined"
                  margin="normal"
                  fullwidth
                  className={classes.txtSection}
                  // autoFocus
                />

                <Field
                  placeholder="email"
                  name="email"
                  type="email"
                  label="email"
                  variant="outlined"
                  margin="normal"
                  fullwidth
                  className={classes.txtSection}
                  // autoFocus
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