import React, { useState } from "react";
import Layout from "../../components/Layout";
import { makeStyles, Container, Button, Box, Grid, Typography, TextField, Select } from "@material-ui/core";
import { Form, Field, Formik} from "formik";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import * as Yup from "yup";
import axios from "axios";
import { Redirect } from "react-router-dom";



const classStyle = makeStyles((theme) => ({
  subjectMain: {
    height: "60vh",
    width: "25%",
    borderRadius: 14,
    backgroundColor: "#ffffff",
    // margin: theme.spacing(8, "auto")
},
headingText: {
  display: "inline-block",
  margin: theme.spacing(2,0)
},
formClass: {
  width: "100%"
},
btnClassPost: {
  borderRadius: 14,
}


}));

export default function classroom() {
  
  // const [isPosted, setPosted] = useState(true)
  const classes = classStyle();

  const initialValues = {
    class: "",
    section: "",
  }

  const onSubmit = async (
    values,
    { setSubmitting, resetForm, setFieldError }
  ) => {
    try {
    console.log("form data", values);

      await axios.post("http://localhost:30022/class", values);
      resetForm();
    } catch (error) {
      setFieldError("general", error.response.data.message);
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object({
    class: Yup.string().required("class is required"),
    section: Yup.string().required("section is required"),
  })

  return (
      <Layout>
          <Box 
          boxShadow={3} 
          alignContent= "center" className={classes.subjectMain}>
            <Typography component="h1" variant="h5" mt="2" className={classes.headingText}>
              New Class
            </Typography>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}>
              {
                (formik) => {
                  return (
                  <Form className={classes.formClass}>
                    <InputLabel htmlFor="class-simple">Class</InputLabel>
                    <FormControl>
                      <Field
                        component={Select}
                        label="Class"
                        name="class"
                        fullwidth
                        inputProps={{
                          id: 'class-simple',
                        }}
                      >
                        <MenuItem value={1}>One</MenuItem>
                        <MenuItem value={2}>Two</MenuItem>
                        <MenuItem value={3}>Three</MenuItem>
                        <MenuItem value={4}>Four</MenuItem>
                        <MenuItem value={5}>Five</MenuItem>
                        <MenuItem value={6}>Six</MenuItem>
                        <MenuItem value={7}>Seven</MenuItem>
                        <MenuItem value={8}>Eight</MenuItem>
                      </Field>
                    </FormControl> <br/>
                    
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
                      disabled={!formik.isValid || formik.isSubmitting}
                      className={classes.btnClassPost}
                    >
                      Post
                    </Button>

                  </Form>
                  
                  )
                }
              }
            </Formik>

          </Box>
      </Layout>
  );
}
