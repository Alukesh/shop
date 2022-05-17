import React from 'react';
import {useTranslation} from "react-i18next";
import {Link, NavLink} from "react-router-dom";

const About = ({path, title, link1, link2, link3}) => {
    const {t} = useTranslation();

    return (
        <section className="about">
            <div className="container">
                <h2 className="about__title big-title" dangerouslySetInnerHTML={{__html: t(title)}}/>
                <div className="about__links">
                    <Link className="about__link" to='/'>{t(link1)}</Link>
                    -
                    <NavLink className="about__link" to={`/brands`}>{t(link2)}</NavLink>
                </div>

            </div>
        </section>
    );
};

export default About;