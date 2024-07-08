import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./register.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const initialState = {
    email: "",
    phone: "",
    city: "",
    password: "",
    ConfirmPassword: "",
};

const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
    password: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    ConfirmPassword: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
});

const Register = () => {
    return (
        <div className="form">
            <div>
                <img src={logo} alt="" />
            </div>
            <h1>Welcome to ByTrend!</h1>
            <p className="request">
                Already have an account?{" "}
                <span>
                    <Link to={"/login"}>Log in</Link>
                </span>
            </p>
            <Formik
                initialValues={initialState}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form className="form__items">
                        <div className="form__item">
                            <label htmlFor="email">Email</label>
                            <Field
                                name="email"
                                type="email"
                                className={`inp ${
                                    errors.email && touched.email ? "error" : ""
                                }`}
                                placeholder="Email"
                            />
                        </div>
                        <div className="form__item">
                            <label htmlFor="phone">Phone</label>
                            <Field
                                name="phone"
                                // type="string"
                                className={`inp ${
                                    errors.phone && touched.phone ? "error" : ""
                                }`}
                                placeholder="Phone"
                            />
                        </div>
                        <div className="country">
                            <div className="form__item">
                                <label htmlFor="country">Country</label>
                                <select className="inp" name="" id="">
                                    <option value="">Russia</option>
                                    <option value="">England</option>
                                </select>
                            </div>
                            <div className="form__item">
                                <label htmlFor="city">City</label>
                                <Field
                                    name="city"
                                    type="text"
                                    className={`inp ${
                                        errors.city && touched.city
                                            ? "error"
                                            : ""
                                    }`}
                                    placeholder="City"
                                />
                            </div>
                        </div>
                        <div className="form__item">
                            <label htmlFor="password">Password</label>
                            <Field
                                name="password"
                                type="password"
                                autoComplete="on"
                                className={`inp ${
                                    errors.password && touched.password
                                        ? "error"
                                        : ""
                                }`}
                                placeholder="Password"
                            />
                        </div>
                        <div className="form__item">
                            <label htmlFor="ConfirmPassword">
                                Confirm password
                            </label>
                            <Field
                                name="ConfirmPassword"
                                type="password"
                                autoComplete="on"
                                className={`inp ${
                                    errors.ConfirmPassword &&
                                    touched.ConfirmPassword
                                        ? "error"
                                        : ""
                                }`}
                                placeholder="Confirm password"
                            />
                        </div>

                        <button type="submit">Register</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Register;
