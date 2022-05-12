import React, {useContext, useState, useRef} from "react";
import {HiOutlinePencilAlt} from 'react-icons/hi'
import {CustomContext} from "../../Context";
import {use} from "i18next";
import InputMask from "react-input-mask";
import {useForm} from "react-hook-form";
import Input from "../Register/Input/Input";
import {mask} from "inputmask/lib/mask";
import axios from "axios";


const Profile = () => {
    const {user, setUser } = useContext(CustomContext);
    const [userChange, setUserChange ] = useState(false);
    const [userTab, setUserTab ] = useState('setting');
    const [passwordChange, setPasswordChange ] = useState(false);


    const {
        reset,
        register,
        handleSubmit,
        formState:{
            errors
        },
        watch
    } = useForm({
        mode: 'onBlur'
    });
    const password = useRef({});
    password.current = watch("password", "");


    const changeUser = (data) =>{
        axios.patch(`http://localhost:8080/users/${user.id}`, data)
            .then(({data}) => { setUserChange(false);
            setUser(data);
            localStorage.setItem('user', JSON.stringify(data))
            });

    };
    const changePassword = (data) =>{
        axios.patch(`http://localhost:8080/users/${user.id}`,{ password: data.password})
            .then(({data}) => { setPasswordChange(false);
            });
        // console.log(data)
        setPasswordChange(false)
    };


    // console.log(user);

    return (
        <section className={'profile'}>
            <div className={'profile__top'}>
                <h1 className={'title'}>Мой профиль</h1>
                <div className={'profile__top-btns'}>
                    <button onClick={() => setUserTab('history')} className={`profile__top-btn ${userTab === 'history' ? 'profile__top-active' : ''}`}>История заказов</button>
                    <button onClick={() => setUserTab('setting')} className={`profile__top-btn ${userTab === 'setting' ? 'profile__top-active' : ''}`}>Настройки</button>
                </div>
            </div>

            <br/>
            {
                userTab === 'setting' ?
                    <>
                        <form onSubmit={handleSubmit(changeUser)} className={'profile__user'}>
                            <div className="profile__user-change">
                                <h2 className={'profile__user-title'}>Личные данные</h2>
                                <button type='button' className={'profile__user-btn'}
                                    // style={{background: userChange && '#6e9c9f', color: userChange && 'white'}}
                                        onClick={() => setUserChange(!userChange)}> {
                                    userChange ? 'Отменить' : <span><HiOutlinePencilAlt/> Изменить</span>
                                }</button>
                            </div>
                            <div className={'profile__user-info'}>
                                <p className={'profile__user-data'}><span>Логин*</span>
                                    { userChange? <input {...register('login')} defaultValue={user.login} type="text"/> : user.login}
                                </p>
                                <p className={'profile__user-data'}><span>Тел:</span>
                                    { userChange? <InputMask mask={`+\\9\\96(999) 999-999`} {...register('phone')} defaultValue={user.phone} type="tel"/> : user.phone}

                                </p>
                                <p className={'profile__user-data'}><span>Почта*</span>
                                    { userChange? <input {...register('email')} defaultValue={user.email} type="email"/> : user.email}
                                </p>
                                <p className={'profile__user-data'}><span>Дата рождения</span>
                                    { userChange? <input defaultValue={'2001.03.17'} type="date"/> : '2001.03.17'}
                                </p>
                            </div>
                            {
                                userChange ?
                                    <button  style={{background: userChange && '#6e9c9f', color: userChange && 'white'}}
                                        // type='submit' onClick={() => setUserChange(!userChange)}
                                             className={'profile__user-btn'}>Сохранить изменения</button>
                                    : ''
                            }
                        </form>




                        <form onSubmit={handleSubmit(changePassword)} className={'profile__user'}>
                            <div className="profile__user-change">
                                <h2 className={'profile__user-title'}>Пароль</h2>
                                <button type='button' className={'profile__user-btn'} onClick={() => setPasswordChange(!passwordChange)}>{
                                    passwordChange ? 'Отменить' : <span><HiOutlinePencilAlt/> Изменить</span>
                                }</button>
                            </div>
                            <div className={'profile__user-info'}>
                                {
                                    passwordChange &&
                                    <>
                                        <p className={'profile__user-data'}><span>Новый пароль*</span>
                                            <input {...register('password', {   required: "You must specify a password",
                                                minLength: {
                                                    value: 6,
                                                    message: "Нужно не менее 6 символов"}
                                            })} defaultValue={user.password} type="password"
                                                   name="password"
                                            />  {errors.password && <p className={'profile__user-err'}>{errors.password.message}</p>}
                                        </p>

                                        <p className={'profile__user-data'}><span>Повторите пароль*</span>
                                            <input {...register('password_repeat', {
                                                validate: value =>
                                                    value === password.current || "Пароли не совпадают"})}
                                                   name="password_repeat"
                                                   defaultValue={user.password} type="password"
                                            />  {errors.password_repeat && <p className={'profile__user-err'}>{errors.password_repeat.message}</p>}
                                        </p>
                                    </>
                                }
                            </div>
                            {
                                passwordChange ?
                                    <button  style={{background: passwordChange && '#6e9c9f', color: passwordChange && 'white'}}
                                        // type='submit' onClick={() => setUserChange(!userChange)}
                                             className={'profile__user-btn'}>Сохранить изменения</button>
                                    : ''
                            }
                        </form>
                        <div className={'profile__user'}>
                            <div className="profile__user-change">
                                <div>
                                    <h2 className={'profile__user-title'}>Пожписки</h2>
                                    <input type="checkbox" id={'subscr'}/>
                                    <label htmlFor="subscr" className={'profile__user-data_title'}> Получать предложения и акции</label>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <div className={'profile__orders'}>
                        {
                            user.orders.map((item, idx) => (
                                <div key={idx} className={'profile__orders-card'}>
                                    <div className={'profile__orders-header'}>
                                        <p>{item.name} <span>  {item.date}</span></p>
                                    </div>
                                    <ul className={'profile__orders-list'}>
                                            {
                                            item.clothes.map(el => (
                                                <li key={el.id} className={'profile__orders-item'}>
                                                    <img  className={'profile__orders-img'} src={`Shop/${el.image}`} alt=""/>
                                                        <p className={'profile__orders-info'}>{el.title}</p>
                                                        <p className={'profile__orders-info'}>{el.category}</p>
                                                        <p className={'profile__orders-info'}>кол-во: <span>{el.count}</span></p>
                                                        <p className={'profile__orders-info'}>{el.color} </p>
                                                        <p className={'profile__orders-info'}>{el.size}</p>
                                                        <p className={'profile__orders-info'}>цена:  {el.price}$</p>
                                                </li>
                                            ))
                                            }
                                        </ul>
                                </div>
                            ))
                        }
                    </div>
            }



        </section>
    );
};

export default Profile;