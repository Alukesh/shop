import {Link, NavLink} from "react-router-dom";
import React from "react";
import {useTranslation} from "react-i18next";

const Order = () => {

    const {t} = useTranslation();

    return (
        <section className={'order'}>
            <div className="container">
                <h2 className="about__title big-title" dangerouslySetInnerHTML={{__html: t("Order.title")}}/>
                <div className="about__links">
                    <Link className="about__link" to='/'>{t("Order.link1")}</Link>
                    -
                    <NavLink className="about__link" to={`/cart`}>{t("Order.link2")}</NavLink>
                    -
                    <NavLink className="about__link" to={`/order`}>{t("Order.link3")}</NavLink>
                </div>

                <div className={'orderDone'}>
                    <div className={'orderDone__check'}>
                        <img src="./Assets/images/checkbox.png" alt=""/>
                        <p className={'orderDone__row'}>
                            <p className={'orderDone__title'}>Заказ успешно оформлен</p>
                            <p className={'orderDone__text'}>Мы свяжемся с вами в ближайшее время!</p>
                        </p>
                    </div>
                    <Link className={'collection__btn'} to={'/'} onClick={() => { window.scrollTo('pageYOffset', 0)}}>Перейти на главную</Link>
                </div>

            </div>
        </section>
    );
};

export default Order;