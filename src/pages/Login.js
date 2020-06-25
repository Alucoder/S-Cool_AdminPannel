import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { TextField } from "formik-material-ui";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
//import { userLogin } from "../api/user";
import axios from "axios";
import { Redirect } from "react-router-dom";
import {
	section, div, img
} from 'reactstrap'
import learning from "../images/learning.png";
import logo from "../images/logo.png";
import Footer from "./Footer.js";
const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
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
			<div class="login-page">
				<section  component="main" className="login-section">
				<div className="side-image"> 
					<img src={learning} alt="header content" className="about-section__content"/>
				</div>
				<div className="login-form-container">
					<div className="site-title">
						<img src={logo} alt="header content" className="about-section__content"/>
					</div>
				
					<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
					>
						{
							(formik) => {
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
										
										
										<div class="sc-signin">
										<h3>Sign In</h3>
										<Button
										type="submit" class="submit-button"
										disabled={!formik.isValid || formik.isSubmitting}
										className={classes.submit}
										>
										arrow
										</Button>
										</div>
										<Link href="#" variant="body2">Forgot password?</Link>
									
									</Form>
								);
							}
						}
						</Formik>
					</div>
				</section>
				<Footer />
			</div>
				);
}
			