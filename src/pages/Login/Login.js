import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import React, {useContext} from "react";
import {CustomContext} from "../../Context";

const Login = () => {
    const {t, i18n} = useTranslation();
    const changeLanguage = (lang) =>{
        i18n.changeLanguage(lang)
    };

    const {loginUser} = useContext(CustomContext);

    const {
        register,
        handleSubmit,
        setError: {
            errors
        },
        reset
    } = useForm();





    return (
        <section className={'login'}>
            <div className={'header__language login__language'}>
                <button className={'header__language-btn'} type='button' onClick={() => changeLanguage("ru")}>Ru</button>
                <button className={'header__language-btn'} type='button' onClick={() => changeLanguage("en")}>En</button>
            </div>

            <Link style={{color: "darkblue"}} className={'login__back'} to={'/'}>
                {t("setUser.return")}
            </Link>
            <form className={'login__form'} onSubmit={handleSubmit(loginUser)}>
                <h1 className={'form__title'}>{t("setUser.login.title")}</h1>
                <input {...register('email',{
                    required: 'This priority'
                })} className={'form__input'} type="email" placeholder={t("setUser.userEmail")}/> <br/>
                <input {...register('password')} className={'form__input'} type='password' placeholder={t("setUser.userPassword")}/> <br/>
                <button className={'form__input form__btn'} type='submit'>{t("setUser.login.btn")}</button>

                <p> {t("setUser.noAccount.title")}<Link className={'form__link'} to={'/register'}>{t("setUser.noAccount.register")}</Link></p>
            </form>
        </section>
    );
};

export default Login;