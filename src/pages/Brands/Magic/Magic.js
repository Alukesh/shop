import React from 'react';
// import magicImg from "../../../Assets/Brands/Magic/magic.png";
import {useTranslation} from "react-i18next";
import {NavLink, Link} from "react-router-dom";

const Magic = () => {

    const {t} = useTranslation();

    return (
        <section className="magic">
                <div className="magic__content">
                    <div className="magic__inner">
                        <img src={'Assets/brands/brand.png'} alt="image"/>
                    </div>
                    <div className="magic__inner">
                        <h3 className="magic__title"  dangerouslySetInnerHTML={{__html: t("about.cardTitle.idea")}}/>
                        <p className="magic__text"  dangerouslySetInnerHTML={{__html: t("about.cardText.idea")}}/>
                    </div>
                </div>
                <div className="magic__content">

                    <div className="magic__inner">
                        <h3 className="magic__title"  dangerouslySetInnerHTML={{__html: t("about.cardTitle.magic")}}/>
                        <p className="magic__text"  dangerouslySetInnerHTML={{__html: t("about.cardText.magic")}}/>
                    </div>
                    <div className="magic__inner">
                        <img src={'Assets/brands/brand2.jpg'} alt="image"/>
                    </div>
                </div>

                <Link to={'/shop'} className="magic__go">
                    <button type="button" className="magic__btn" dangerouslySetInnerHTML={{__html: t("about.btn")}}/>
                </Link>

        </section>
    );
};

export default Magic;