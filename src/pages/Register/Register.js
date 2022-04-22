import React, {useContext} from "react";
import {CustomContext} from "../../Context";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";



const Register = () => {


    const {t, i18n} = useTranslation();
    const changeLanguage = (lang) =>{
        i18n.changeLanguage(lang)
    };
    const {
        register,
        handleSubmit,
        setError: {errors},
        reset
    } = useForm();


    const {registerUser} = useContext(CustomContext);

    return (
        <section className={'register'}>
             <div className={'header__language login__language'}>
                 <button className={'header__language-btn'} type='button' onClick={() => changeLanguage("ru")}>Ru</button>
                 <button className={'header__language-btn'} type='button' onClick={() => changeLanguage("en")}>En</button>
             </div>
             <Link style={{color: "darkblue"}} className={'login__back'} to={'/'}>
                 На главную
             </Link>

            <form onSubmit={handleSubmit(registerUser)} className={'register__form'}>
                <h1 className={'form__title'}>Регистрация</h1>
                <input className={'form__input'} type="email" {...register("email",{
                    required: 'This priority'
                })} placeholder={'Введите email'}/><span>{errors?.email && errors?.email.message}</span><br/>
                <span>{errors?.email}</span>
                <input className={'form__input'} type='text' {...register("login", {
                    required: 'This priority'
                })} placeholder={'Введите login'}/> <br/>
                <span>{errors?.login}</span>
                <input className={'form__input'} type='tel' {...register("phone" ,{
                    required: 'This priority'
                })} placeholder={'Введите номер'}/> <br/>
                <span>{errors?.phone}</span>
                <input className={'form__input'} type='password' {...register("password", {
                    required: 'This priority'
                })} placeholder={'Введите пароль'}/> <br/>
                <span>{errors?.password}</span>
                <input className={'form__input'} type='password' placeholder={'Подтвердить пароль'}/> <br/>
                <button className={'form__input form__btn'} type='submit'>Создать</button>

                <p>Уже есть аккаунт? <Link className={'form__link'} style={{}} to={'/login'}>Вход</Link></p>
            </form>
        </section>
    );
};

export default Register;