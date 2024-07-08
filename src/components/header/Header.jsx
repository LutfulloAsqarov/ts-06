import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import i18n from "../../lang/i18n";
import { useTranslation } from "react-i18next";
import "./header.scss";

const Header = () => {
    const { t, i18n } = useTranslation();
    return (
        <header>
            <div className="container header">
                <div className="header__logo">
                    {/* <Link to={"/"}> */}
                    <img src={logo} alt="" />
                    {/* </Link> */}
                </div>
                <ul className="header__list">
                    <li className="header__item">{t("Services")}</li>
                    <li className="header__item">{t("About")}</li>
                    <li className="header__item">{t("Contact")}</li>
                    <li className="header__item">
                        <Link to={"/login"}>{t("Log in")}</Link>
                    </li>
                    <li className="header__item">
                        <Link to={"/register"}>{t("Open an account")}</Link>
                    </li>
                    <li className="header__item">
                        <select
                            onChange={(e) =>
                                i18n.changeLanguage(e.target.value)
                            }
                        >
                            {/* <option value="">{t("Choose-lang")}</option> */}
                            <option value="en">eng</option>
                            <option value="uz">uzb</option>
                        </select>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
