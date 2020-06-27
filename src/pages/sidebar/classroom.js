import React from "react";
import { Field, Formik } from "formik";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import { Select } from "formik-material-ui";

export default function classroom() {
  return (
    <Formik initialValues={{ age: "" }}>
      <FormControl>
        <InputLabel htmlFor="age-simple">Age</InputLabel>
        <Field
          component={Select}
          name="age"
          inputProps={{
            id: "age-simple",
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Field>
      </FormControl>
    </Formik>
  );
}
