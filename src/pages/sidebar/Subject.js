import React from "react";
import Layout from "../../components/Layout";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";

const classStyle = makeStyles((theme) => ({}));
export default function subject() {
  

// const [isPosted, setPosted] = useState(true)
const classes = classStyle();
  
   
const initialValues = {
    name: "",
    subjectDetail: "",
    classroom: "",
    teacher: ""
  };
  const onSubmit = async (
        values,
        { setSubmitting, resetForm, setFieldError }
    ) => {
    console.log("form data", values);
    try {
    } catch (error) {
    }
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });
  
  
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
                    onSubmit={onSubmit}
                >
            {(formik) => {
              return (
                <Form className={classes.form}>
                  <Field
                    placeholder="Subject Name" 
                    name="name"
                    type="text"
                    label="Subject Name"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    className={classes.txtSection}
                    // autoFocus
                    />
                    <Field
                    name="Class" 
                    component="select" 
                    placeholder="Class">   
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </Field>
                    <Field
                    name="Teacher" 
                    component="select" 
                    placeholder="Teacher">   
                        <option value="Ram">Ram</option>
                        <option value="Hari">Hari</option>
                    </Field>

                    <Field
                    placeholder="Description" 
                    name="description"
                    type="text"
                    label="Description"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    className={classes.txtSection}
                    // autoFocus
                    />
                 

                  
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
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