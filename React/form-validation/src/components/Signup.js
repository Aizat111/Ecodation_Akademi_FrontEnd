import React from "react";
import { useFormik } from "formik";
import { signupValidation } from "./helper";
import styles from "./signup.module.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};

export const Signup = () => {
  const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupValidation,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label> <br />
        <input
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />{" "}
        <br />
        <div className={styles.errorMessage}>
          {errors.name && touched.name && errors.name}
        </div>
        <br />
        <label htmlFor="email">Email</label> <br />
        <input
          name="email"
          type={"email"}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />{" "}
        <br />
        <div className={styles.errorMessage}>
          {errors.email && touched.email && errors.email}
        </div>
        <br />
        <label htmlFor="password">Password</label> <br />
        <input
          name="password"
          type={"password"}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />{" "}
        <br />
        <div className={styles.errorMessage}>
          {errors.password && touched.password && errors.password}
        </div>
        <br />
        <label htmlFor="cpassword">Confirm Password</label> <br />
        <input
          name="cpassword"
          type={"password"}
          value={values.cpassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />{" "}
        <br />
        <div className={styles.errorMessage}>
          {errors.cpassword && touched.cpassword && errors.cpassword}
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
