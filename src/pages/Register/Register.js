import React, {useContext} from "react";
import {CustomContext} from "../../Context";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Input from "./Input/Input";



const Register = () => {


    const {t, i18n} = useTranslation();
    const changeLanguage = (lang) =>{
        i18n.changeLanguage(lang)
    };
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({
        mode: "onBlur"
    });


    const {registerUser} = useContext(CustomContext);

    return (
        <section className={'register'}>
             <div className={'header__language login__language'}>
                 <button className={'header__language-btn'} type='button' onClick={() => changeLanguage("ru")}>Ru</button>
                 <button className={'header__language-btn'} type='button' onClick={() => changeLanguage("en")}>En</button>
             </div>
             <Link style={{color: "darkblue"}} className={'login__back'} to={'/'}>
                 {t("setUser.return")}
             </Link>

            <form onSubmit={handleSubmit(registerUser)} className={'register__form'}>
                <h1 className={'form__title'}>{t("setUser.register")}</h1>

                <input className={'form__input'} type="email" {...register("email",{required: 'This priority'}
                )} placeholder={t("setUser.userEmail")}/>  <span>{errors?.email && errors?.email?.message}</span><br/>

                <input className={'form__input'} type='text' {...register("login", {required: 'This priority'}
                )} placeholder={t("setUser.userLogin")}/>   <span>{errors?.login && errors?.login?.message}</span> <br/>

                <Input/>

                {/*<input className={'form__input'} type='tel' {...register("phone" ,{required: 'This priority'}*/}
                {/*)}  placeholder={t("setUser.userNumber")} />    <span>{errors?.phone && errors?.phone?.message}</span> <br/>*/}

                <input className={'form__input'} type='password'  {...register("password", {required: 'This priority'}
                )}  placeholder={t("setUser.userPassword")}/>   <span>{errors?.password && errors?.password?.message}</span> <br/>

                <input className={'form__input'} type='password' placeholder={t("setUser.checkPassword")}/> <br/>
                <button className={'form__input form__btn'} type='submit'>{t("setUser.makeAccount")}</button>

                <p>{t("setUser.haveAccount")} <Link className={'form__link'} style={{}} to={'/login'}>{t("setUser.login.btn")}</Link></p>
            </form>
        </section>
    );
};

export default Register;