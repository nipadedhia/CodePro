import "./assets/style.scss";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../firebase";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth";

const LoginComponent = ({ history }) => {
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history],
  );

  // Reference: https://webomnizz.com/working-with-react-formik-and-yup/
  // https://blog.logrocket.com/building-better-react-forms-with-formik/

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters at minimum")
      .required("Password is required"),
  });

  return (
    <div className="container-login container">
      <div className="row mb-5">
        <div className="col l12 text-center">
          <h1 className="mt-5">Login</h1>
          <Link to="/signup">Need an account?</Link>
        </div>
      </div>
      <div className="row">
        <div className="col l12">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}>
            {({ errors, touched }) => (
              <Form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field
                    name="email"
                    placeholder="Enter email"
                    className="form-control inputs"
                  />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="form-control inputs"
                  />
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </div>

                <div className="text-center">
                  <button className="button-login " type="submit">
                    Login
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LoginComponent);
