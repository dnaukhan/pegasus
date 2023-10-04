import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth, db, provider } from "../GoogleSignIn/config";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import { AuthFormData, authFormSchema } from "../../models/Form";
import { doc, setDoc } from "@firebase/firestore";
import { useAppDispatch } from "../../hooks/storeHook";
import { login } from "../../features/authSlice";
import Google from "../../assets/icons/Google";

const AuthForm = () => {
  const [authType, setAuthType] = useState<"login" | "signup">("login");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const dispatch = useAppDispatch();

  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data: UserCredential) => {
        setValue(data.user.email || "");
        localStorage.setItem("email", data.user.email || "");
      })
      .catch((error: Error) => {
        console.log("Somewthing went wrong", error);
      });
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    setValue(storedEmail || "");
  }, []);

  const onSubmit = async (data: AuthFormData) => {
    const { email, password } = data;
    if (authType === "signup") {
      try {
        setLoading(true);
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("user", user);
        await setDoc(doc(db, "users", user.uid), { email });
        setLoading(false);
        if (user && user.email)
          dispatch(
            login({
              email: user.email,
              id: user.uid,
              photoUrl: user.photoURL || null,
            })
          );
      } catch (error: any) {
        setLoading(false);
        const errorCode = error.code;
        setErrorMessage(errorCode);
      }
    } else {
      //Sign in
    }
  };

  const handleAuthType = () => {
    setAuthType((prevAuthType) =>
      prevAuthType === "login" ? "signup" : "login"
    );
  };

  return (
    <div className="signin-wrapper">
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.7099 8.11997L10.8299 12L14.7099 15.88C15.0999 16.27 15.0999 16.9 14.7099 17.29C14.3199 17.68 13.6899 17.68 13.2999 17.29L8.70994 12.7C8.31994 12.31 8.31994 11.68 8.70994 11.29L13.2999 6.69997C13.6899 6.30997 14.3199 6.30997 14.7099 6.69997C15.0899 7.08997 15.0999 7.72997 14.7099 8.11997Z"
            fill="#A3AED0"
          />
        </svg>
        <span>Back to dashboard</span>
      </div>
      <div className="signin-form">
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={authFormSchema}
          // onSubmit={(values, { setSubmitting }) => {
          //   setTimeout(() => {
          //     alert(JSON.stringify(values, null, 2));
          //     setSubmitting(false);
          //   }, 400);
          // }}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col>
                  <h1>Sign {authType === "login" ? "In" : "Up"}</h1>
                  <span>Enter your email and password to sign in!</span>
                </Col>
              </Row>
              <Button
                variant="light"
                className="signin-button mb-3"
                type="submit"
                onClick={handleClick}
              >
                <Google />
                <span style={{ marginLeft: 5, color: "#2B3674" }}>
                  Sign In With Google
                </span>
              </Button>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  <span style={{ color: "#2B3674" }}>Email*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="mail@pegasus.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <span style={{ color: "red" }}>errors.email</span>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  <span style={{ color: "#2B3674" }}>Password*</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <span style={{ color: "red" }}>errors.password</span>
                )}
              </Form.Group>
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Keep me logged in" />
                  </Form.Group>
                </Col>
                <Col>
                  <div className="text-end">
                    <a href="/forgot-password">Forgot password?</a>
                  </div>
                </Col>
              </Row>
              <Button
                variant="primary"
                className="signin-button mb-3"
                type="submit"
                disabled={loading}
              >
                Sign {authType === "login" ? "in" : "up"}
              </Button>
              {authType === "login" ? (
                <div>
                  <span>Not registered yet? </span>{" "}
                  <span onClick={handleAuthType}>Create an Account</span>
                </div>
              ) : (
                <div>
                  <span>Already have an account? </span>{" "}
                  <span onClick={handleAuthType}>Sign in</span>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>

      <div>
        <span>
          © 2022 Pegasus UI. All Rights Reserved. Made with love by Lenny!
        </span>
      </div>
    </div>
  );
};

export default AuthForm;
