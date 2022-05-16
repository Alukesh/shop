import { FaUserCircle , FaUserAlt} from 'react-icons/fa';
import {Link, NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {loadLanguages, use} from "i18next";
import React, {useContext, useState} from "react";
import {CustomContext} from "../../Context";

const Header = () => {
    const {t, i18n} = useTranslation();
    const {user, logOutUser, setCart, cart} = useContext(CustomContext);
    const [burger, setBurger ] = useState(false);


    const changeLanguage = (lang) =>{
      i18n.changeLanguage(lang)
    };

    return (
        <header className=" header">
            <div className="container">
                <nav className="header__wrapper">
                    <h1 className='logo'>
                        <Link to={'/'}>
                             <span className='header__logo-icon'>
                    <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                        d="M18.5169 22.6493L18.1587 20.9776C17.4207 17.5332 16.0683 14.2964 14.1387 11.3529V8.64058C15.0275 7.97178 15.6035 6.9084 15.6035 5.71289V4.24805C15.6035 3.84355 15.2756 3.51562 14.8711 3.51562H14.1387V0.732422C14.1387 0.32793 13.8107 0 13.4062 0C13.0018 0 12.6738 0.32793 12.6738 0.732422V3.52339C11.3584 3.6001 10.2059 4.29209 9.5 5.31528C8.79409 4.29209 7.6416 3.6001 6.32617 3.52339V0.732422C6.32617 0.32793 5.99824 0 5.59375 0C5.18926 0 4.86133 0.32793 4.86133 0.732422V3.51562H4.1289C3.72441 3.51562 3.39648 3.84355 3.39648 4.24805V5.71289C3.39648 6.9084 3.97246 7.97178 4.86133 8.64058V11.3529C2.93174 14.2964 1.57934 17.5332 0.841256 20.9776L0.483053 22.6493C0.406491 23.0066 0.605074 23.3658 0.948532 23.4909C3.69741 24.4923 6.57451 25 9.5 25C12.4255 25 15.3026 24.4923 18.0515 23.4909C18.3949 23.3658 18.5935 23.0067 18.5169 22.6493ZM12.918 4.98047H14.1387V5.71289C14.1387 6.92446 13.153 7.91016 11.9414 7.91016H10.2324V7.66602C10.2324 6.1852 11.4372 4.98047 12.918 4.98047ZM4.86133 4.98047H6.08203C7.56284 4.98047 8.76758 6.1852 8.76758 7.66602V7.91016H7.05859C5.84702 7.91016 4.86133 6.92446 4.86133 5.71289V4.98047ZM7.05859 9.375H11.9414C12.1922 9.375 12.4371 9.34956 12.6738 9.30132V10.8398H6.32617V9.30132C6.56289 9.34956 6.80781 9.375 7.05859 9.375ZM9.5 23.5352C6.95849 23.5352 4.45561 23.128 2.05073 22.3244L2.27353 21.2846C2.96118 18.0757 4.21054 15.0566 5.98901 12.3047L13.0109 12.3047C14.7894 15.0566 16.0388 18.0757 16.7264 21.2845L16.9492 22.3244C14.5444 23.128 12.0415 23.5352 9.5 23.5352Z"
                        fill="black"/></svg>
                </span>
                            Womazing
                        </Link>
                    </h1>
                    <ul className={`header__list ${burger && 'header__list_active'}`}>
                        <li><NavLink  className="header__list-item" to="/">{t("header.link1")}</NavLink></li>
                        <li><NavLink  className="header__list-item" to="/shop">{t("header.link2")}</NavLink></li>
                        <li><NavLink  className="header__list-item" to="/brands">{t("header.link3")}</NavLink></li>
                        <li><NavLink  className="header__list-item" to="/contact">{t("header.link4")}</NavLink></li>
                        { user.email === 'admin@mail.ru' &&
                            <li><NavLink  className="header__list-item" to="/clothes">{t("header.link5")}</NavLink></li>
                        }
                    </ul>
                    <div className='header__links'>
                        <a className={'header__links-call'} href="tel:+7 (495) 823-54-12">
                    <span className='header__call-icon'>
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath={"url(#clip0_2764_426)"} >
        <path
            d="M2.25241 4.81643C0.750584 6.31823 0.750584 8.7618 2.25238 10.2636L3.05007 9.46592C1.98816 8.40402 1.98814 6.67613 3.0501 5.61417C4.11203 4.55224 5.83992 4.55224 6.90185 5.61414L7.69953 4.81646C6.19776 3.31463 3.75418 3.31466 2.25241 4.81643Z"
            fill="#6E9C9F"/>
        <path
            d="M3.84127 6.39119C3.2091 7.02336 3.20907 8.05201 3.84124 8.68421L4.63895 7.88653C4.54578 7.79335 4.49446 7.66947 4.49446 7.53772C4.49446 7.40599 4.54581 7.2821 4.63898 7.18893C4.73215 7.09576 4.85603 7.04444 4.98776 7.04444C5.11952 7.04444 5.24343 7.09576 5.33658 7.18893L6.13426 6.39122C5.50209 5.75902 4.47344 5.75902 3.84127 6.39119Z"
            fill="#6E9C9F"/>
        <path
            d="M13.7483 4.43513L11.8551 2.54848L7.92337 6.47367L9.44758 8.04781C9.19214 8.50125 8.6379 9.3699 7.69334 10.3145C6.74865 11.2592 5.87366 11.8197 5.41587 12.0792L3.87261 10.5556L0.0022583 14.4029L1.8851 16.2983C2.60485 17.0181 3.69998 17.2046 4.6102 16.7625C5.99921 16.0879 8.09546 14.8431 10.1943 12.7443C12.2931 10.6455 13.5379 8.54924 14.2125 7.16023C14.3723 6.83109 14.45 6.47787 14.45 6.12692C14.45 5.5072 14.2078 4.89464 13.7483 4.43513ZM13.1977 6.66732C12.5609 7.97846 11.3845 9.95865 9.39661 11.9466C7.40868 13.9345 5.42849 15.1109 4.11735 15.7477C3.63935 15.9799 3.06287 15.8806 2.6842 15.5019L1.59746 14.4079L3.87543 12.1436L5.19015 13.4415L5.5419 13.2849C5.59905 13.2595 6.95947 12.6438 8.49116 11.1121C10.0239 9.57947 10.6267 8.23054 10.6515 8.17386L10.8041 7.82683L9.50677 6.48705L11.8559 4.14178L12.9512 5.23327C13.3307 5.6133 13.4298 6.18952 13.1977 6.66732Z"
            fill="#6E9C9F"/>
        </g>
        <defs>
        <clipPath id="clip0_2764_426">
        <rect width="17" height="17" fill="white"/>
        </clipPath>
        </defs>
        </svg>
                    </span>
                            +7 (495) 823-54-12</a>
                        <NavLink to="/cart" className={'header__links-cart'}>
                            <span className={'header__links-cart'} >
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M23.8454 8.2243C23.7281 8.10906 23.5642 8.05442 23.4012 8.07624H17.0343V5.26295C17.0343 2.4826 14.7804 0.228699 12.0001 0.228699C9.21971 0.228699 6.96582 2.4826 6.96582 5.26295V8.07624H0.598861C0.421164 8.07624 0.243523 8.07624 0.154646 8.2243C0.0352739 8.33902 -0.0201042 8.5051 0.00659291 8.66851L2.22761 20.81C2.53789 22.5037 4.00034 23.7431 5.72199 23.7713H18.278C20.0046 23.7289 21.464 22.4797 21.7724 20.7804L23.9934 8.66851C24.0201 8.5051 23.9647 8.33902 23.8454 8.2243ZM8.1503 5.26295C8.1503 3.13682 9.87388 1.41324 12 1.41324C14.1261 1.41324 15.8497 3.13682 15.8497 5.26295V8.07624H8.1503V5.26295ZM20.5879 20.6323C20.3884 21.7547 19.4179 22.5759 18.278 22.5868H5.72199C4.58212 22.5759 3.61161 21.7547 3.41215 20.6323L1.30959 9.26078H22.6904L20.5879 20.6323Z"
            fill="black"/>
        <path
            d="M16.4421 15.0354C16.7692 15.0354 17.0343 14.7702 17.0343 14.4431V12.6663C17.0343 12.3392 16.7692 12.074 16.4421 12.074C16.1149 12.074 15.8498 12.3392 15.8498 12.6663V14.4431C15.8497 14.7702 16.1149 15.0354 16.4421 15.0354Z"
            fill="black"/>
        <path
            d="M7.55803 15.0354C7.88514 15.0354 8.1503 14.7702 8.1503 14.4431V12.6663C8.1503 12.3392 7.88514 12.074 7.55803 12.074C7.23092 12.074 6.96576 12.3392 6.96576 12.6663V14.4431C6.96576 14.7702 7.23092 15.0354 7.55803 15.0354Z"
            fill="black"/>
        </svg>
                                {cart.length &&
                                <span className={'header__links-cartNum'}>{cart.length ? cart.reduce((acc,rec) => [+acc + +rec.count],0) : ''}</span>

                                }
                    </span>
                        </NavLink>
                        <div className={'header__language'}>
                            {/*{i18n.language === 'ru' ? <button className={'header__language-btn'} style={{background: loadLanguages.prototype === 'en' ? 'yellow' : ''}} type='button' onClick={() => changeLanguage("en")}>En</button>*/}
                            {/*        : <button className={'header__language-btn'} style={{background: loadLanguages.prototype === 'ru' ? 'yellow' : ''}} type='button' onClick={() => changeLanguage("ru")}>Ru</button>*/}
                            {/*}*/}
                            <button className={'header__language-btn'} style={{background: i18n.language === 'ru' ? "lightgrey" : ''}} type='button' onClick={() => changeLanguage("ru")}>Ru</button>
                            <button className={'header__language-btn'} style={{background: i18n.language === 'en' ? "lightgrey" : ''}} type='button' onClick={() => changeLanguage("en")}>En</button>
                        </div>

                        {
                            user.login.length
                                ? <Link style={{color: "red"}} onClick={() =>{ logOutUser(); setCart([])}} to={'/'}>{t("setUser.logout")}</Link>
                                :  <Link style={{color: "darkblue"}} to={'/login'}>{t("setUser.login.btn")}</Link>
                        }
                        {
                            user.login.length ? <NavLink className={'header__links-profile'} to="/profile"><FaUserAlt/></NavLink> : ''
                        }

                    </div>

                </nav>
                <div className={`burger ${burger && 'burger_active'}`} onClick={() => setBurger(!burger)}>
                    <p className="burger__line"> </p>
                </div>
                {
                    burger &&
                        <div onClick={() => setBurger(false)} className={'overlay'}> </div>
                }
            </div>

        </header>
    );
};

export default Header;