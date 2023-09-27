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

const AuthForm = () => {
  const [authType, setAuthType] = useState<"login" | "signup">("login");
  const [loading, setLoading] = useState(false);

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
    } catch (error) {
      setLoading(false);
      console.log(error);
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
        <h1>Sign {authType === "login" ? "In" : "Up"}</h1>
        <span>Enter your email and password to sign in!</span>
        <Button
          variant="light"
          className="signin-button"
          type="submit"
          onClick={handleClick}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_3763)">
              <path
                d="M19.7874 10.225C19.7874 9.56668 19.7291 8.94168 19.6291 8.33334H10.2124V12.0917H15.6041C15.3624 13.325 14.6541 14.3667 13.6041 15.075V17.575H16.8207C18.7041 15.8333 19.7874 13.2667 19.7874 10.225Z"
                fill="#4285F4"
              />
              <path
                d="M10.2126 20C12.9126 20 15.1709 19.1 16.8209 17.575L13.6043 15.075C12.7043 15.675 11.5626 16.0417 10.2126 16.0417C7.60427 16.0417 5.39593 14.2833 4.60427 11.9083H1.2876V14.4833C2.92926 17.75 6.30427 20 10.2126 20Z"
                fill="#34A853"
              />
              <path
                d="M4.60407 11.9083C4.39574 11.3083 4.2874 10.6667 4.2874 9.99999C4.2874 9.33333 4.40407 8.69166 4.60407 8.09166V5.51666H1.2874C0.604068 6.86666 0.212402 8.38333 0.212402 9.99999C0.212402 11.6167 0.604068 13.1333 1.2874 14.4833L4.60407 11.9083Z"
                fill="#FBBC05"
              />
              <path
                d="M10.2126 3.95833C11.6876 3.95833 13.0043 4.46667 14.0459 5.45834L16.8959 2.60833C15.1709 0.991667 12.9126 0 10.2126 0C6.30427 0 2.92926 2.25 1.2876 5.51667L4.60427 8.09167C5.39593 5.71667 7.60427 3.95833 10.2126 3.95833Z"
                fill="#EA4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_3763">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span>Sign In With Google</span>
        </Button>
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
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="mail@pegasus.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep me logged in" />
              </Form.Group>
              <Button
                variant="primary"
                className="signin-button"
                type="submit"
                disabled={loading}
              >
                Sign {authType === "login" ? "in" : "up"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
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
      <div>
        <span>
          © 2022 Pegasus UI. All Rights Reserved. Made with love by Lenny!
        </span>
      </div>
    </div>
  );
};

export default AuthForm;
