// import './contact.scss'
import About from "../Brands/About/About";
import {useTranslation} from "react-i18next";
import MapBlock from "./MapBlock/MapBlock";
import Form from "./Form/Form";
import {Link, NavLink} from "react-router-dom";
import React from "react";

const Contact = () => {
    const {t} = useTranslation();

    return (
        <div className={'contact'}>
            <div className="container">

            <div className="">
                <h2 className="about__title big-title" dangerouslySetInnerHTML={{__html: t("Contact.title")}}/>
                <div className="about__links">
                    <Link className="about__link" to='/'>{t("Contact.link1")}</Link>
                    -
                    <NavLink className="about__link" to={`/contact`}>{t("Contact.link2")}</NavLink>
                </div>

            </div>
            <MapBlock/>
            <Form/>

            </div>

        </div>
    );
};

export default Contact;