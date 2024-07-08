import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./login.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const initialState = {
    email: "",
    password: "",
};

const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
});

const Login = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="form">
            <div>
                <img src={logo} alt="" />
            </div>
            <h1 style={{ textAlign: "center" }}>{t("title")}</h1>
            <p className="request">
                {t("Don't have an account?")}
                <span>
                    <Link to={"/register"}> {t("Register")}</Link>
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
                            <label htmlFor="email">{t("Email")}</label>
                            <Field
                                name="email"
                                type="email"
                                className={`inp ${
                                    errors.email && touched.email ? "error" : ""
                                }`}
                                placeholder={t("Email")}
                            />
                        </div>
                        <div className="form__item">
                            <label htmlFor="password">{t("Password")}</label>
                            <Field
                                name="password"
                                type="password"
                                autoComplete="on"
                                className={`inp ${
                                    errors.password && touched.password
                                        ? "error"
                                        : ""
                                }`}
                                placeholder={t("Password")}
                            />
                        </div>

                        <button type="submit">{t("Continue")}</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;
